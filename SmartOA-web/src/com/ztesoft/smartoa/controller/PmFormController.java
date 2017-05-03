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
public class PmFormController extends Controller{
	
	private static final Logger logger = Logger.getLogger(PmFormController.class);
	
	//配置路由
	public void index() {

		this.renderJsp("form/pmForm/pmForm.jsp");
		 
			
	}
	
	public void formDataShow() throws SQLException{
		
		try {
			List<Record> formList = Db.find("SELECT ID,FORM_ID,FORM_NAME,FORM_TYPE,FORM_USER,CREATE_DATE"
					+ " FROM OA_SELF_FORM");
			renderJson(formList);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
	
	
	public void saveAccount() throws SQLException {

		String USERNAME = this.getPara("USERNAME");
		String PASSWORD = this.getPara("PASSWORD");
		String STATE = this.getPara("STATE");
		String STAFF_NAME = this.getPara("STAFF_NAME");
		String STAFF_TYPE = this.getPara("STAFF_TYPE");
		
		try {
			String sql = "INSERT INTO OA_STAFF(STAFF_ID,STAFF_NAME,USERNAME,PASSWORD,STATE,CREATE_DATE,COMMENTS,STAFF_TYPE)"
					+ " SELECT OA_STAFF_SEQ.NEXTVAL,B.STAFF_NAME,B.USERNAME,B.PASSWORD,B.STATE,B.CREATE_DATE,B.COMMENTS,B.STAFF_TYPE FROM ("
					+ "SELECT '"
					+ STAFF_NAME+ "' AS STAFF_NAME,'"
					+ USERNAME+ "' AS USERNAME,'"
					+ PASSWORD+ "' AS PASSWORD,'"
					+ STATE+ "' AS STATE,SYSDATE AS CREATE_DATE,'' AS COMMENTS,'"
					+ STAFF_TYPE+ "' AS STAFF_TYPE from dual)B";
			int flag = Db.update(sql);
			
			if(flag==1){
				renderJson(flag);
			}else{
				renderNull();
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}
}
