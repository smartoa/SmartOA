var flowConfigList = [];
var tacheConfigList = [];

$(document).ready(function() {
	
	// 初始化grid
	initGrid();
	flowDataShow();

 	       
})


// 初始化grid
function initGrid() {
	
	var opt = {
	
		
		colModel : [ {
			name : 'FLOW_ID',
			label : '',
			width : 10,
			sorttype : "string",
	
		},{
			name : 'FLOW_NAME',
			label : '名称',
			width : 230,
			sorttype : "string",
			edittype: "text",
			editable: true,
		},{
			name : 'FLOW_BANDING',
			label : '',
			width : 10,
			sorttype : "string",
			
		},{
			name : 'FLOW_TYPE',
			label : '分类',
			width : 230,
			sorttype : "string",
			edittype: "text",
			editable: true,
		}, {
			name : 'FLOW_SEQ',
			label : '排序',
			width : 210,
			sorttype : "string",
			edittype: "text",
			editable: true,
			
		}, {
			name : 'HAS_MANAGER',
			label : '是否配置任务负责人',
			width : 200,
			sorttype : "string",
			edittype: "text",
			editable: true,
			
		},{
			name: '操作',
			width:200,
           	formatter: function(cellval, opts, rwdat, _act) {
            return '<div>' +                
                '<button type="button" class="btn btn-info">编辑</button>&nbsp&nbsp' +
                '<button type="button" class="btn btn-info" onclick = "tacheConfig()">配置</button>' +
                '</div>'
        	}
            }],

		rowNum : 12,
		width:$(window).width()-30,
		height:480,
		pager : true,
		cached : true, // 把用户自定义的列展示设置缓存在本地
		data : flowConfigList,
		shrinkToFit: false,

	};
	
	$grid = $("#flowConfigGrid").grid(opt);
	//$("#flowConfigGrid").grid("hideCol",['FLOW_ID','FLOW_BANDING']);
	
};


function flowDataShow(){

	$.ajax({
		url : 'flowConfig/flowDataShow', // 跳转到后台action
		async : false,
		data : {
		},
		type : 'post',
		cache : false,
		dataType : 'json',
		success : function(data) {

			if (data.length == 0) {
				alert("没有流程数据显示")
			}else{
			$("#flowConfigGrid").grid("reloadData", data);
			}
		},
		error : function() {
			layer.msg("查询异常！");
		}
	});
}


