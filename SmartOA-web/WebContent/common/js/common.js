var loginPath = "home/login.jsp";
Date.prototype.format = function(fmt) {
	fmt = fmt || "yyyy-MM-dd hh:mm:ss";
	var o = {
		"M+" : this.getMonth() + 1, // 月份
		"d+" : this.getDate(), // 日
		"h+" : this.getHours(), // 小时
		"m+" : this.getMinutes(), // 分
		"s+" : this.getSeconds(), // 秒
		"q+" : Math.floor((this.getMonth() + 3) / 3), // 季度
		"S" : this.getMilliseconds()
	// 毫秒
	};
	if (/(y+)/.test(fmt))
		fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "")
				.substr(4 - RegExp.$1.length));
	for ( var k in o)
		if (new RegExp("(" + k + ")").test(fmt))
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k])
					: (("00" + o[k]).substr(("" + o[k]).length)));
	return fmt;
}

function trim(value) {
	return this.replace(/(^\s*)|(\s*$)/g, "");
}

$(function() {
	checkLoginState();
	String.prototype.trim = function() {
		return $.trim(this);
	}
	// 初始化日期空间
	window.laydate && initLaydate();
	initArrayMethod();
	initSemantic();
});

function initSemantic() {
	$(".x-dropdown").each(function() {
		$(this).dropdown();
	});

	$(".x-title").each(function() {
		var text = $(this).attr("x-title-value");
		if (text) {
			$(this).popup({
				content : text,
				variation : "mini",
				on : 'hover'
			});
		}
	});

	$(".x-input").each(function() {
		var text = $(this).find("input").attr("placeholder");
		$(this).find("i.icon").not(".x-title").popup({
			content : text,
			/*variation : "mini",*/
			on : 'hover'
		});
	});
	$(".x-accordion").each(function() {
		$(this).accordion({
			selector : {
				trigger : '.title'
			}
		});
	});
}

function getQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg);
	if (r != null)
		return decodeURI(r[2]);
	return null;
}

function initLaydate() {
	$(".xlaydate").each(function() {
		var id = $(this).attr("id");
		laydate({
			elem : '#' + id,
			event : 'focus',
			istime : true,
			format : 'YYYY-MM-DD hh:mm:ss',
			choose : function() {
				$('#' + id).change();
				// add by bobping 当时间选择器选择时间后使input失去焦点触发angularjs模型更新
				$('#' + id).blur();
			}
		});
	});
	
	$(".xlaydate-ymd").each(function() {
		var id = $(this).attr("id");
		laydate({
			elem : '#' + id,
			event : 'focus',
			istime : true,
			format : 'YYYY-MM-DD',
			choose : function() {
				$('#' + id).change();
				// add by bobping 当时间选择器选择时间后使input失去焦点触发angularjs模型更新
				$('#' + id).blur();
			}
		});
	});
}

// 数组扩展
function initArrayMethod() {

	Array.prototype.indexOf = Array.prototype.indexOf || function(e) {
		for (var i = 0, j; j = this[i]; i++) {
			if (j == e) {
				return i;
			}
		}
		return -1;
	}
	Array.prototype.lastIndexOf = Array.prototype.lastIndexOf || function(e) {
		for (var i = this.length - 1, j; j = this[i]; i--) {
			if (j == e) {
				return i;
			}
		}
		return -1;
	}
}

function checkLoginState() {
	if (window.checkLogin == null || window.checkLogin == true) {
		if (window.hasLogin != null && !window.hasLogin) {
			window.location.href = loginPath;
			// if ($('#loginRegion').length == 0
			// && !$('#loginRegion').hasClass("visible")) {
			// var iframe = "<div id='loginRegion'
			// style='width:100%;height:100%;margin-top:0px !important;over'
			// class='ui autumn leaf image transition hidden'><iframe
			// width='100%' class='' style='border:0px' height='100%'
			// src='home/login.jsp'></iframe></div>";
			// var oldBodyChildElement = $("body").children();
			// oldBodyChildElement.hide();
			// $("body").append(iframe);
			// $('#loginRegion').find("iframe").on("load", function() {
			// $("#loginRegion").transition('fade');
			// });
			// }
		}
	}
}