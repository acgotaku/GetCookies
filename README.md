#GetCookies

Chrome下获取Cookies插件,突破HTTP ONLY限制

#使用文档

##绑定按钮点击事件
插件会寻找DOM树中属性为`[data-toggle='get-cookie']`的元素标签并绑定click事件,
所以如果想获取Cookies就首先必须让页面上有一个带此属性的标签.  
例如button标签,所有信息都是通过button标签的属性进行获取的.

		<button class="icon-btn-device" data-cookie=" " data-name="BDUSS" data-site="http://pan.baidu.com/" data-toggle="get-cookie" >点击获取</button>

##设置获取Cookie的site(可选)
在button标签上添加属性data-site
例如:

		data-site=http://pan.baidu.com/

这样设置的是获取百度网盘页面下的Cookie,当然也包括*.baidu.com域的Cookies

##设置获取Cookie的name(可选)
在button标签上添加属性data-name
例如:

		data-name=BDUSS

说明获取的Cookies的name为BDUSS.

##设置获取Cookie的domain(可选)
在button标签上添加属性data-domain
例如:

		data-domain=.baidu.com

设置获取的Cookies的domain属性为.baidu.com.

##设置Cookie的value
在button标签上添加属性data-cookie
可以为空值,但不能没有这个属性.
获取到的Cookie会添加到这个属性上

##触发获取Cookie事件
JS模拟Click事件即可触发,之后读取data-cookie即可.

例如:

data-cookie="[{BDUSS:ABCDEF}]"

返回一个对象数组文本,可以使用JSON.parse 转换成对象数组.