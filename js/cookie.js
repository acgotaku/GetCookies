
function onload(func) {
    if (document.readyState === "complete") {
        func();
    } else {
        window.addEventListener('load', func);
    }
}

onload(function() {
    console.log("Cookies Helper Start");
    var export_btn = document.querySelector("[data-id='cookie_btn']");
    if(export_btn){
        var site = export_btn.getAttribute("data-site");
        var name = export_btn.getAttribute("data-name");
        export_btn.addEventListener('click', function() {
            var port = chrome.runtime.connect({name: "get_cookie"});
            port.postMessage({"do": "get_cookie", "domain": site, "name": name});
            port.onMessage.addListener(function(msg) {
                export_btn.setAttribute("data-cookie",msg.cookie);
            });

        }, false);
    }
});
