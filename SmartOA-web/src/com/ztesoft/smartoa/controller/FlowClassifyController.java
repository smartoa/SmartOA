package com.ztesoft.smartoa.controller;

import com.jfinal.aop.Before;
import com.jfinal.core.Controller;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.apache.log4j.Logger;

import com.jfinal.core.Controller;
import com.jfinal.plugin.activerecord.Db;
import com.jfinal.plugin.activerecord.Record;



//@Before(AuthInterceptor.class)
public class FlowClassifyController extends Controller{
	
	private static final Logger logger = Logger.getLogger(FlowClassifyController.class);
	
	//配置路由
	public void index() {

		this.renderJsp("flow/flowClassify/flowClassify.jsp");
		 
			
	}
	
	
	public void flowTypeDataShow() throws SQLException{
		
		try {
			List<Record> flowTypeList = Db.find("SELECT FLOW_TYPE_CODE AS ID,FLOW_TYPE_NAME AS FLOW_TYPE"
					+ " FROM OA_FLOW_TYPE");
			renderJson(flowTypeList);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
}