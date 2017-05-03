//初始化魔百和管理页面
var flowClassList = [];


$(document).ready(function() {
	
	// 初始化grid
	initGrid();
	flowTypeDataShow();
    
});

// 初始化grid
function initGrid() {
	
	var opt = {
		colModel : [ {
			name : 'ID',
			sorttype : "string",
			label : '编号',
			width : 300,
			key : true,
			edittype: "text",
			editable: true,
		},{
			name : 'FLOW_TYPE',
			label : '类型名称',
			width : 360,
			sorttype : "string",
			edittype: "text",
			editable: true,
		}, {
			name : 'FLOW_TYPE_SEQ',
			label : '排序',
			width : 200,
			sorttype : "string",
			edittype: "text",
			editable: true,
			
		}, {
			name: '操作',
			width:210,
           	formatter: function(cellval, opts, rwdat, _act) {
            return '<div class="btn-group">' +
                //'<button type="button" class="btn btn-primary js-delete">Delete</button>' +
                '<button type="button" class="btn btn-primary">编辑</button>' +
                '</div>'
        	}
            }],

		rowNum : 12,
		width:$(window).width()-30,
		height:480,
		pager : true,
		cached : true, // 把用户自定义的列展示设置缓存在本地
		data : flowClassList,
		shrinkToFit: false,

	};
	

	$grid = $("#flowClassifyGrid").grid(opt);
	
};

function flowTypeDataShow(){

	$.ajax({
		url : 'flowClassify/flowTypeDataShow', // 跳转到后台action
		async : false,
		data : {
		},
		type : 'post',
		cache : false,
		dataType : 'json',
		success : function(data) {

			if (data.length == 0) {
				alert("没有流程分类数据显示")
			}else{
			$("#flowClassifyGrid").grid("reloadData", data);
			}
		},
		error : function() {
			layer.msg("查询异常！");
		}
	});
}


