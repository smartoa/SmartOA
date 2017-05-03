var selfFormList = [];

$(document).ready(function() {
	
	// 初始化grid
	initGrid();
	formDataShow();

 	       
})


// 初始化grid
function initGrid() {
	
	var opt = {
	
		
		colModel : [ {
			name : 'ID',
			label : '',
			width : 10,
			sorttype : "string",
			
	
		},{
			name : 'FORM_ID',
			label : '表单标识',
			width : 160,
			sorttype : "string",
	
		},{
			name : 'FORM_NAME',
			label : '表单名称',
			width : 160,
			sorttype : "string",
			edittype: "text",
			editable: true,
		},{
			name : 'FORM_TYPE',
			label : '表单分类',
			width : 230,
			sorttype : "string",
			edittype: "text",
			editable: true,
		}, {
			name : 'FORM_USER',
			label : '创建人',
			width : 210,
			sorttype : "string",
			edittype: "text",
			editable: true,
			
		}, {
			name : 'CREATE_DATE',
			label : '创建时间',
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
		data : selfFormList,
		shrinkToFit: false,

	};
	
	$grid = $("#pmFormGrid").grid(opt);
	$("#pmFormGrid").grid("hideCol",'ID');
	
};


function formDataShow(){

	$.ajax({
		url : 'pmForm/formDataShow', // 跳转到后台action
		async : false,
		data : {
		},
		type : 'post',
		cache : false,
		dataType : 'json',
		success : function(data) {

			if (data.length == 0) {
				alert("没有表单数据")
			}else{
			$("#pmFormGrid").grid("reloadData", data);
			}
		},
		error : function() {
			layer.msg("查询异常！");
		}
	});
}

