//初始化魔百和管理页面
var flowBandingList = [];


$(document).ready(function() {
	
	// 初始化grid
	initGrid();
	flowListShow();
    
});

// 初始化grid
function initGrid() {
	
	var opt = {
		colModel : [ {
			name : 'FLOW_ID',
			sorttype : "string",
			label : '编号',
			width : 10,
			
		},{
			name : 'FLOW_NAME',
			label : '流程名称',
			width : 160,
			sorttype : "string",
			edittype: "text",
			editable: true,
		}, {
			name : 'DISPLAY_NAME',
			label : '显示名',
			width : 120,
			sorttype : "string",
			edittype: "text",
			editable: true,
			
		},{
			name : 'VERSION',
			label : '版本',
			width : 80,
			sorttype : "string",
			
			
		},{
			name : 'CREATE_TIME',
			label : '创建时间',
			width : 160,
			sorttype : "string",
			edittype: "text",
			editable: true,
			
		},{
			name : 'CREATOR',
			label : '创建人',
			width : 120,
			sorttype : "string",
			edittype: "text",
			editable: true,
			
		}, {
			name: '操作',
			width:200,
           	formatter: function(cellval, opts, rwdat, _act) {
            return '<div class="btn-group">' +                
                '<button type="button" class="btn btn-info">编辑</button>' +
                '</div>'
        	}
            }],
            
       

		rowNum : 12,
		width:$(window).width()-30,
		height:480,
		pager : true,
		cached : true, // 把用户自定义的列展示设置缓存在本地
		data : flowBandingList,
		shrinkToFit: false,

	};
	

	$grid = $("#flowBandingListGrid").grid(opt);
	$("#flowBandingListGrid").grid("hideCol",'FLOW_ID');
	
};

$("#flowBandingListGrid").on('click','.btn',function(){
		    var rowid = $("#flowBandingListGrid").grid("getGridParam", "selrow");
			if(rowid){
			var rowData = $("#flowBandingListGrid").grid("getRowData", rowid);
			}
			if(rowData){
			window.location.href = "workFlow/designer?processId="+rowData.FLOW_ID;
			}
        })

function flowListShow(){
	
	$.ajax({
		url : 'flowBandingList/flowListShow', // 跳转到后台action
		async : false,
		data : {
		},
		type : 'post',
		cache : false,
		dataType : 'json',
		success : function(data) {

			if (data.length == 0) {
				alert("没有绑定流程数据显示")
			}else{
			$("#flowBandingListGrid").grid("reloadData", data);
			}
		},
		error : function() {
			layer.msg("查询异常！");
		}
	});
}

