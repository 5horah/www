<? 
    session_start();

    @extract($_POST);
    @extract($_GET);
    @extract($_SESSION);
?>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>회원가입</title>
    <link rel="stylesheet" href="../common/css/common.css">
	<link rel="stylesheet" href="./css/member_form.css">

    <script src="../common/js/jquery-1.12.4.min.js"></script>
    <script src="../common/js/jquery-migrate-1.4.1.min.js"></script>

    <script>
        $(document).ready(function(){

            //id 중복검사
            $("#id").keyup(function() { //id입력 상자에 id값 입력시
                var id = $('#id').val(); //a .val(): 값빼내기

                $.ajax({ //post방식으로 php파일에 접근해서 data를 계산
                    type: "POST",
                    url: "check_id.php", //접근 후 계산(링크X, 속도up)
                    data: "id="+ id, //입력된 data값을 변수 값으로 넘김
                    cache: false, 

                    success: function(data){ //data => echo "문자열"
                        $("#loadtext").html(data); //.html(data) : 자식에 넣기
                    }
                });
            });

            //nick 중복검사		 
            $("#nick").keyup(function() { //id입력 상자에 id값 입력시
                var nick = $('#nick').val();

                $.ajax({
                    type: "POST",
                    url: "check_nick.php",
                    data: "nick="+ nick,  
                    cache: false, 

                    success: function(data){
                        $("#loadtext2").html(data);
                    }
                });
            });	

        });
    </script>
    <script>
        function check_input(){

            if (!document.member_form.id.value){
                alert("아이디를 입력해주세요");    
                document.member_form.id.focus();
                return;
            }

            if (!document.member_form.pass.value){
                alert("비밀번호를 입력해주세요");    
                document.member_form.pass.focus();
                return;
            }

            if (!document.member_form.pass_confirm.value){
                alert("비밀번호확인을 입력해주세요");    
                document.member_form.pass_confirm.focus();
                return;
            }

            if (!document.member_form.name.value){
                alert("이름을 입력해주세요");    
                document.member_form.name.focus();
                return;
            }

            if (!document.member_form.nick.value){
                alert("닉네임을 입력해주세요");    
                document.member_form.nick.focus();
                return;
            }

            if (!document.member_form.hp2.value || !document.member_form.hp3.value ){
                alert("휴대폰 번호를 입력해주세요");    
                document.member_form.hp2.focus();
                return;
            }

            if (document.member_form.pass.value != document.member_form.pass_confirm.value){
                alert("비밀번호가 일치하지 않습니다.\n다시 입력해주세요.");    
                document.member_form.pass.focus();
                document.member_form.pass.select();
                return;
            }

            document.member_form.submit(); // insert.php 로 변수 전송
        }

        function reset_form(){
            document.member_form.id.value = "";
            document.member_form.pass.value = "";
            document.member_form.pass_confirm.value = "";
            document.member_form.name.value = "";
            document.member_form.nick.value = "";
            document.member_form.hp1.value = "010";
            document.member_form.hp2.value = "";
            document.member_form.hp3.value = "";
            document.member_form.email1.value = "";
            document.member_form.email2.value = "";

            document.member_form.id.focus();

            return;
        }
    </script>
</head>
<body>
    <div class="wrap">
        <header>
            <h1><a class="logo" href="../index.html">세스코 로고</a></h1>
        </header>
        <article id="content" class="member_content">
            <div class="tit member_tit">
				<h2>회원가입 정보</h2>
				<p class="ex"><span class="essential">*</span> 는 필수 입력항목입니다.</p>
			</div>
            <form  name="member_form" method="post" action="insert.php"> 

                <div class="row">
                    <label for="id">아이디<span class="essential"> *</span></label>
                    <input type="text" name="id" id="id" placeholder="cesco123" maxlength="41" required>
                    <div id="loadtext"></div>  
                </div>

                <div class="row">
                    <label for="pass">비밀번호<span class="essential"> *</span></label>
                    <input type="password" name="pass" id="pass" placeholder="****" maxlength="16" required>
                    <div id="loadtext"></div>  
                </div>

                <div class="row">
                    <label for="pass_confirm">비밀번호 재확인<span class="essential"> *</span></label>
                    <input type="password" name="pass_confirm" id="pass_confirm" placeholder="****" maxlength="16" required>
                    <div id="loadtext"></div>  
                </div>

                <div class="row">
                    <label for="name">이름<span class="essential"> *</span></label>
                    <input type="text" name="name" id="name" placeholder="홍길동" required>
                    <div id="loadtext"></div>  
                </div>

                <div class="row">
                    <label for="nick">닉네임<span class="essential"> *</span></label>
                    <input type="text" name="nick" id="nick" placeholder="세스코" required>
                    <div id="loadtext2"></div>  
                </div>

                <div class="row">
                    <label for="hp1">휴대전화<span class="essential"> *</span></label>
                    <label class="hidden" for="hp1">전화번호앞3자리</label>
                    <select class="hp member_hp" name="hp1" id="hp1"> 
                        <option value='010'>010</option>
                        <option value='011'>011</option>
                        <option value='016'>016</option>
                        <option value='017'>017</option>
                        <option value='018'>018</option>
                        <option value='019'>019</option>
                    </select>
                    <span class="symbol">-</span>
                    <label class="hidden" for="hp2">전화번호중간4자리</label>
                    <input type="text" class="hp member_hp" name="hp2" id="hp2" maxlength="4" placeholder="0000" required>
                    <span class="symbol">-</span>
                    <label class="hidden" for="hp3">전화번호끝4자리</label>
                    <input type="text" class="hp member_hp" name="hp3" id="hp3" maxlength="4" placeholder="0000" required>
                    <div id="loadtext2"></div>  
                </div>

                <div class="row">
                    <label for="nick">이메일</label>
                    <label class="hidden" for="email1">이메일아이디</label>
                    <input type="text" id="email1" name="email1" class="mail member_mail" placeholder="cesco" required>
                    <span class="symbol">@</span>
                    <label class="hidden" for="email2">이메일주소</label>
                    <input type="text" name="email2" id="email2" class="mail member_mail" placeholder="cesco.co.kr" required>
                    <div id="loadtext"></div>  
                </div>

                <ul class="btn_wrap btn_wrap2 member_btn_wrap">
                    <li><a href="#" class="btn" role="button" onclick="reset_form()">수정하기</a></li>
                    <li><a href="#" class="btn" role="button" onclick="check_input()">가입하기</a></li>
                </ul>

            </form>
        </article>
    </div>
</body>
</html>

