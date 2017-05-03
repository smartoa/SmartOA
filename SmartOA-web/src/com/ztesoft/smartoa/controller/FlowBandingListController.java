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
public class FlowBandingListController extends Controller{
	
	private static final Logger logger = Logger.getLogger(FlowBandingListController.class);
	
	//配置路由
	public void index() {

		this.renderJsp("flowList.jsp");
		 
			
	}
	
	
	public void flowListShow() throws SQLException{
		
		try {
			List<Record> flowBandingList = Db.find("SELECT ID AS FLOW_ID,NAME AS FLOW_NAME,DISPLAY_NAME,TYPE AS FLOW_TYPE,"
					+ "VERSION,CREATE_TIME,CREATOR,INSTANCE_URL"
					+ " FROM wf_process");
			renderJson(flowBandingList);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
}