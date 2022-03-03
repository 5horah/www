<?
   	session_start(); 
      @extract($_POST);
      @extract($_GET);
      @extract($_SESSION);
      //composer = ans1(필드명)

   include "../lib/dbconn.php";
 
   $sql = "update survey set $composer = $composer + 1"; //선택한 필요 값을 1씩 증가
   mysql_query($sql, $connect);

   mysql_close();

   Header("location:result.php");
?>

