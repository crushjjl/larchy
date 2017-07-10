<?php  

// 当前文件作用：搜索商品信息
// {"status":0, "msg":"success"} -- 搜素成功
// {"status":1, "msg":"failed"} -- 搜索失败

header('Content-Type:text/html;charset=utf-8');
header("Access-Control-Allow-Origin:*"); //允许任何访问(包括ajax跨域) 
$host='localhost';//主机  
$user='root';//数据库账号  
$password='root';//数据库密码  
$database='larchy';//数据库名  
@mysql_connect($host,$user,$password) or die("error");//连接数据库管理系统  
@mysql_select_db($database);//选择操作数据库  
@mysql_query("SET NAMES utf8");//设置设置UTF-8编码(JSON的唯一编码)，数据库整理为：utf8_general_ci，以此达到输出中文简体的目的  

$pro_name = !empty($_GET['pro_name']) ? $_GET['pro_name'] : "";


$sql = "SELECT * from list_goods  WHERE pro_name LIKE '%$pro_name%'";
$returnData = @mysql_query($sql);
while($result=@mysql_fetch_assoc($returnData)){  
   $search_goods[]=$result;//将取得的所有数据，一行两行或者三行，赋值给search_goods数组  
}
if(!empty($search_goods)) {
    // echo 0;//0 已存在
    $ret = array(
    'status' => 0,
    'msg' => $search_goods,
    );
    echo json_encode($ret);
    // echo json_encode($search_goods);
    exit();// echo 不能结束脚本   需要exit 结束脚本
} else {
    // echo 1;//1 不存在
    $ret = array(
    'status' => 1,
    'msg' => 'failed',
    );
    echo json_encode($ret);
    exit();
}

?>