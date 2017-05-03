<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="IE=9">
<title>组织管理</title>
<jsp:include page="/common/bs_an.jsp"></jsp:include>

</head>

<body>
	
    	
			<div class="panel-default">
				<div class = "panel-body">
					<button id="search" class="btn btn-success" type="button">新建</button>
					<button id="export" class="btn btn-success " type="button">删除</button>
					<button id="clear" class="btn btn-success " type="button">导出</button>
				</div>
			</div>
	
			
			<div class=" panel-success">
	                <div class="panel-heading">
	                    <h3 class="panel-title"><i class="glyphicon glyphicon-list"></i>组织列表</h3>
	                </div>
	                <div class="panel-body">
	                <div id="orgGrid"></div>
	                </div>
	         </div>
	        
	         

</body>

<script type="text/javascript" src="pmOrganization/js/pmOrganization.js"></script>
</html>