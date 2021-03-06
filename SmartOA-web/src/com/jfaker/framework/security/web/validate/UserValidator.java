/*
 *  Copyright 2014-2015 snakerflow.com
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *     http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */
package com.jfaker.framework.security.web.validate;

import com.jfaker.framework.security.model.User;
import com.jfinal.core.Controller;
import com.jfinal.validate.Validator;

/**
 * UserValidator.
 */
public class UserValidator extends Validator {
	
	protected void validate(Controller controller) {
		validateRequiredString("user.username", "usernameMsg", "请输入用户名称!");
		validateRequiredString("user.plainPassword", "passwordMsg", "请输入密码!");
	}
	
	protected void handleError(Controller controller) {
		controller.keepModel(User.class);
		
		String actionKey = getActionKey();
		System.out.println("actionKey=>" + actionKey);
		if (actionKey.equals("/security/user/save"))
			controller.render("userAdd.jsp");
		else if (actionKey.equals("/security/user/update"))
			controller.render("userEdit.jsp");
	}
}
