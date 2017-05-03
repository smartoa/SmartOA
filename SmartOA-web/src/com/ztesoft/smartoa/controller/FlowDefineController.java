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
public class FlowDefineController extends Controller{
	
	private static final Logger logger = Logger.getLogger(FlowDefineController.class);
	
	//配置路由
	public void index() {

		this.renderJsp("flow/flowDefine/flowDefine.jsp");
		 
			
	}
	
	
	public void flowDefine() throws SQLException {

		String FLOWNAME = this.getPara("flowName");
		String FLOWTYPE = this.getPara("flowType");
		String FLOWBANDING = this.getPara("flowBinding");
		String FLOWSEQ = this.getPara("flow_seq");
		String HASMANAGER = this.getPara("has_manager");
		String DESCRIPTION = this.getPara("description");
		
		try {
			String sql = "INSERT INTO OA_PROCESS(FLOW_NAME,FLOW_TYPE,FLOW_BANDING,FLOW_SEQ,FLOW_MANAGER,HAS_MANAGER,CREATE_DATE,DESCRIPTION)"
					+ " SELECT B.FLOW_NAME,B.FLOW_TYPE,B.FLOW_BANDING,B.FLOW_SEQ,B.FLOW_MANAGER,B.HAS_MANAGER,B.CREATE_DATE,B.DESCRIPTION FROM ("
					+ "SELECT '"
					+ FLOWNAME+ "' AS FLOW_NAME,'"
					+ FLOWTYPE+ "' AS FLOW_TYPE,'"
					+ FLOWBANDING+ "' AS FLOW_BANDING,'"
					+ FLOWSEQ+ "' AS FLOW_SEQ,'' AS FLOW_MANAGER,'"
					+ HASMANAGER + "' AS HAS_MANAGER,SYSDATE() AS CREATE_DATE,'"
					+ DESCRIPTION+ "' AS DESCRIPTION from dual)B";
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
	
	public void initFlowType() throws SQLException {
		
		try {
			renderJson(Db.find("SELECT T.FLOW_TYPE_CODE,T.FLOW_TYPE_NAME FROM OA_FLOW_TYPE T"));
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	
	public void initFlowBanding() throws SQLException {
		
		try {
			renderJson(Db.find("SELECT T.ID,T.NAME FROM WF_PROCESS T"));
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
}
