
function onload(func) {
    if (document.readyState === "complete") {
        func();
    } else {
        window.addEventListener('load', func);
    }
}

onload(function() { 
    var export_btn = document.querySelector("[data-toggle='get-cookie']");
    if(export_btn){
        console.log("Cookies Helper Start");
        var site = export_btn.getAttribute("data-site");
        var name = export_btn.getAttribute("data-name");
        var domain = export_btn.getAttribute("data-domain");
        export_btn.addEventListener('click', function() {
            var port = chrome.runtime.connect({name: "get_cookie"});
            port.postMessage({"do": "get_cookie", "site": site, "name": name,"domain":domain});
            port.onMessage.addListener(function(msg) {
                export_btn.setAttribute("data-cookie",JSON.stringify(msg));
            });

        }, false);
    }
});