// 初始化内层grid
function initTacheGrid() {
	
	var opt = {
		colModel : [ {
			name : 'SUB_FLOW_ID',
			sorttype : "string",
			label : '',
			width : 10,
			
		}, {
			name : 'FLOW_NAME',
			sorttype : "string",
			label : '流程名称',
			width : 180,
			
			
		},{
			name : 'processId',
			sorttype : "string",
			label : '',
			width : 10,
			
			
		},{
			name : 'processName',
			sorttype : "string",
			label : '绑定流程名称',
			width : 180,
			
			
		}, {
			name : 'tacheCode',
			label : '',
			width : 10,
			sorttype : "string",
			
		}, {
			name : 'tachName',
			label : '环节名称',
			width : 100,
			sorttype : "string",
			
		}, {
			name : 'MANAGER',
			label : '人员',
			//width : 160,
			sorttype : "string",
			formatter: function(cellval, opts, rwdat, _act) {
            return '<div type="button" class="glyphicon glyphicon-edit" onclick = "personConfig()">' +            
                '</div>'+
                '<button  type="button" class="badge" data-toggle="popover" data-placement="right" title="提示语" data-content="有俩单子">2</button>' 
        	}		
		},{
			name : 'EVENT',
			label : '操作',
			//width : 160,
			sorttype : "string",
			formatter: function(cellval, opts, rwdat, _act) {
            return '<div type="button" class="glyphicon glyphicon-edit" onclick = "formConfig()">' +
                '</div>'+
                '<a href="#"><span class="badge">2</span></a>'
        	}		
		},{
			name : 'REGULATION',
			label : '规则',
			//width : 160,
			sorttype : "string",
			formatter: function(cellval, opts, rwdat, _act) {
            return '<div type="button" class="glyphicon glyphicon-edit" onclick = "jump()">' +
                '</div>'+
                '<a href="#"><span class="badge">2</span></a>'
        	}		
		},{
			name : 'FORM',
			label : '表单',
			//width : 160,
			sorttype : "string",
			formatter: function(cellval, opts, rwdat, _act) {
            return '<div type="button" class="glyphicon glyphicon-edit" onclick = "formConfig()">' +
                '</div>'+
                '<a href="#"><span class="badge">2</span></a>'
        	}		
		},{
			name : 'REMIND',
			label : '提醒',
			//width : 160,
			sorttype : "string",
			formatter: function(cellval, opts, rwdat, _act) {
            return '<div type="button" role = "button" class="glyphicon glyphicon-edit" onclick = "jump()">' +
                '</div>'
        	}		
		} ],

		rowNum : 12,
		width:950,
		height:380,
		pager : true,
		cached : true, // 把用户自定义的列展示设置缓存在本地
		data : tacheConfigList,
		shrinkToFit: false,

	};

	$grid = $("#tacheConfigGrid").grid(opt);
	//$("#tacheConfigGrid").grid("hideCol",['SUB_FLOW_ID','tacheCode','processId']);
	
	tacheDataReload();
	
};
//动态获取环节数据
function tacheDataReload(){
	
	var rowid = $("#flowConfigGrid").grid("getGridParam", "selrow");
	var rowData = $("#flowConfigGrid").grid("getRowData", rowid);
	
	$.ajax({
		url : 'workFlow/getProcessTaskInfo', // 跳转到后台action
		async : false,
		data : {
		processId : rowData.FLOW_BANDING,
		flowId : rowData.SUB_FLOW_ID,
		flowName : rowData.FLOW_NAME,
		},
		type : 'post',
		cache : false,
		dataType : 'json',
		success : function(data) {

			if (data.length == 0) {
				alert("没有环节数据显示")
			}else{
			//var json = eval('(' + data + ')'); 
			$("#tacheConfigGrid").grid("reloadData", data);
			}
		},
		error : function() {
			layer.msg("查询异常！");
		}
	});
}


function tacheConfig(){
	
		
	 	$.ajax('flow/flowConfig/subFlowConfig.html').then(function (content) {
	        var $popup = $(content);
	        var options = {
	            height: 420,
	            width : 1000,         
	            content: $popup,
	            modal: false,
	            draggable: true,
	            autoResizable: true
	            
	        };
		
		var popup = fish.popup(options);
		initTacheGrid();
		
        });
		     
}

function personConfig(){
	
	$.ajax('flow/flowConfig/personConfig.html').then(function (content) {
	        var $popup = $(content);
	        var options = {
	            height: 600,
	            width : 400,         
	            content: $popup,
	            modal: false,
	            draggable: true,
	            autoResizable: true
	            
	        };
		
		var popup = fish.popup(options);
		initOrgTree();
		
		 $popup.on('click', '#personSelectBtn', function() {
		 
            	setManagerOrg();                
                popup.close();
            });
})
}

