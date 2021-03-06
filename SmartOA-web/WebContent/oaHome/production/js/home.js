/**
 * 
 */
var mainContainHeight;
var app = angular.module('iomApp', []);
$(function() {
	initLayout();
	initTabTitle();
	$('#example1').hoverAccordion();

})
function insertShowTabs(newTab) {
	
	var contentControllerScope = angular.element("#contentController")
	.scope();
    var showTabs = contentControllerScope.showTabs;
	 //contentControllerScope.apply();
		var newMenu = newTab;
		var isExist = false;
		for (var i = 0; i < showTabs.length; i++) {
			if (showTabs[i].code == newMenu.code) {
				// 如果存在,则说明已经打开，将该标签标记为激活
				isExist = true;
				showTabs[i].isActive = true;
			} else {
				showTabs[i].isActive = false;
			}
		}
		if (isExist) {
			// 如果存在,操作到此已结束
			return;
		}
		var tab = {
				name : newTab.name,
				code : newTab.code,
				href : newTab.href,
				closeAble : true,
				isActive : true,
				icon : newTab.icon
			};
		showTabs.push(tab);
		contentControllerScope.$apply();
}


function closeTabs() {
	var spliceIndex = -1;
	var currentShowIndex = -1;
	var newShowIndex = -1;
	var contentControllerScope = angular.element("#contentController")
	.scope();
    var showTabs = contentControllerScope.showTabs;
	 //contentControllerScope.apply();
		var isExist = false;
			for (var i = 0; i < showTabs.length; i++) {
				// 找出当前激活的tab索引
				if (showTabs[i].isActive == true) {
					currentShowIndex = i;
					showTabs[i].isActive = false;
				}
				if (i == currentShowIndex) {
					spliceIndex = i;
					// 如果关闭的标签是当前激活的标签，需要重新设置激活的tab
					// 否则不设置newShowIndex，即不是切换激活的tab
					if (currentShowIndex != i) {
						break;
					}
					if (i == showTabs.length && i > 0) {
						// 如果关闭的tab是最后一个，则激活倒数第一个
						newShowIndex = i - 1;
					} else if (i > 0 && i < showTabs.length - 1) {
						// 如果关闭的不是最后一个，则激活后面一个
						newShowIndex = i + 1;
					} else {
						newShowIndex = 0;
					}
				}
			}
		if (newShowIndex >= 0) {
			showTabs[newShowIndex].isActive = true;
		} else {
			showTabs[currentShowIndex].isActive = true;
		}

		if (spliceIndex >= 0) {
			showTabs.pop(showTabs[spliceIndex]);
			// 从数组移除
			showTabs.splice(spliceIndex, 1); 
		}
		//contentControllerScope.changeTab();
		contentControllerScope.$apply();
}


function initLayout() {
	mainContainHeight = $(window).height() - 54;
	$("#contentBody").height(mainContainHeight);

	$(".tabContent").height(mainContainHeight - 33);

	$(".tabContent frame").height(mainContainHeight - 33);
}

