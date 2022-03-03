<meta charset="utf-8">
<?
   
   @extract($_POST);
   @extract($_GET);
   @extract($_SESSION);
    //$id='a';

    if(!$id) 
   {
      echo("아이디를 입력하세요.");
   }
   else
   {
      include "../lib/dbconn.php";
 
      $sql = "select * from member where id='$id' ";

      $result = mysql_query($sql, $connect);
      $num_record = mysql_num_rows($result);

      if ($num_record) //검색레코드가 있었다면은~~
      {      
         echo "<div style='color:#D82723'>다른 아이디를 사용하세요.</div>"; //div로 고치기(html , php???), ajax로 같이 쓰면 data에다가 넣어짐
         exit;
      }
      else
      {
         echo "<div style='color:green'>사용가능한 아이디입니다.</div>";
         exit;
      }
      mysql_close();
   }

?>

