package com.ztesoft.smartoa.controller;

import com.jfinal.aop.Before;
import com.jfinal.core.Controller;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;

import com.jfinal.core.Controller;
import com.jfinal.plugin.activerecord.Db;
import com.jfinal.plugin.activerecord.Record;




//@Before(AuthInterceptor.class)
public class FlowConfigController extends Controller{
	
	private static final Logger logger = Logger.getLogger(FlowConfigController.class);
	
	//配置路由
	public void index() {

		this.renderJsp("flow/flowConfig/flowConfig.jsp");
		 
			
	}
	
	public void flowDataShow() throws SQLException{
		
		try {
			List<Record> flowList = Db.find("SELECT FLOW_ID,FLOW_NAME,FLOW_BANDING,T.FLOW_TYPE_NAME AS FLOW_TYPE,FLOW_SEQ,HAS_MANAGER"
					+ " FROM OA_PROCESS INNER JOIN OA_FLOW_TYPE T ON T.FLOW_TYPE_CODE = OA_PROCESS.FLOW_TYPE");
			renderJson(flowList);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
	
	/**
	 * 初始化人员信息树
	 */
	public void initOrgTree() {
		try{
				//取session
				//String staffId = getSessionAttr("staff_id");
				
				
				List<Record> orgList = new ArrayList();
				
				
				orgList = Db.find("select ORG_ID AS NODE_VALUE ,ORG_NAME AS NODE_TEXT ,PARENT_ID AS NODE_PID ,ORG_GRADE from OA_ORG  WHERE STATE = '1'  ORDER BY ORG_GRADE ASC ");
				
				
				if(orgList.size() > 0){
					//将查询的数据转换成TREE格式数据返回
					List treeList = new ArrayList();
					
					for(int i = 0;i<orgList.size();i++){
						
						Record recordTmp = (Record)orgList.get(i);
					    Map nodeMap = new HashMap();
					    nodeMap.put("id", recordTmp.get("NODE_VALUE"));
					    nodeMap.put("name", recordTmp.get("NODE_TEXT"));
					    if(i == 0){
						    nodeMap.put("pId", 0);
					    }else{
					    	nodeMap.put("pId",recordTmp.get("NODE_PID"));
					    }
					    treeList.add(nodeMap);
					}
					renderJson(treeList);
				}
				    
			}catch(Exception e){
				e.printStackTrace();
			}
	}
	
	
	public void tacheDataReload() throws SQLException{
		
		try {
			String FLOW_ID = this.getPara("FLOW_ID");
			
			renderJson(Db.find("SELECT O.FLOW_ID AS SUB_FLOW_ID,P.FLOW_NAME,O.TACHE_ID,T.TACHE_NAME FROM OA_FLOW_TACHE O"
					+ " INNER JOIN OA_PROCESS P ON P.FLOW_ID = O.FLOW_ID"
					+ " INNER JOIN OA_TACHE T ON T.ID = O.TACHE_ID"
					+ " WHERE O.FLOW_ID = '"+FLOW_ID+"'"));
			
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	
	public void setManagerOrg() throws SQLException{
		
		try {
			String ORG_ID = this.getPara("ORG_ID");
			String FLOW_ID = this.getPara("FLOW_ID");
			String TACHE_ID = this.getPara("TACHE_ID");
			
			int flag = Db.update("UPDATE OA_FLOW_TACHE SET TACHE_MANAGER = '"+ORG_ID+"'"
					+ " WHERE FLOW_ID = '"+FLOW_ID+"' AND TACHE_ID = '"+TACHE_ID+"'");
			
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
	
	
	public void initFormSelection() throws SQLException{
		
		try {
			List<Record> formList = Db.find("SELECT FORM_ID,FORM_NAME"
					+ " FROM OA_SELF_FORM ");
			renderJson(formList);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
	
	public void setForm() throws SQLException{
		
		try {
			String formList = this.getPara("formData");
			String FLOW_ID = this.getPara("FLOW_ID");
			String TACHE_ID = this.getPara("TACHE_ID");
			
			int flag = Db.update("UPDATE OA_FLOW_TACHE SET TACHE_FORM = '"+formList+"'"
					+ " WHERE FLOW_ID = '"+FLOW_ID+"' AND TACHE_ID = '"+TACHE_ID+"'");
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
