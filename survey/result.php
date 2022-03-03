<?
   	session_start(); 
     @extract($_POST);
     @extract($_GET);
     @extract($_SESSION);
  
   include "../lib/dbconn.php";

   $sql ="select * from survey";
   $result = mysql_query($sql, $connect);
   $row = mysql_fetch_array($result);

   $total = $row[ans1] + $row[ans2] + $row[ans3] + $row[ans4]; 

   $ans1_percent = $row[ans1]/$total * 100;
   $ans2_percent = $row[ans2]/$total * 100;
   $ans3_percent = $row[ans3]/$total * 100;
   $ans4_percent = $row[ans4]/$total * 100;

   $ans1_percent = floor($ans1_percent); //floor : 소수점 이하를 버리는 함수
   $ans2_percent = floor($ans2_percent);
   $ans3_percent = floor($ans3_percent);
   $ans4_percent = floor($ans4_percent);
?>
<body>
      <form name=survey_form method=post class="af">
          <p>최근 피해 해충은 무엇인가요? <span>- 총 투표수 <strong><?= $total ?></strong> 명 -</span></p>
          <div class="progress_wrap">
            <div class="progress">
              <div>
                <?
                  //그래프 수치 나타내는 법
                  $rest = 100 - $ans1_percent;
                  echo "
                        <div class='re2' style='height:$rest%'></div>
                        <div class='re1' style='height:$ans1_percent%'><span>$ans1_percent%</span></div>
                              ";
                ?>
              </div>
              <p>개미류<span>(<?= $row[ans1] ?>명)</span></p>
            </div>
            <div class="progress">
              <div>
                <?
                  //그래프 수치 나타내는 법
                  $rest = 100 - $ans2_percent;
                  echo "
                        <div class='re2' style='height:$rest%'></div>
                        <div class='re1' style='height:$ans2_percent%'><span>$ans2_percent%</span></div>
                              ";
                ?>
              </div>
              <p>명나방류 <span>(<?= $row[ans2] ?>명)</span></p>
            </div>
            <div class="progress">
              <div>
                <?
                  //그래프 수치 나타내는 법
                  $rest = 100 - $ans3_percent;
                  echo "
                        <div class='re2' style='height:$rest%'></div>
                        <div class='re1' style='height:$ans3_percent%'><span>$ans3_percent%</span></div>
                              ";
                ?>
              </div>
              <p>바퀴류 <span>(<?= $row[ans3] ?>명)</span></p>
            </div>
            <div class="progress">
              <div>
                <?
                  //그래프 수치 나타내는 법
                  $rest = 100 - $ans4_percent;
                  echo "
                        <div class='re2' style='height:$rest%'></div>
                        <div class='re1' style='height:$ans4_percent%'><span>$ans4_percent%</span></div>
                              ";
                ?>
              </div>
              <p>모기류<span>(<?= $row[ans4] ?>명)</span></p>
            </div>
          </div>
          
          <!-- 투표하기/결과보기 버튼 -->
          <div class="btn_wrap">
              <div>
                  <a href="./sub4_2.html" class="btn btn_nomal" role="button">닫기</a>
              </div>
          </div>
      </form>

