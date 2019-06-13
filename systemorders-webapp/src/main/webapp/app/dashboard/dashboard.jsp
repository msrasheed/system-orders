<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Synopsis-ordersystem</title>
        <link rel = "stylesheet" type = "text/css" href = "dashboard.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
</head>
<body>
    <nav>
        <div class="company">
            <img src="logo-synopsis-trans.png"/>
            <p>SYNOPSIS</p>
        </div>
        <div class="app">
            <p>Sistema de Solicitudes</p>
        </div>
        <div class="user">
            <p>${person.firstname}</p>
            <img src="user-icon.png"/>
        </div>
    </nav>
    <div class="main-container">
        <div class="inbox-panel">
            <ul>
                <li class="button">
                    <a href="#">
                        <i class="material-icons">add</i>
                        <div>Nuevo solicitud</div>
                    </a>
                </li>
                <li class="button">
                    <a href="#">
                        <i class="material-icons">inbox</i>
                        <div>Main</div>
                    </a>
                </li>
                <li class="button">
                    <a href="#">
                        <i class="material-icons">forward</i>
                        <div>Pending</div>
                    </a>
                </li>
                <li class="button">
                    <a href="#">
                        <i class="material-icons">send</i>
                        <div>Completed</div>
                    </a>
                </li>
            </ul>
        </div>
        <div class="order-tray">
            <div class="tray-search">
                <!-- <i class="material-icons search">search</i> -->
                <input type="text" placeholder="Search..."/>
                <i class="material-icons filter">filter_list</i>
            </div>
            <div class="order-list">
                <ul>
                    <li class="order">
                        <a href="#">
                            <div class="left">
                                <div class="wrapper">
                                    <div class="circle"></div>
                                    <p>NEW</p>
                                    <p>12/06</p>
                                </div>
                            </div>
                            <div class="right">
                                <h2>Client</h2>
                                <h3>Employee</h3>
                                <p>details details details details details details details details details details details </p>
                            </div>
                        </a>
                    </li>
                    <li class="order">
                        <a href="#">
                            <div class="left">
                                <div class="wrapper">
                                    <div class="circle"></div>
                                    <p>NEW</p>
                                    <p>12/06</p>
                                </div>
                            </div>
                            <div class="right">
                                <h2>Client2</h2>
                                <h3>Employee2</h3>
                                <p>details details details details details details details details details details details </p>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
            <a href="/systemorders-webapp/app/orders">Click Here</a>
        </div>
        <div class="content-view">
            <img src="background.jpg" class="background-img"/>
            <div class="content">
                <div class="new-order-form-page">
                    <form class="new-request" action="/app/orders" method="post">
                        <input type="hidden" name="action" value="create">
                        <h1>Nuevo Solicitud</h1>
                        <div class="all-indent">
                            <div class="section">
                                <h2>General</h2>
                                <div class="section-body row">
                                    <div class="left">
                                        <p>Type</p>
                                        <p>Date Needed</p>
                                    </div>
                                    <div class="right">
                                        <select name="type">
                                            <option>Laptop</option>
                                            <option>Desktop</option>
                                        </select><br/>
                                        <input type="date" name="date-needed" ><br/>
                                    </div>
                                </div>
                            </div>
                            <div class="section">
                                <h2>Hardware Specs</h2>
                                <div class="section-body row">
                                    <div class="left">
                                        <p>Processor</p>
                                        <p>Memory</p>
                                        <p>Hard disk</p>
                                    </div>
                                    <div class="right">
                                        <select name="processor">
                                            <option>Intel</option>
                                            <option>AMD</option>
                                        </select><br/>
                                        <input type="number" name="memory" value="2" min="1"><span>gb</span><br/>
                                        <input type="number" name="harddisk" value="500" min="150"><span>gb</span><br/>
                                    </div>
                                </div>
                            </div>
                            <div class="section">
                                <h2>OS</h2>
                                <div class="section-body row">
                                    <div class="left">
                                        <p>Operating System</p>
                                    </div>
                                    <div class="right">
                                        <select name="processor">
                                            <option>Windows</option>
                                            <option>MacOS</option>
                                            <option>Linux</option>
                                        </select><br/>
                                    </div>
                                </div>
                            </div>
                            <div class="section">
                                <h2>Software</h2>
                                <div class="section-body">
                                    <div class="variable-input">
                                        <input type="text" name="software1" value="Microsoft Office 2017">
                                        <i class="material-icons delete">delete</i>
                                    </div>
                                    <div class="variable-input">
                                        <input type="text" name="software2" placeholder="Additional software">
                                        <i class="material-icons add">add</i>
                                    </div>
                                </div>
                            </div>
                            <div class="section">
                                <h2>Other</h2>
                                <div class="section-body">
                                    <div class="variable-input">
                                        <input type="text" name="other1" value="Desktop image is an Asshole">
                                        <i class="material-icons delete">delete</i>
                                    </div>
                                    <div class="variable-input">
                                        <input type="text" name="other2" placeholder="Other...">
                                        <i class="material-icons add">add</i>
                                    </div>
                                </div>
                            </div>
                            <div class="section">
                                <h2>Cost Sheet</h2>
                                <div class="section-body row">
                                    <div class="left">
                                        <p>Excel Sheet</p>
                                    </div>
                                    <div class="right">
                                        <input type="file" name="cost-sheet"/>
                                    </div>
                                </div>
                            </div>
                            <div class="section">
                                <h2></h2>
                                <input type="submit" value="Eviar"/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</body>
</html>