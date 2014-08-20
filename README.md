#GetCookies

Chrome下获取Cookies插件,突破HTTP ONLY限制

#使用文档

##绑定按钮点击事件
插件会寻找DOM树中属性为`[data-id='cookie_btn']`的元素标签
并绑定click事件,所以如果想获取Cookies就首先必须让页面上拥有这么一个这样属性的标签.
例如button标签,所有信息都是通过button标签的属性进行获取的.
例如:

		<button class="icon-btn-device" data-cookie=" " data-name="BDUSS" data-site="http://pan.baidu.com/" data-id="cookie_btn" >点击获取</button>

##设置获取Cookie的site
在button标签上添加属性data-site
例如:

		data-site=http://pan.baidu.com/

这样就知道你需要是获取百度页面的Cookie,当然也包括*.baidu.com域的Cookies

##设置获取Cookie的name
在button标签上添加属性data-name
例如:

		data-name=BDUSS

说明获取的Cookies的name为BDUSS.

##设置Cookie的value
在button标签上添加属性data-cookie
可以为空值,但不能没有这个属性.
获取到的Cookie会添加到这个属性上

##触发获取Cookie事件
JS模拟Click事件即可触发,之后读取data-cookie即可

例如:

data-cookie="BDUSS=ABCDEFG"