function initTabTitle() {
	$("#tabTitle").webwidget_menu_glide({
		menu_text_size : "12",
		menu_text_color : "#FFF",
		menu_sprite_color : "#86C7EF",
		menu_background_color : "#2a3e54",
		menu_margin : "2",
		sprite_speed : "normal",
		container : "webwidget_menu_glide3"
	});
}
// 跨域解决方案
app.config(function($sceDelegateProvider) {
	$sceDelegateProvider.resourceUrlWhitelist([ 'self', 'http://**' ]);
});
var headerController= app.controller("headerController", function($scope, $http) {
	$scope.menus = [ {
		"id" : 1,
		"name" : "表单管理",
		"pid" : 0,
		"code" : "pmForm",
		"type" : 1,
		"isValid" : 1,
		"displayIndex" : 1,
		"icon":"fa fa-edit",
		"children" : [ {
			"id" : 11,
			"icon" : "setting icon",
			"name" : "表单列表",
			"pid" : 1,
			"code" : "pmForm",
			"type" : 1,
			"isValid" : 1,
			"href" : "form/pmForm/pmForm.jsp",
			"displayIndex" : 11
		} 	,
		{"id" : 12,
		"icon" : "configure icon",
		"name" : "新建表单",
		"pid" : 0,
		"code" : "newForm",
		"type" : 1,
		"isValid" : 1,
		"href" : "newForm",
		"displayIndex" : 12,
		"icon":"fa fa-wrench"
	}]
	}, {
		"id" : 2,
		"name" : "流程管理",
		"pid" : 0,
		"code" : "pmFlow",
		"type" : 1,
		"isValid" : 1,
		"href" : "terminal/app/insertModem/insertModem.jsp",
		"displayIndex" : 2,
		"icon":"fa fa-sitemap",
				"children" : [ {
			"id" : 21,
			"icon" : "setting icon",
			"name" : "流程分类",
			"pid" : 1,
			"code" : "flowClassify",
			"type" : 1,
			"isValid" : 1,
			"href" : "flow/flowClassify/flowClassify.jsp",
			"displayIndex" : 21
		} 	,
		{"id" : 22,
		"icon" : "configure icon",
		"name" : "流程配置",
		"pid" : 0,
		"code" : "flowConfig",
		"type" : 1,
		"isValid" : 1,
		"href" : "flow/flowConfig/flowConfig.jsp",
		"displayIndex" : 22,
		"icon":"fa fa-wrench"
	}	,
		{"id" : 23,
		"icon" : "configure icon",
		"name" : "流程定义",
		"pid" : 0,
		"code" : "flowDefine",
		"type" : 1,
		"isValid" : 1,
		"href" : "flow/flowDefine/flowDefine.jsp",
		"displayIndex" : 23,
		"icon":"fa fa-wrench"
	} ,
	{"id" : 24,
		"icon" : "configure icon",
		"name" : "流程发布",
		"pid" : 0,
		"code" : "workFlow",
		"type" : 1,
		"isValid" : 1,
		"href" : "workFlow",
		"displayIndex" : 24,
		"icon":"fa fa-wrench"
	}, {"id" : 25,
		"icon" : "configure icon",
		"name" : "绑定流程列表",
		"pid" : 0,
		"code" : "flowBandingList",
		"type" : 1,
		"isValid" : 1,
		"href" : "flowBandingList",
		"displayIndex" : 25,
		"icon":"fa fa-wrench"
	}]}, {
		"id" : 3,
		"name" : "任务管理",
		"pid" : 0,
		"code" : "pmModem",
		"type" : 1,
		"isValid" : 1,
		"href" : "terminal/app/pmModem/pmModem.jsp",
		"displayIndex" : 1,
		"icon":"fa fa-tasks",
		"children" : [ {
			"id" : 11,
			"icon" : "setting icon",
			"name" : "代办任务",
			"pid" : 1,
			"code" : "traModemManage",
			"type" : 1,
			"isValid" : 1,
			"href" : "terminal/app/traModem/traModem.jsp",
			"displayIndex" : 11
		} 	,
		{"id" : 12,
		"icon" : "configure icon",
		"name" : "发起任务",
		"pid" : 0,
		"code" : "traModemCreate",
		"type" : 1,
		"isValid" : 1,
		"href" : "terminal/app/newModemOrder/newModemOrder.jsp",
		"displayIndex" : 12,
		"icon":"fa fa-wrench"
	}]
	}, {
		"id" : 4,
		"name" : "系统管理",
		"pid" : 0,
		"code" : "sysManager",
		"type" : 1,
		"isValid" : 1,
		"href" : "",
		"displayIndex" : 4,
		"icon":"fa fa-gears",
		"children" : [ {
			"id" : 41,
			"icon" : "setting icon",
			"name" : "组织管理",
			"pid" : 1,
			"code" : "pmOrg",
			"type" : 1,
			"isValid" : 1,
			"href" : "account/pmOrganization/pmOrganization.jsp",
			"displayIndex" : 41
		} 	,
		{"id" : 42,
		"icon" : "configure icon",
		"name" : "人员管理",
		"pid" : 0,
		"code" : "pmAccount",
		"type" : 1,
		"isValid" : 1,
		"href" : "account/pmAccount/pmAccount.jsp",
		"displayIndex" : 42,
		"icon":"fa fa-wrench"
	}]
	}
	];

	// 打开菜单操作
	$scope.openMenu = function(item) {
		if (item.type == 0) {
			return false;
		}
		tabContextMenuFlag = false;
		var contentControllerScope = angular.element("#contentController")
				.scope();
		var showTabs = contentControllerScope.showTabs;
		var newMenu = item;
		var isExist = false;
		for (var i = 0; i < showTabs.length; i++) {
			if (showTabs[i].code == newMenu.code) {
				// 如果存在,则说明已经打开，将该标签标记为激活
				isExist = true;
				showTabs[i].isActive = true;
			} else {
				showTabs[i].isActive = false;
			}
		}
		if (isExist) {
			// 如果存在,操作到此已结束
			return;
		}
		var tab = {
			name : newMenu.name,
			code : newMenu.code,
			href : newMenu.href,
			closeAble : true,
			isActive : true,
			icon : newMenu.icon
		};
		showTabs.push(tab);
//		contentControllerScope.apply();
	}
	
	$scope.logout=function(){
		window.close();
	}
});
app.controller("contentController", function($scope, $http) {
	$scope.iframeHeight = $(window).height() - 10;
	$scope.showTabs = [ {
		name : '首页',
		code : 'homePage',
		href : 'oaHome/production/home.jsp',
		closeAble : false,
		isActive : true,
		icon : 'home icon'
	} ];

	$scope.showLeftSidebar = function() {
		$("#leftSidebar").sidebar('toggle');
	}
	$scope.showRightSidebar = function() {
		$("#rightSidebar").sidebar('toggle');
	}

	// 打开菜单操作
	$scope.openMenu = function(item) {
		tabContextMenuFlag = false;
		var showTabs = $scope.showTabs;
		var newMenu = item;
		var isExist = false;
		for (var i = 0; i < showTabs.length; i++) {
			if (showTabs[i].code == newMenu.code) {
				// 如果存在,则说明已经打开，将该标签标记为激活
				isExist = true;
				showTabs[i].isActive = true;
			} else {
				showTabs[i].isActive = false;
			}
		}
		if (isExist) {
			// 如果存在,操作到此已结束
			return;
		}
		var tab = {
			name : newMenu.name,
			code : newMenu.code,
			href : newMenu.href,
			closeAble : true,
			isActive : true,
			icon : newMenu.icon
		};
		showTabs.push(tab);
	}

	// 这里改成请求菜单数据的
	/*
	 * $http({ url : basePath + '/authController/qrySubMenu.get', method :
	 * 'POST' }).success(function(data, header, config, status) { // 响应成功
	 * $scope.menus = data; }).error(function(data, header, config, status) { //
	 * 处理响应失败 });
	 */
	$scope.menus = [ {
		"id" : 1,
		"icon" : "desktop icon",
		"name" : "父菜单",
		"pid" : 0,
		"code" : "monitor",
		"type" : 0,
		"isValid" : 1,
		"href" : "",
		"displayIndex" : 1,
		"children" : [ {
			"id" : 5,
			"icon" : "setting icon",
			"name" : "百度",
			"pid" : 1,
			"code" : "systemSetting",
			"type" : 1,
			"isValid" : 1,
			"href" : "http://baidu.com",
			"displayIndex" : 2
		} ]
	}, {
		"id" : 9,
		"icon" : "configure icon",
		"name" : "sina",
		"pid" : 0,
		"code" : "weihu",
		"type" : 1,
		"isValid" : 1,
		"href" : "http://www.sina.com.cn/",
		"displayIndex" : 3
	} ];

	initXtabController($scope, $http);
});

