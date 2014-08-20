
function onload(func) {
    if (document.readyState === "complete") {
        func();
    } else {
        window.addEventListener('load', func);
    }
}

onload(function() { 
        window.addEventListener('click', function(event) {
            var export_btn=event.target;
            if(export_btn.getAttribute("data-toggle")=="get-cookie"){
             var site = export_btn.getAttribute("data-site");
            var name = export_btn.getAttribute("data-name");
            var domain = export_btn.getAttribute("data-domain");
            var port = chrome.runtime.connect({name: "get_cookie"});
            port.postMessage({"do": "get_cookie", "site": site, "name": name,"domain":domain});
            port.onMessage.addListener(function(msg) {
                export_btn.setAttribute("data-cookie",JSON.stringify(msg));
            });
            }

        }, false);
    
});
