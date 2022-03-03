<?
  session_start();
?>
<meta charset="utf-8">
<?
  @extract($_GET); 
  @extract($_POST); 
  @extract($_SESSION);

  if(!$id) {   //값이 없을 경우
    echo("
          <script>
            window.alert('아이디를 입력하세요.');
            history.go(-1);
          </script>
        ");

    exit;
  }

  if(!$pass) {
    echo("
          <script>
            window.alert('비밀번호를 입력하세요.');
            history.go(-1);
            document.pass.focus();
          </script>
        ");
    exit;
  }

  include "../lib/dbconn.php";

  // 아이디 유무 검사

  $sql = "select * from member where id='$id'";
  $result = mysql_query($sql, $connect);

  $num_match = mysql_num_rows($result);  //1(검색o) 0(검색X)

  if(!$num_match){
    echo("
          <script>
            window.alert('등록되지 않은 아이디입니다.');
            history.go(-1);
          </script>
        ");
        exit;
  }
  else{
    $row = mysql_fetch_array($result); 
    //$row[id] ,.... $row[level]
    $sql ="select * from member where id='$id' and pass=password('$pass')"; //입력한 패스워드 암호화해서 비교(password())
    $result = mysql_query($sql, $connect);
    $num_match = mysql_num_rows($result);

    if(!$num_match){  //적은 패스워드와 디비 패스워드가 같지않을때
      echo("
        <script>
          window.alert('비밀번호가 일치하지 않습니다.');
          history.go(-1);
        </script>
      ");
      exit;
    }
      else{ // 입력된 pass 와 테이블에 저장된 pass 일치한다.

        $userid = $row[id];
        $username = $row[name];
        $usernick = $row[nick];
        $userlevel = $row[level];

        //세션변수에 id~level 값을 저장한다(로그인상태) / 세션변수로 만들기
        $_SESSION['userid'] = $userid;//$_SESSION['userid'] = $row[id];
        $_SESSION['username'] = $username;//$_SESSION['username'] = $row[name];
        $_SESSION['usernick'] = $usernick;//$_SESSION['usernick'] = $row[nick];
        $_SESSION['userlevel'] = $userlevel;//$_SESSION['userlevel'] = $row[level];

        echo("
          <script>
            alert('로그인이 되었습니다.');
            location.href = '../index.html';
          </script>
          ");
        }    
  }          
?>
