<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!-- bootStrap-angularjs -->
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<base href="<%=basePath%>" />


<link rel="stylesheet" href="resources/bootstrap/css/bootstrap.min.css">
<link rel="stylesheet"
	href="resources/font-awesome-4.3.0/css/font-awesome.min.css">
<link rel="stylesheet"
	href="common/css/common.css">
<script type="text/javascript">
var basePath="<%=basePath%>";
</script>
<script type="text/javascript" src="resources/jquery/jquery.min.js"></script>
<script type="text/javascript"
	src="resources/bootstrap/js/bootstrap.min.js"></script>
<script type="text/javascript" src="resources/bootstrap/js/respond.js"></script>
<script src="resources/layer/layer.js"></script>
<script src="common/js/common.js"></script>
<!--<script type="text/javascript" src="resources/angularjs/angular1.2.js"></script>-->
<link rel="stylesheet"
href="resources/fish/fish-desktop/css/fish-desktop-compact.css"
id="themesCss">
<link rel="stylesheet" href="resources/css/pretty-json.css">

<script type="text/javascript" src="resources/js/mycommon.js"></script>

<script type="text/javascript" src="resources/js/json2.js"></script>

<script type="text/javascript" src="resources/js/underscore-min.js"></script>

<script type="text/javascript" src="resources/js/backbone-min.js"></script>

<script type="text/javascript" src="resources/js/fomatXml.js"></script>

<script type="text/javascript" src="resources/js/pretty-json-min.js"></script>
<script type="text/javascript"
src="resources/fish/fish-desktop/js/fish-desktop-all.js"></script>

<script type="text/javascript"
src="resources/fish/fish-desktop/locale/fish-desktop-locale.zh.js"></script>
