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


public class OaHomeController extends Controller{
	
	private static final Logger logger = Logger.getLogger(OaHomeController.class);
	
	//配置路由
	public void index() {

		this.renderJsp("/oaHome/production/index.jsp");
		 
			
	}
		
}