//初始化人员组织树
function initOrgTree(){

		var orgTreeOption =  
		{   
			view: {
				showLine: true,
				selectedMulti: false
			},
             check: {
                enable: true,
                chkStyle: "radio",
                radioType: "all"
                //chkboxType:  { "Y" : "", "N" : "" } // Y 属性定义 checkbox 被勾选后的情况； N 属性定义 checkbox 取消勾选后的情况； "p" 表示操作会影响父级节点； "s" 表示操作会影响子级节点。
            },
            callback: {
			
			//onExpand: onExpand
			},
            data: {
                simpleData: {
                    enable: true
                }
            },
            fNodes:[]
        };
        
       /* $("#expandAllBtn").click(function() {
        	$("#orgTree").tree("expandAll", true);
        })
        
		$("#collapseAllBtn").click(function() {
        	$("#orgTree").tree("expandAll", false);
        })*/
		
		 $.ajax({
	        url: 'flowConfig/initOrgTree',
	        // 跳转到 action
	        async: true,
	        // 注意首页初始化要使用同步方式
	        data: {
	             
	        },
	        type: 'POST',
	        cache: false,
	        dataType: 'json',
	        success: function(data) {
	            orgTreeOption.fNodes = data;
	            $("#orgTree").tree(orgTreeOption);
	        },
	        error: function() {
	            //alert("数据获取异常");
	        }
	    });
}

function setManagerOrg(){
	
	
	var rowid = $("#tacheConfigGrid").grid("getGridParam", "selrow");
	var rowData = $("#tacheConfigGrid").grid("getRowData", rowid);
	var selectedNode  = $("#orgTree").tree("getCheckedNodes");
	/*var nodeObject = {};
	nodeObject.id=selectedNode[0].id;
	nodeObject.name=selectedNode[0].name;
	nodeObject.pid=0;*/
	
	
	if(selectedNode.length==0){alert("请选择人员组织！")}else{
	$.ajax({
	        url: 'flowConfig/setManagerOrg',
	        // 跳转到 action
	        async: true,
	        // 注意首页初始化要使用同步方式
	        data: {
	             ORG_ID : selectedNode[0].id,
	             FLOW_ID : rowData.SUB_FLOW_ID,
	             TACHE_ID : rowData.TACHE_ID
	        },
	        type: 'POST',
	        cache: false,
	        dataType: 'json',
	        success: function(data) {
	            
	            if(data==1){
	            	alert("人员设置成功！");
	            	
	            }else{
	            	alert("人员设置失败！")
	            }
	        },
	        error: function() {
	            alert("人员设置异常");
	        }
	    });
	    
	 }
}


function formConfig(){
	
	$.ajax('flow/flowConfig/formConfig.html').then(function (content) {
	        var $popup = $(content);
	        var options = {
	            height: 300,
	            width : 400,         
	            content: $popup,
	            modal: false,
	            draggable: true,
	            autoResizable: true
	            
	        };
		
		var popup = fish.popup(options);
		initFormSelection();
		
		 $popup.on('click', '#formSelectBtn', function() {
		 
            	setForm();                
                popup.close();
            });
})
}


function initFormSelection(){

	var $select = $('#formSelection').multiselect({
    createItem: function(e, item) {
        //console.log('new item created:', item);
    }
	});	
	$.ajax({
		type : "POST",
		dataType : "json",
		url : "flowConfig/initFormSelection",
		data : {},
		success : function(data) {
			
			$select.multiselect('option',{dataTextField:'FORM_NAME',dataValueField:'FORM_ID',dataSource:data});
		},
		error : function() {
			layer.msg("初始化失败！");
		}
	});

}


function setForm(){
	
	var rowid = $("#tacheConfigGrid").grid("getGridParam", "selrow");
	var rowData = $("#tacheConfigGrid").grid("getRowData", rowid);
	var $select = $('#formSelection').multiselect({
    createItem: function(e, item) {
        //console.log('new item created:', item);
    }
	});
	var formList = $select.multiselect('value');
	if(formList.length == 0){
		alert("请选择表单数据！");
	}else{
		
		$.ajax({
		type : "POST",
		dataType : "json",
		url : "flowConfig/setForm",
		data : {
			formData : formList.toString(),
			FLOW_ID : rowData.SUB_FLOW_ID,
	        TACHE_ID : rowData.TACHE_ID
		},
		success : function(data) {
			
			if(data==1){
				alert("保存成功!")
			}
		},
		error : function() {
			layer.msg("异常！");
		}
	});
	}
}