var initXtabController = function($scope, $http) {
	$scope.changeTab = function() {
		var tabs = $scope.showTabs;
		for (var i = 0; i < tabs.length; i++) {
			if (tabs[i] == this.tab) {
				tabs[i].isActive = true;
			} else {
				tabs[i].isActive = false;
			}
		}
	}
	$scope.closeThisTab = function() {
		var spliceIndex = -1;
		var tabs = $scope.showTabs;
		var currentShowIndex = -1;
		var newShowIndex = -1;
		// 找出需要关闭tab的索引
		for (var i = 0; i < tabs.length; i++) {
			// 找出当前激活的tab索引
			if (tabs[i].isActive == true) {
				currentShowIndex = i;
				tabs[i].isActive = false;
			}
			if (tabs[i] == this.tab) {
				spliceIndex = i;
				// 如果关闭的标签是当前激活的标签，需要重新设置激活的tab
				// 否则不设置newShowIndex，即不是切换激活的tab
				if (currentShowIndex != i) {
					break;
				}
				if (i == tabs.length && i > 0) {
					// 如果关闭的tab是最后一个，则激活倒数第一个
					newShowIndex = i - 1;
				} else if (i > 0 && i < tabs.length - 1) {
					// 如果关闭的不是最后一个，则激活后面一个
					newShowIndex = i + 1;
				} else {
					newShowIndex = 0;
				}
			}
		}
		if (newShowIndex >= 0) {
			tabs[newShowIndex].isActive = true;
		} else {
			tabs[currentShowIndex].isActive = true;
		}

		if (spliceIndex >= 0) {
			// 从数组移除
			tabs.splice(spliceIndex, 1);
		}
	}
}