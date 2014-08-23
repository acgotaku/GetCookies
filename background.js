chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    console.log(tab);
    if (changeInfo.status === 'loading' && tab.url.indexOf("qiandao.today") != -1) {
        if (!chrome.runtime.onConnect.hasListeners()) {
            chrome.runtime.onConnect.addListener(function(port) {
                console.assert(port.name == "get_cookie");
                port.onMessage.addListener(function(request) {
                    console.log(request);
                    if (request.do == "get_cookie") {
                        var option = {};
                        if (request.site) {
                            option["url"] = request.site;
                        }
                        if (request.name != null) {
                            option["name"] = request.name;
                        }
                        if (request.domain) {
                            option["domain"] = request.domain;
                        }
                        chrome.cookies.getAll(option, function(cookies) {
                            var obj = {};
                            for (var i in cookies) {
                                var cookie = cookies[i];
                                obj[cookie.name] = cookie.value;
                            }
                            port.postMessage(obj);
                            console.log(obj);
                        });

                    }
                });
            });
        }

    }

});
// if (cookie) {
//     var data = cookies.name + "=" + cookies.value;
//     port.postMessage({"cookie": data});
//     console.log(data);
// }
// chrome.runtime.onMessage.addListener(
//     function(request, sender, sendResponse) {
//         if (request.do == "get_cookie") {
//             var data="";
//             chrome.cookies.get({"url": request.domain, "name": request.name}, function(cookies) {
//                 if(cookies){
//                     data = cookies.name + "=" + cookies.value;
//                 }

//             });
//             sendResponse({"cookie": data});
//             console.log(data);
//         }
//     });  