var button = function() {
    var cookie_btn = $("<span>").addClass("icon-btn-device").css({float:"none"}).attr("data-cookie", " ").attr("data-name", "BDUSS").attr("data-site", "http://pan.baidu.com/").attr("data-id", "cookie_btn").text("点击获取");
    $(".icon-btn-device").after(cookie_btn);
};

var script = document.createElement('script');
script.id = "button_script";
script.appendChild(document.createTextNode('(' + button + ')();'));
(document.body || document.head || document.documentElement).appendChild(script);

