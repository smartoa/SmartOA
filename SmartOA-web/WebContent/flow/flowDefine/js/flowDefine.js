$(document).ready(function() {
	
	//初始化流程分类
	initFlowType();
		
	//初始化流程绑定
	initFlowBanding();
	
    $("#saveBtn").click(function(){
    	
    	
        var result = $("#flowDefineForm").isValid();
		
		if(result == true){
        
        	flowDefine();        
        }
    })
    
});

//初始化流程类型
function initFlowType() {
	$.ajax({
		type : "POST",
		dataType : "json",
		url : "flowDefine/initFlowType",
		data : {},
		success : function(data) {
			$.each(data, function(n, value) {
				var opt = "";
				opt = "<option value =" + value.FLOW_TYPE_CODE + ">"
						+ value.FLOW_TYPE_NAME + "</option>"
				$("#flowType").append(opt);
			}

			)

		}
	});

}


//初始化流程绑定
function initFlowBanding() {
	$.ajax({
		type : "POST",
		dataType : "json",
		url : "flowDefine/initFlowBanding",
		data : {},
		success : function(data) {
			$.each(data, function(n, value) {
				var opt = "";
				opt = "<option value =" + value.ID + ">"
						+ value.NAME + "</option>"
				$("#flowBinding").append(opt);
			}

			)

		}
	});

}

function flowDefine() {
	
	
		var flowName=$("#flowName").val();
		var flowType=$("#flowType").val();
		var flowBinding=$("#flowBinding").val();
        var flow_seq = $("#flow_seq").val();
        var has_manager = $('input:radio[name="type"]:checked').val();
        var description = $("#description").val();
	
		$.ajax({
			url : 'flowDefine/flowDefine', // 跳转到后台action
			async : false,
			data : {
				flowName : flowName,
				flowType : flowType,
				flowBinding : flowBinding,
				flow_seq : flow_seq,
				has_manager : has_manager,
				description : description
			},
			type : 'post',
			cache : false,
			dataType : 'json',
			success : function(data) {

			if (data === 1) {
				alert("流程保存成功！");
				clear();
			}else{
				alert("流程定义失败！");
				clear();
			}
			
		},
		error : function() {
			layer.msg("定义异常！");
		}
	});
}

function clear(){

		$("#flowName").val("");
		$("#flowType").val("");
		$("#flowBinding").val("");
        $("#flow_seq").val("");
        $('input:radio[name="type"]').val("");
        $("#description").val("");
}