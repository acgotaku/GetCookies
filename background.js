chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status === 'loading') {
        chrome.runtime.onConnect.addListener(function(port) {
            console.assert(port.name == "get_cookie");
            port.onMessage.addListener(function(request) {
                console.log(request);
                if (request.do == "get_cookie") {
                    chrome.cookies.get({"url": request.domain, "name": request.name}, function(cookies) {
                        if (cookies) {
                            var data = cookies.name + "=" + cookies.value;
                            port.postMessage({"cookie": data});
                            console.log(data);
                        }

                    });

                }
            });
        });

    }

});

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