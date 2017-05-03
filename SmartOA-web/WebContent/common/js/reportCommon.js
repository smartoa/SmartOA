
// 开始初始化
$(document).ready(function() {
   initMenus();
   initSelects();
    // 初始化窗口
    $(window).resize();
   $("#REPORT_DATE").datetimepicker({
       viewType: "month",
        todayBtn: true,
        format : 'yyyymm'
    });
    var date = new Date();
    $("#REPORT_DATE").datetimepicker("value", date);
});

// 窗口大小自适应
$(window).resize(function() {
   
});
//生成左边菜单栏span
function initMenus(){
    for (var i=0;i<1;i++){
    	var divParentTemplate = createDivByTemplate(i);
    	$("#reportCommon-leftPanels").append(divParentTemplate);  //将父div添加到菜单区域中
    	//$("#menuDiv"+i).append('<span class="icon-resources hfont" style="height: 30px;width:100%;border-radius:5px;background-color:#0085ff;line-height:15px;color:#ffffff;font-size:18px;padding:5px 5px 5px;margin-bottom: 0px;margin-top: 0px;margin-left: 0px;margin-right: 20px;display:block;text-align:center;">光猫库存流动报表</span>');
    	$("#menuDiv"+i).append('<button type="button" class="btn btn-link hfont font-size:18px;">光猫库存流动报表</button>');
   }
}
function createDivByTemplate(num){
   var divParentTemplate = '<div id='+'"menuDiv'+num+'"'+ 'class="row" style="width:100%;margin-bottom: 0px	;margin-top: 2px;margin-left: 0px;margin-right: 50px;"></div>'
   return divParentTemplate;
}
//校验报表权限
function checkReportPowers(){

}
//查询按钮
$('#search').click(function() {
	var depotCode = $("#DEPOT_CODE").val();
	var reportDate = $("#REPORT_DATE").val();
	//var reportCode = this.getQueryString('reportCode');
	//var reportURL = this.getQueryString('reportURL');
	var reportURL= "http://10.67.10.129:9807/mg_report/report/test/MODEM_OPERATE_MONTH_COUNT";
	if(reportDate==""){
		 alert("必须选择日期");
	 return;
	 }
	document.getElementById("reportInfo").src=reportURL+"?reportDate="+reportDate+"&areaCond="+depotCode; 
})
//初始化仓库列表
function initSelects(){
 $.ajax({
        url: 'getStaffDepot',
        // 跳转到 action
        async: false,
        // 注意首页初始化要使用同步方式
        data: {
             //DEPOT_LEVEL: 2
        },
        type: 'POST',
        cache: false,
        dataType: 'json',
        success: function(data) {
            var depots = "-1" ;
            var options = "" ;
        	var staffDepotObjects = data;
            for (var x in staffDepotObjects)
			{
			   depots = staffDepotObjects[x].DEPOT_CODE + "," +depots;
					options = "<option value =" + staffDepotObjects[x].DEPOT_CODE + ">"
						+ staffDepotObjects[x].DEPOT_NAME + "</option>"+options;
			}
			var opt = "";
			    opt = "<option value =" + depots + ">"
						+ "全部" + "</option>"
				$("#DEPOT_CODE").append(opt);
				$("#DEPOT_CODE").append(options);
			
        },
        error: function() {
            //alert("数据获取异常");
        }
    });
	//初始化之后 刷新数据触发改变事件
	//changeDepot();
}
