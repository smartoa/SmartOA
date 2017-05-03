//初始化魔百和管理页面
var orgList = [];


$(document).ready(function() {
	
	// 初始化grid
	initGrid();
	orgDataShow();   
    
});

// 初始化grid
function initGrid() {
	
	var opt = {
		colModel : [ {
			name : 'ORG_ID',
			label : '编号',
			width : 200,
			sorttype : "string",
			edittype: "text",
			editable: true,
		},{
			name : 'ORG_TYPE',
			label : '类型',
			width : 200,
			sorttype : "string",
			edittype: "text",
			editable: true,
		},{
			name : 'ORG_NAME',
			label : '名称',
			width : 200,
			sorttype : "string",
			edittype: "text",
			editable: true,
		}, {
			name : 'ORG_GRADE',
			label : '级别',
			width : 200,
			sorttype : "string",
			edittype: "text",
			editable: true,
			
		}, {
			name : 'PARENT_ID',
			label : '上级',
			width : 200,
			sorttype : "string",
			edittype: "text",
			editable: true,
			
		},{
			name: '操作',
			width:180,
           	formatter: function(cellval, opts, rwdat, _act) {
            return '<div>' +                
                '<button type="button" class="btn btn-info">编辑</button> '+               
                '</div>'
        	}
            }],

		rowNum : 12,
		width:$(window).width()-30,
		height:450,
		pager : true,
		cached : true, // 把用户自定义的列展示设置缓存在本地
		data : orgList,
		shrinkToFit: false,

	};

	// 鍔犺浇grid
	$grid = $("#orgGrid").grid(opt);
	
};


function orgDataShow(){

	$.ajax({
		url : 'pmOrg/orgDataShow', // 跳转到后台action
		async : false,
		data : {
		},
		type : 'post',
		cache : false,
		dataType : 'json',
		success : function(data) {

			if (data.length == 0) {
				alert("没有组织数据显示")
			}else{
			$("#orgGrid").grid("reloadData", data);
			}
		},
		error : function() {
			layer.msg("查询异常！");
		}
	});
}


