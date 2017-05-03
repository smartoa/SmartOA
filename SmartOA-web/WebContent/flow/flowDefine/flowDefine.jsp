<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="IE=9">
<title>流程编辑页面</title>
<jsp:include page="/common/bs_an.jsp"></jsp:include>

</head>

<body>
		
			<div class="panel panel-success">
				<div class="panel-heading">
				    <h4 class="panel-title"><i class="glyphicon glyphicon-list"></i>编辑</h4>
				</div>
				<div class="panel-body">
				<form class="form-horizontal" id = "flowDefineForm" role="form">
				  <div class="form-group">
				    <label class="col-md-2 control-label">名称</label>
				    <div class="col-md-6">
				      <input class="form-control" id="flowName" type="text" placeholder="请输入流程名称"
				    		  data-rule="名称: required;" data-msg-required="请选择{0}">
				    </div>
				  </div>
				  <div class="form-group">
				    <label  class="col-md-2 control-label">流程分类</label>
				    <div class="col-md-6">
					    <select id="flowType" class=" form-control "
					    		data-rule="流程分类: required;" data-msg-required="请选择{0}">
						<option value="" selected="selected">请选择流程分类</option>
						</select>
				    </div>
				  </div>
				    <div class="form-group">
				      <label  class="col-md-2 control-label">绑定流程</label>
				      <div class="col-md-6">
					      <select id="flowBinding" class=" form-control "
					    		  data-rule="绑定流程: required;" data-msg-required="请选择{0}">
						  <option value="" selected="selected">请选择绑定流程</option>
						  </select>
				      </div>
				    </div>
				    
				 
				  <div class="form-group ">
				    <label class="col-md-2 control-label">排序</label>
				    <div class="col-md-6">
				      <input type="text" class="form-control" id="flow_seq" placeholder="1"
				    		  data-rule="排序: required;" data-msg-required="请选择{0}">
				    </div>
				  </div>
				  
				  <div class="form-group ">
				    <label class="col-md-2 control-label">配置任务负责人</label>
				    <div class="col-md-6">
					    <input id="switchOn" name = "type" type="radio" value="1" >开启
					    <input id="switchOff" name = "type"  type="radio" value="0">关闭
				    </div>
				  </div>
				  
				  <div class="form-group">
				    <label class="col-md-2 control-label" for="inputError">描述</label>
				    <div class="col-md-6">
				      <input type="text" class="form-control" id="description">
				    </div>
				  </div>
				</form>
				
			   <div class = "row col-md-offset-2">
			   <button type="button" class="btn btn-success" id = "saveBtn" >保存</button>
			   <button type="button" class="btn btn-success" id = "returnBtn" >返回</button>
			   </div>
			</div>
			</div>
		

</body>

<script type="text/javascript" src="flow/flowDefine/js/flowDefine.js"></script>
</html>