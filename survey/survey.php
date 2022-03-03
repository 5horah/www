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
  <title>설문조사</title>
    <script>
        function update() {
            var vote;
            var length = document.survey_form.composer.length; //4개

            for (var i = 0; i < length; i++) {
                if (document.survey_form.composer[i].checked == true) {
                    vote = document.survey_form.composer[i].value; //ans1 : 필드명(체크한 필드를 변수 값으로 넣어줌)
                    break;
                }
            }

            if (i == length) //i=4일때 포문 벗어남!(체크를 하나도 하지 않으면)
            {
                alert("문항을 선택하세요");
                return;
            }

            // location.replace("../survey/update.php?composer=" + vote);
            // history.pushstate("../survey/update.php?composer=" + vote);
            // $(".popup").text("" + vote);
            // html("../survey/update.php?composer=" + vote);
            var ans1 = $('#ans1').val();
                var ans2 = $('#ans2').val(); 
                var ans3 = $('#ans3').val();
                var ans4 = $('#ans4').val();
            $.ajax({
                    type: "POST",
                    url: "../survey/update.php?composer=" + vote,
                    data: "ans1="+ ans1+ "ans2="+ans2+ "ans3="+ans3+ "ans4="+ans4,  //매개변수id도 같이 넘겨줌
                    cache: false, 
                    success: function(data) //이 메소드가 완료되면 data라는 변수 안에 echo문이 들어감
                    {
                        $(".be").css("display","none")
                        $("#loadtext").html(data); //span안에 있는 태그를 사용할 것이기 때문에 html 함수사용
                    }                        
                });
        };

        function result() {
                var ans1 = $('#ans1').val();
                var ans2 = $('#ans2').val(); 
                var ans3 = $('#ans3').val();
                var ans4 = $('#ans4').val();
            $.ajax({
                    type: "POST",
                    url: "../survey/result.php",
                    data: "ans1="+ ans1+ "ans2="+ans2+ "ans3="+ans3+ "ans4="+ans4,  //매개변수id도 같이 넘겨줌
                    cache: false, 
                    success: function(data) //이 메소드가 완료되면 data라는 변수 안에 echo문이 들어감
                    {
                        $(".be").css("display","none")
                        $("#loadtext").html(data); //span안에 있는 태그를 사용할 것이기 때문에 html 함수사용
                    }                        
                });
        };

    </script>
</head>
<body>
<div class="modal_box"></div>
<div id="showsurvey">
    <a href="#" class="close_btn"><i class="fas fa-times"></i><span class="hidden">닫기</span></a>
        <div class="survey_content">
            <div class="tit">
                <h2>세스코 설문조사</h2>
                <p class="ex">홈페이지를 방문해주셔서 감사합니다.<br>해당 조사는 향후 더 편리한 서비스를 제공하기 위해 실시합니다.</p>
            </div>
            <span id="loadtext"></span>
            <form name=survey_form method=post class="be">
                <p>"최근 피해 해충은 무엇인가요?"</p>
                <div class="check">
                    <input type="radio" id="ans1" name="composer" value='ans1' class="ans">
                    <label for="ans1">개미류</sapn></label>
                </div>
                <div class="check">
                    <input type="radio" id="ans2" name="composer" value='ans2' class="ans">
                    <label for="ans2">명나방류</sapn></label>
                </div>
                <div class="check">
                    <input type="radio" id="ans3" name="composer" value='ans3' class="ans">
                    <label for="ans3">바퀴류</sapn></label>
                </div>
                <div class="check">
                    <input type="radio" id="ans4" name="composer" value='ans4' class="ans">
                    <label for="ans4">모기류</sapn></label>
                </div>

                <!-- 투표하기/결과보기 버튼 -->
                <div class="btn_wrap btn_double">
                    <div>
                        <button type="button" value="결과보기" class="btn btn_nomal" onclick="result()">결과보기</button>
                    </div>
                    <div>
                        <button type="button" value="투표" class="btn btn_solid" onclick="update()">투표완료</button>
                    </div>
                </div>

            </form>

        </div>

</div>
</body>
</html>