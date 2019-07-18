<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Ordersdash</title>
  <base href="/systemorders-webapp/app/dashboard/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
  <script type="text/javascript">
      function getJSPInjectedUserInformation() {
          return {
              "userid":${employee.userid},
              "role":"${employee.role}",
              "fname":"${employee.fname}",
              "lname":"${employee.lname}",
              "username":"${employee.username}",
              "email":"${employee.email}"
          };
      }
  </script>
</head>
<body>
  <app-root></app-root>
<script src="/systemorders-webapp/app/dashboard/runtime-es2015.js" type="module"></script><script src="/systemorders-webapp/app/dashboard/polyfills-es2015.js" type="module"></script><script src="/systemorders-webapp/app/dashboard/runtime-es5.js" nomodule></script><script src="/systemorders-webapp/app/dashboard/polyfills-es5.js" nomodule></script><script src="/systemorders-webapp/app/dashboard/styles-es2015.js" type="module"></script><script src="/systemorders-webapp/app/dashboard/styles-es5.js" nomodule></script><script src="/systemorders-webapp/app/dashboard/vendor-es2015.js" type="module"></script><script src="/systemorders-webapp/app/dashboard/main-es2015.js" type="module"></script><script src="/systemorders-webapp/app/dashboard/vendor-es5.js" nomodule></script><script src="/systemorders-webapp/app/dashboard/main-es5.js" nomodule></script></body>
</html>
