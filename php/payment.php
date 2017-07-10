<?php

// 当前文件作用：根据username检测在服务器数据库中是否是有订单已存在
// {"status":0} -- 已存在
// {"status":1} -- 不存在

header('Content-Type:text/html;charset=utf-8');
header("Access-Control-Allow-Origin:*"); //允许任何访问(包括ajax跨域) 
$host='localhost';//主机  
$user='root';//数据库账号  
$password='root';//数据库密码
$database='larchy';//数据库名
@mysql_connect($host,$user,$password) or die("error");//连接数据库管理系统  
@mysql_select_db($database);//选择操作数据库  
@mysql_query("SET NAMES utf8");//设置设置UTF-8编码(JSON的唯一编码)，数据库整理为：utf8_general_ci，以此达到输出中文简体的目的  
 
$o_c_user = !empty($_GET['o_c_user']) ? $_GET['o_c_user'] : "";
$sql = "SELECT * FROM user_order where o_c_user='".$o_c_user."'";//根据o_c_user获取user_order里面的商品

$returnData=@mysql_query($sql);  
while($result=@mysql_fetch_assoc($returnData)){  
   $order_goods[]=$result;//将取得的所有数据，一行两行或者三行，赋值给cart_goods数组  
}

if(!empty($order_goods)) {
	// echo 0;//0 已存在
	$ret = array(
    'status' => 0,
	);
	// echo json_encode($ret);
	// $sql = "UPDATE cart SET c_g_count=$c_g_count WHERE c_g_id=$c_g_id";
	// mysql_query($sql);
	echo json_encode($order_goods);
	exit();// echo 不能结束脚本   需要exit 结束脚本
} else {
	// echo 1;//1 不存在
	$ret = array(
    'status' => 1,
	);
	echo json_encode($ret);
	exit();
}
?>  