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
  
$c_id = intval(!empty($_GET['c_id']) ? $_GET['c_id'] : "");
$c_g_id = intval(!empty($_GET['c_g_id']) ? $_GET['c_g_id'] : "");
$c_g_name = !empty($_GET['c_g_name']) ? $_GET['c_g_name'] : "";
$c_g_price =  floatval(!empty($_GET['c_g_price']) ? $_GET['c_g_price'] : "");
$c_g_src = !empty($_GET['c_g_src']) ? $_GET['c_g_src'] : "";
$c_g_num = intval(!empty($_GET['c_g_num']) ? $_GET['c_g_num'] : "");
$c_g_count = intval(!empty($_GET['c_g_count']) ? $_GET['c_g_count'] : "");
$c_user = !empty($_GET['c_user']) ? $_GET['c_user'] : "";

$sql = "SELECT * FROM cart where c_g_id='".$c_g_id."' and c_user='".$c_user."'";//根据id和user获取商品
$returnData=@mysql_query($sql); 
  
while($result=@mysql_fetch_assoc($returnData)){  
   $c_goods[]=$result;//将取得的所有数据，一行两行或者三行，赋值给c_goods数组  
}
if(!empty($c_goods)) {
	// echo 0;//0 cart已存在商品
	$ret = array(
    'status' => 0,
	);
	echo json_encode($ret);
	$nowc_goods = $c_goods[0]['c_g_count'];
	$nowc_g_id = $c_goods[0]['c_g_id'];
	$nowc_goods +=$c_g_count; 
	// echo $nowc_goods;
	$sql = "UPDATE cart SET c_g_count=$nowc_goods WHERE c_g_id=$nowc_g_id";
	mysql_query($sql); 
	exit();// echo 不能结束脚本   需要exit 结束脚本
} else {
	// echo 1;//1 cart不存在商品
	$ret = array(
    'status' => 1,
	);
	echo json_encode($ret);
	$sql = "INSERT INTO cart VALUES($c_id,$c_g_id,'$c_g_name',$c_g_price,'$c_g_src',$c_g_num,$c_g_count,'$c_user')";
	mysql_query($sql);
	exit();
}

?>  