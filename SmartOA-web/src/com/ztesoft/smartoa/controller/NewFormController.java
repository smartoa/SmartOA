package com.ztesoft.smartoa.controller;

import com.jfinal.aop.Before;
import com.jfinal.core.ActionKey;
import com.jfinal.core.Controller;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.sql.Blob;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import javax.sql.rowset.serial.SerialBlob;

import org.apache.log4j.Logger;

import com.jfinal.core.Controller;
import com.jfinal.plugin.activerecord.Db;
import com.jfinal.plugin.activerecord.Record;




//@Before(AuthInterceptor.class)
public class NewFormController extends Controller{
	
	private static final Logger logger = Logger.getLogger(NewFormController.class);
	
	//配置路由
	public void index() {

		this.renderJsp("form-template-input.jsp");
		 
		
	}
	
	//@ActionKey("save") 
	public void save() throws SQLException{
		
		String xf_id = this.getPara("id");
		String xf_name = this.getPara("name");
		String xf_content = this.getPara("content");
		//Blob blob_xf_content = Hibernate.createBlob(xf_content.getBytes());
		try {
			//Blob b = new SerialBlob(xf_content.getBytes("UTF-8"));
			
			String sql = "INSERT INTO OA_SELF_FORM(FORM_ID,FORM_NAME,FORM_CONTENT,FORM_TYPE,FORM_USER,CREATE_DATE,COMMENTS)"
					+ " SELECT B.* FROM ("
					+ "SELECT '"
					+ xf_id+ "' AS FORM_ID,'"
					+ xf_name+ "' AS FORM_NAME,'"
					+ xf_content+ "' AS FORM_CONTENT,'' AS FORM_TYPE,'' AS FORM_USER,SYSDATE() AS CREATE_DATE,'' AS COMMENTS from dual)B";
			
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
