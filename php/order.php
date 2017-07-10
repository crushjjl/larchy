<?php

// 当前文件作用：检测在服务器数据库中是否是有指定用户名的用户已存在
// {"status":0} -- 用户已存在
// {"status":1} -- 用户不存在

header('Content-Type:text/html;charset=utf-8');
header("Access-Control-Allow-Origin:*"); //允许任何访问(包括ajax跨域) 
$host='localhost';//主机  
$user='root';//数据库账号  
$password='root';//数据库密码
$database='larchy';//数据库名
@mysql_connect($host,$user,$password) or die("error");//连接数据库管理系统  
@mysql_select_db($database);//选择操作数据库  
@mysql_query("SET NAMES utf8");//设置设置UTF-8编码(JSON的唯一编码)，数据库整理为：utf8_general_ci，以此达到输出中文简体的目的  
  
$o_user = !empty($_GET['o_user']) ? $_GET['o_user'] : "";
$o_user_tel = !empty($_GET['o_user_tel']) ? $_GET['o_user_tel'] : "";
$o_user_add =  !empty($_GET['o_user_add']) ? $_GET['o_user_add'] : "";
$o_remarks = !empty($_GET['o_remarks']) ? $_GET['o_remarks'] : "";
$o_totalmoney = !empty($_GET['o_totalmoney']) ? $_GET['o_totalmoney'] : "";
$o_c_user = !empty($_GET['o_c_user']) ? $_GET['o_c_user'] : "";

// $sql = "SELECT * FROM user_order where o_user='".$o_user."'";//根据user获取商品
// $returnData=@mysql_query($sql); 

$sql = "INSERT INTO user_order VALUES(NULL,'$o_user','$o_user_tel','$o_user_add','$o_remarks','$o_totalmoney','$o_c_user',NULL,NULL)";

mysql_query($sql);

?>  