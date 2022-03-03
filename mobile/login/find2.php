<?
  session_start();
?>

<meta charset="UTF-8">

<?
  @extract($_GET); 
  @extract($_POST); 
  @extract($_SESSION); 
  /*
  $id='green2'
  $name='홍길동'
  $hp1='010'
  $hp2='1111'
  $hp3='2222'
  */


  if(!$id) {  /* !='없으면'*/
    echo("
    <script>
    window.alert('아이디를 입력하세요');
    history.go(0);
    </script>
    ");
    exit;
  }

  if(!$name) {  /* !='없으면'*/
    echo("
    <script>
    window.alert('이름을 입력하세요');
    history.go(0);
    </script>
    ");
    exit;
  }

  if(!($hp2 && $hp3)) {
    echo("
    <script>
    window.alert('연락처를 입력하세요');
    history.go(0);
    </script>
    ");
    exit;
  }


  include "../lib/dbconn.php";

  $sql = "select * from member where id='$id'";
  $result = mysql_query($sql, $connect); //있으면 1, 없으면 null

  $num_match = mysql_num_rows($result);  //1 null

  if(!$num_match) //검색 레코드가 없으면
  {
    echo(" 
    <script>
    window.alert('등록되지 않은 아이디 입니다');
    history.go(0);
    </script>
    ");
    exit;

  }
  else     //검색 레코드가 있으면
  {
    $hp = $hp1."-".$hp2."-".$hp3;

    $row = mysql_fetch_array($result); 
    //$row[id] ,.... $row[level]
    $sql ="select * from member where id='$id' and name='$name' and hp='$hp'";
    $result = mysql_query($sql, $connect);
    $num_match = mysql_num_rows($result); //있으면 1, 없으면 null

    /* db에 이미 암호화 된 pass를 다시 암호화해서 기존의 pass로 알아낼수 없다,
    암호화된 pass가 입력된 pass의 암호화와 일치하는가를 확인해야함*/

    if(!$num_match) //null이면=입력된 pass가 암호화된 패스와 맞지 않다면
    {
      echo("
      <script>
      window.alert('등록된 정보가 없습니다');
      history.go(0);
      </script>
      ");

      exit;
    }
    
    else  //1이면=아이디와 이름 전화번호가 모두 일치 한다면
    {
      $userid = $row[id];
      $username = $row[name];
      $userhp = $row[hp];
      $date = $row[regist_day];

      function generateRandomPassword($length=8, $strength=0) {
        // 마음대로 조합할 문자 써주기
        $vowels = 'aeuy!@#$';
        $consonants = 'bdghjmnpqrstvz';  //랜덤으로 뽑아낼 기본 문자(여기에 빠진 영문자는 vowels에 넣기)(특수문자도 가능)
        if ($strength & 1) 
        { // =$strength == 1(php는 요거랑 같은 뜻 )
          $consonants .= 'BDGHJLMNPQRSTVWXZ';  //추가할 문자
        }

        $password = '';
        $alt = time() % 2; //0 또는 1 
        for ($i = 0; $i < $length; $i++) 
        { //0~7 8회
          if ($alt == 1) 
          {
            $password .= $consonants[(rand() % strlen($consonants))]; //bdghjmnpqrstvz + BDGHJLMNPQRSTVWXZ
            $alt = 0;
          } 
          else 
          {
            $password .= $vowels[(rand() % strlen($vowels))]; //aeuy + bdghjmnpqrstvz + BDGHJLMNPQRSTVWXZ
            $alt = 1;
          }
        } //이 포문을 8번 돌림

        return $password; //임시 패스워드 'neWysdv@'
      }

      $ranpass = generateRandomPassword(8,1);  //랜덤으로 뽑은 8자의 문자(1를 넣으면 복잡한 랜덤 숫자가 나옴)

      echo("
      <script>
      $('.be').css({'display':'none'});
      </script>
      ");

      $sql = "update member set pass=password('$ranpass') where id='$id' and name='$name' and hp='$hp'";
      $result = mysql_query($sql, $connect);
      
    }


  }          
?>
<article id="content" class="af">
  <div class="tit">
    <h2>비밀번호 찾기</h2>
    <p class="ex">임시 비밀번호로 로그인 후 비밀번호를 변경해주세요.</p>
  </div>
  <form name="find" method="get" action="find.php"> 

    <div id="login_form">
      <div class="row">
        <label for="random">임시비밀번호</label>
        <input type="text" name="random" id="random" class="disabled_input " value="<?=$ranpass?>" disabled>
      </div>
    </div>

    <!-- 로그인/비밀번호 찾기/회원가입 -->
    <ul id="button">
      <li><a class="find" href="./login_form.php">로그인하기</a></li>
    </ul>

  </form>

</article>
