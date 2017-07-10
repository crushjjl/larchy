<?php  

// 当前文件作用：保存用户留言信息到数据库中
// {"status":0, "msg":"success"} -- 用户留言成功
// {"status":1, "msg":"failed"} -- 用户留言失败

header('Content-Type:text/html;charset=utf-8');
header("Access-Control-Allow-Origin:*"); //允许任何访问(包括ajax跨域) 
$host='localhost';//主机  
$user='root';//数据库账号  
$password='root';//数据库密码  
$database='larchy';//数据库名  
@mysql_connect($host,$user,$password) or die("error");//连接数据库管理系统  
@mysql_select_db($database);//选择操作数据库  
@mysql_query("SET NAMES utf8");//设置设置UTF-8编码(JSON的唯一编码)，数据库整理为：utf8_general_ci，以此达到输出中文简体的目的  

$m_user = !empty($_GET['m_user']) ? $_GET['m_user'] : "";
$m_email = !empty($_GET['m_email']) ? $_GET['m_email'] : "";
$m_phone = !empty($_GET['m_phone']) ? $_GET['m_phone'] : "";
$m_content = !empty($_GET['m_content']) ? $_GET['m_content'] : "";
$m_sendtime = !empty($_GET['m_sendtime']) ? $_GET['m_sendtime'] : "";
$m_system_user = !empty($_GET['m_system_user']) ? $_GET['m_system_user'] : "";

$sql = "INSERT INTO user_msg VALUES(NULL,'$m_user','$m_email','$m_phone','$m_content',NULL,'$m_sendtime','$m_system_user',NULL)";
$res = @mysql_query($sql);

if($res) { //成功
    $ret = array(
        'status' => 0, // 0成功，1失败
        'msg'   => 'success'
    );
    echo json_encode($ret);
    exit();
} else { //失败
    $ret = array(
        'status' => 1, // 0成功，1失败
        'msg'   => 'failed'
    );
    echo json_encode($ret);
    exit();
}

?>