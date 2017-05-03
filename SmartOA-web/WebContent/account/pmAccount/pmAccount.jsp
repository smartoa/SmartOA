<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="IE=9">
<title>账号管理</title>
<jsp:include page="/common/bs_an.jsp"></jsp:include>



</head>

<body>
	
			<div class="panel panel-success">
				<div class="panel-heading">
				    <h4 class="panel-title"><i class="glyphicon glyphicon-list"></i> 查询</h4>
				</div>
				<div class="panel-body">
					<div class = "row form-inline">
						<div class="form-group col-md-6">
							<label class="progress-label col-md-2">账号：</label>
		                    <input type="text" class="form-control">
		                    <button id="searchBtn" class="btn btn-success" type="button">查询</button>
		                 </div>
		                 
		                    
	                    </div>
				</div>
			</div>
    	
			<div class="panel-default">
				<div class = "panel-body">
					<button id="newAccountBtn" class="btn btn-success" type="button">新建</button>					
				</div>
			</div>
	
			
			<div class=" panel-success">
	                <div class="panel-heading">
	                    <h3 class="panel-title"><i class="glyphicon glyphicon-list"></i> 列表</h3>
	                </div>
	                <div class="panel-body">
	                <div id="pmAccountGrid"></div>
	                </div>
	         </div>
	        
	        

</body>
<script type="text/javascript" src="pmAccount/js/pmAccount.js"></script>
</html>