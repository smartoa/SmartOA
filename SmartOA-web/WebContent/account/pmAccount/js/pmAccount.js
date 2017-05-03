//初始化魔百和管理页面
var moboxList = [];


$(document).ready(function() {
	
	// 初始化grid
	initGrid();
	staffDataShow();
	
	
	 $.ajax('pmAccount/accountEdit.html').then(function (content) {
        var $popup = $(content);
        var options = {
            height: 420,
            width : 700,         
            content: $popup,
            modal: false,
            draggable: true,
            autoResizable: true
            
        };
		//新建按钮
		
		$("#newAccountBtn").click(function () {
            var popup = fish.popup(options);
            

            $popup.on('click', '#saveBtn', function() {
            	saveAccount();
                popup.close();
                staffDataShow();
            });
            
            $popup.on('click', '#returnBtn', function() {

                popup.close();
                
            });
        });
		        
        
    })
    
});

// 初始化grid
function initGrid() {
	
	var opt = {
		colModel : [ {
			name : 'STAFF_ID',
			label : '编号',
			width : 60,
			sorttype : "string",
			edittype: "text",
			editable: true,
		},{
			name : 'ACCOUNT',
			label : '账号',
			width : 160,
			sorttype : "string",
			edittype: "text",
			editable: true,
		}, {
			name : 'STAFF_NAME',
			label : '显示名',
			width : 160,
			sorttype : "string",
			edittype: "text",
			editable: true,
			
		}, {
			name : 'STAFF_TYPE',
			label : '类型',
			width : 140,
			sorttype : "string",
			edittype: "text",
			editable: true,
			
		}, {
			name : 'STATE',
			label : '是否启用',
			width : 120,
			formatter:function(cellval,opts,rwdat){
				var temp = null;
				if(cellval == "0"){
					temp = "禁用";
				}else if(cellval == "1"){
					temp = "启用";
				}
				return temp;
			},
			sorttype : "string",
			edittype: "text",
			editable: true,
			
		}, {
			name : 'CREATE_DATE',
			label : '创建时间',
			width : 210,
			sorttype : "string",
			edittype: "text",
			editable: true,
			
		}, {
			name: '操作',
			width:220,
           	formatter: function(cellval, opts, rwdat, _act) {
            return '<div>' +                
                '<button type="button" class="btn btn-info">编辑</button>&nbsp&nbsp' +
                '<button type="button" class="btn btn-info">详细信息</button>' +
                '</div>'
        	}
            }],

		rowNum : 12,
		width:$(window).width()-30,
		height:420,
		pager : true,
		cached : true, // 把用户自定义的列展示设置缓存在本地
		data : moboxList,
		shrinkToFit: false,
		gridview:false,
		
		afterInsertRow: function(e, rowid, aData){
        switch (aData.STATE) {
            case '0':
                jQuery("#pmAccountGrid").grid('setCell',rowid,'STATE','',{color:'red'});               
            break;
            case '1':
                jQuery("#pmAccountGrid").grid('setCell',rowid,'STATE','',{color:'green'});
            break;
            
        	};
    	},

	};
	
	$grid = $("#pmAccountGrid").grid(opt);
	
};


function staffDataShow(){

	$.ajax({
		url : 'pmAccount/staffDataShow', // 跳转到后台action
		async : false,
		data : {
		},
		type : 'post',
		cache : false,
		dataType : 'json',
		success : function(data) {

			if (data.length == 0) {
				alert("没有人员数据显示")
			}else{
			$("#pmAccountGrid").grid("reloadData", data);
			}
		},
		error : function() {
			layer.msg("查询异常！");
		}
	});
}



function saveAccount(){
	
	var USERNAME = $("#account").val();
	var PASSWORD = $("#password").val();
	var PASSWORDCHECK = $("#passwordCheck").val();
	var STATE = $("#switchOn").val();
	var STAFF_NAME = $("#displayName").val();
	var STAFF_TYPE = $("#accountType").val();
	
	$.ajax({
		url : 'pmAccount/saveAccount', // 跳转到后台action
		async : false,
		data : {
			USERNAME : USERNAME,
			PASSWORD : PASSWORD,
			STATE : STATE,
			STAFF_NAME : STAFF_NAME,
			STAFF_TYPE : STAFF_TYPE,
			
		},
		type : 'post',
		cache : false,
		dataType : 'json',
		success : function(data) {

			if (data === 1) {
				alert("保存成功！")
			}else if(data == null){
				alert("新建人员失败！");
			}
		},
		error : function() {
			layer.msg("保存异常！");
		}
	});
}
