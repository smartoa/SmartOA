<%@ page language="java" contentType="text/html; charset=UTF-8"
pageEncoding="UTF-8"%>
<%@ include file="/common/taglibs.jsp"%>
<!DOCTYPE html>


<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <!-- Meta, title, CSS, favicons, etc. -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Smart OA | 协同办公</title>
	
    <!-- Bootstrap -->
    <link href="${ctx}/oaHome/vendors/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Font Awesome -->
    <link href="${ctx}/oaHome/vendors/font-awesome/css/font-awesome.min.css" rel="stylesheet">
    <!-- NProgress -->
    <link href="${ctx}/oaHome/vendors/nprogress/nprogress.css" rel="stylesheet">
    <!-- iCheck -->
    <script src="${ctx}/oaHome/vendors/jquery/dist/jquery.min.js"></script>
    <link href="${ctx}/oaHome/vendors/iCheck/skins/flat/green.css" rel="stylesheet">
    <link href="${ctx}/oaHome/vendors/jqueryPlus/menu/accordionMenu.css" rel="stylesheet">
    <link href="${ctx}/oaHome/vendors/jqueryPlus/menu/menu.css" rel="stylesheet">
	
    <!-- bootstrap-progressbar -->
    <link href="${ctx}/oaHome/vendors/bootstrap-progressbar/css/bootstrap-progressbar-3.3.4.min.css" rel="stylesheet">
    <!-- JQVMap -->
    <link href="${ctx}/oaHome/vendors/jqvmap/dist/jqvmap.min.css" rel="stylesheet"/>
    <!-- bootstrap-daterangepicker -->
    <link href="${ctx}/oaHome/vendors/bootstrap-daterangepicker/daterangepicker.css" rel="stylesheet">

    <!-- Custom Theme Style -->
    <link href="${ctx}/oaHome/build/css/custom.min.css" rel="stylesheet">
    <link href="${ctx}/oaHome/production/css/index.css" rel="stylesheet">
    
    <script src="${ctx}/oaHome/vendors/angularjs/angular1.2.js"></script>
    <script src="${ctx}/oaHome/vendors/jqueryPlus/menu/menu.js"></script>
    <script src="${ctx}/oaHome/vendors/jqueryPlus/menu/jquery.hoveraccordion.min.js"></script>
    
  </head>

  <body class="nav-md" ng-app="iomApp">
    <div class="container body">
      <div class="main_container">
        <div class="col-md-3 left_col">
          <div class="left_col scroll-view">
            <div class="navbar nav_title" style="border: 0;">
              <a href="index.html" class="site_title"><i class="fa fa-paw"></i> <span>Smart OA </span></a>
            </div>

            <div class="clearfix"></div>

            <!-- menu profile quick info -->
            <div class="profile clearfix">
              <div class="profile_pic">
                <img src="${ctx}/common/images/img.jpg" alt="..." class="img-circle profile_img">
              </div>
              <div class="profile_info">
                <span>Welcome,</span>
                <h2>John Doe</h2>
              </div>
            </div>
            <!-- /menu profile quick info -->

            <br />

          
           

		      <div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
		      <div class="menu_section">
		      <ul class="nav side-menu""  ng-controller="headerController">
		        <li ng-repeat="menu in menus">
		          <a href="#">
		            <i class="{{menu.icon}}"></i> {{menu.name}}<span class="fa fa-chevron-down"></span>
		          </a>
		          <ul class="nav child_menu" >
		            <li ng-repeat="subMenu in menu.children" ng-click="openMenu(subMenu)"><a href="#">{{subMenu.name}}</a></li>
		          </ul>
		        </li>
		      
		      </div>
		      </div>
		
	
          <!-- /menu footer buttons -->
          <div class="sidebar-footer hidden-small">
            <a data-toggle="tooltip" data-placement="top" title="Settings">
              <span class="glyphicon glyphicon-cog" aria-hidden="true"></span>
            </a>
            <a data-toggle="tooltip" data-placement="top" title="FullScreen">
              <span class="glyphicon glyphicon-fullscreen" aria-hidden="true"></span>
            </a>
            <a data-toggle="tooltip" data-placement="top" title="Lock">
              <span class="glyphicon glyphicon-eye-close" aria-hidden="true"></span>
            </a>
            <a data-toggle="tooltip" data-placement="top" title="Logout" href="login.html">
              <span class="glyphicon glyphicon-off" aria-hidden="true"></span>
            </a>
          </div>
          <!-- /menu footer buttons -->
        </div>
        </div>

        <!-- top navigation -->
         <div class="top_nav">
          <div class="nav_menu">
            <nav>
              <div class="nav toggle">
                <a id="menu_toggle"><i class="fa fa-bars"></i></a>
              </div>

              <ul class="nav navbar-nav navbar-right">
                <li class="">
                  <a href="javascript:;" class="user-profile dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                    <img src="${ctx}/common/images/img.jpg" alt="">John Doe
                    <span class=" fa fa-angle-down"></span>
                  </a>
                  <ul class="dropdown-menu dropdown-usermenu pull-right">
                    <li><a href="javascript:;"> Profile</a></li>
                    <li>
                      <a href="javascript:;">
                        <span class="badge bg-red pull-right">50%</span>
                        <span>Settings</span>
                      </a>
                    </li>
                    <li><a href="javascript:;">Help</a></li>
                    <li><a href="login.html"><i class="fa fa-sign-out pull-right"></i> Log Out</a></li>
                  </ul>
                </li>

                <li role="presentation" class="dropdown">
                  <a href="javascript:;" class="dropdown-toggle info-number" data-toggle="dropdown" aria-expanded="false">
                    <i class="fa fa-envelope-o"></i>
                    <span class="badge bg-green">6</span>
                  </a>
                  <ul id="menu1" class="dropdown-menu list-unstyled msg_list" role="menu">
                    <li>
                      <a>
                        <span class="image"><img src="${ctx}/oaHome/production/images/img.jpg" alt="Profile Image" /></span>
                        <span>
                          <span>John Smith</span>
                          <span class="time">3 mins ago</span>
                        </span>
                        <span class="message">
                          Film festivals used to be do-or-die moments for movie makers. They were where...
                        </span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span class="image"><img src="${ctx}/oaHome/production/images/img.jpg" alt="Profile Image" /></span>
                        <span>
                          <span>John Smith</span>
                          <span class="time">3 mins ago</span>
                        </span>
                        <span class="message">
                          Film festivals used to be do-or-die moments for movie makers. They were where...
                        </span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span class="image"><img src="${ctx}/oaHome/production/images/img.jpg" alt="Profile Image" /></span>
                        <span>
                          <span>John Smith</span>
                          <span class="time">3 mins ago</span>
                        </span>
                        <span class="message">
                          Film festivals used to be do-or-die moments for movie makers. They were where...
                        </span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span class="image"><img src="${ctx}/oaHome/production/images/img.jpg" alt="Profile Image" /></span>
                        <span>
                          <span>John Smith</span>
                          <span class="time">3 mins ago</span>
                        </span>
                        <span class="message">
                          Film festivals used to be do-or-die moments for movie makers. They were where...
                        </span>
                      </a>
                    </li>
                    <li>
                      <div class="text-center">
                        <a>
                          <strong>See All Alerts</strong>
                          <i class="fa fa-angle-right"></i>
                        </a>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <!-- /top navigation -->




		 <div class="right_col" role="main">
		 <div class="row">
        <div class="col-md-12 col-sm-12 col-xs-12">
           <div id="contentController" class=""main_menu_side hidden-print main_menu" ng-controller="contentController">
						<div class="menu_section">
							<div id="tabTitle" class=" ui pointing menu tabHeader x-tab webwidget_menu_glide" style="background-color:#006666">
								<ul >
									<li class="item" ng-click="changeTab()"
										ng-class="{true: 'active',false: 'inactive'}[tab.isActive]"
										x-href="{{tab.href}}" ng-repeat="tab in showTabs"><a href="javascript:;"> <i
											class="" ng-if="tab.icon"></i> {{tab.name}} <i
											class="fa fa-close closeIcon" ng-click="closeThisTab()"
											ng-if="tab.closeAble"></i></a></li>
								</ul>
								<div style="clear: both"></div>
							</div>
							<div class="tabContent full height">
								<iframe id="x-tab-{{tab.code}}" class="x-scroller  x-item"
									height="{{iframeHeight}}px" width="100%"  scrolling="no"  frameborder="no" border="0"
									ng-class="{false: 'x-hidden',true:'x-show'}[tab.isActive]"
									ng-src="{{tab.href}}" ng-repeat="tab in showTabs"></iframe>
							</div>
						</div>
					</div>
              </div>
         </div>
  		 </div>
  

        <!-- footer content -->
        <footer>
          <div class="pull-right">
            SmartOA - Bootstrap Admin Template by <a href="">Colorlib</a>
          </div>
          <div class="clearfix"></div>
        </footer>
        <!-- /footer content -->
      </div>
    </div>

    <!-- jQuery -->
    
    <!-- Bootstrap -->
    <script src="${ctx}/oaHome/vendors/bootstrap/dist/js/bootstrap.min.js"></script>
    <!-- FastClick -->
    <script src="${ctx}/oaHome/vendors/fastclick/lib/fastclick.js"></script>
    <!-- NProgress -->
    <script src="${ctx}/oaHome/vendors/nprogress/nprogress.js"></script>
    <!-- Chart.js -->
    <script src="${ctx}/oaHome/vendors/Chart.js/dist/Chart.min.js"></script>
    <!-- gauge.js -->
    <script src="${ctx}/oaHome/vendors/gauge.js/dist/gauge.min.js"></script>
    <!-- bootstrap-progressbar -->
    <script src="${ctx}/oaHome/vendors/bootstrap-progressbar/bootstrap-progressbar.min.js"></script>
    <!-- iCheck -->
    <script src="${ctx}/oaHome/vendors/iCheck/icheck.min.js"></script>
    <!-- Skycons -->
    <script src="${ctx}/oaHome/vendors/skycons/skycons.js"></script>
    <!-- Flot -->
    <script src="${ctx}/oaHome/vendors/Flot/jquery.flot.js"></script>
    <script src="${ctx}/oaHome/vendors/Flot/jquery.flot.pie.js"></script>
    <script src="${ctx}/oaHome/vendors/Flot/jquery.flot.time.js"></script>
    <script src="${ctx}/oaHome/vendors/Flot/jquery.flot.stack.js"></script>
    <script src="${ctx}/oaHome/vendors/Flot/jquery.flot.resize.js"></script>
    <!-- Flot plugins -->
    <script src="${ctx}/oaHome/vendors/flot.orderbars/js/jquery.flot.orderBars.js"></script>
    <script src="${ctx}/oaHome/vendors/flot-spline/js/jquery.flot.spline.min.js"></script>
    <script src="${ctx}/oaHome/vendors/flot.curvedlines/curvedLines.js"></script>
    <!-- DateJS -->
    <script src="${ctx}/oaHome/vendors/DateJS/build/date.js"></script>
    <!-- JQVMap -->
    <script src="${ctx}/oaHome/vendors/jqvmap/dist/jquery.vmap.js"></script>
    <script src="${ctx}/oaHome/vendors/jqvmap/dist/maps/jquery.vmap.world.js"></script>
    <script src="${ctx}/oaHome/vendors/jqvmap/examples/js/jquery.vmap.sampledata.js"></script>
    <!-- bootstrap-daterangepicker -->
    <script src="${ctx}/oaHome/vendors/moment/min/moment.min.js"></script>
    <script src="${ctx}/oaHome/vendors/bootstrap-daterangepicker/daterangepicker.js"></script>

    <!-- Custom Theme Scripts -->
    <script src="${ctx}/oaHome/build/js/custom.min.js"></script>
    <script src="${ctx}/oaHome/production/js/home.js"></script>
    
	
  </body>
</html>
