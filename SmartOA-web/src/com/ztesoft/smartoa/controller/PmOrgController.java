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
public class PmOrgController extends Controller{
	
	private static final Logger logger = Logger.getLogger(PmOrgController.class);
	
	//配置路由
	public void index() {

		this.renderJsp("account/pmOrganization/pmOrganization.jsp");
		 
			
	}
	
	public void orgDataShow() throws SQLException{
		
		try {
			List<Record> orgList = Db.find("SELECT ORG_ID,AREA_ID,ORG_NAME,ORG_GRADE,PARENT_ID"
					+ " FROM OA_ORG");
			renderJson(orgList);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
}
