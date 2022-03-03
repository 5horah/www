<? 
	session_start(); 
	@extract($_POST);
	@extract($_GET);
	@extract($_SESSION);
	//세션변수 4
	//num=7&page=1

	include "../lib/dbconn.php";

	$sql = "select * from greet where num=$num";
	$result = mysql_query($sql, $connect);

	$row = mysql_fetch_array($result);       	
	$item_subject = $row[subject];
	$item_content = $row[content];
?>
<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>공지사항 수정페이지</title>
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous">
	<link rel="stylesheet" href="../common/css/common.css">
	<link rel="stylesheet" href="../sub4/common/css/sub4common.css">
	<link rel="stylesheet" href="./css/greet.css">
</head>
<body>
	<? include "../common/sub_header.html" ?>
	
	<div class="visual">
        <img src="../sub4/common/images/visual.jpg" alt="서브 비주얼 이미지">
        <div class="visual_text">
            <h3>CESCO SQUARE</h3>
            <p>고객님들의 다양한 후기와 소식을 전달해드립니다.</p>
        </div>
    </div>

	<div class="sub_menu">
		<ul>
            <li><a href="../concert/list.php">고객리뷰</a></li>
            <li ><a href="../sub4/sub4_2.html">세스코 지식인</a></li>
            <li><a href="../sub4/sub4_3.html">홍보센터</a></li>
            <li class="current"><a href="../greet/list.php">공지사항</a></li>
        </ul>
    </div>

    <article id="content">
		<div class="title_area">
			<div class="line_map"><i class="fas fa-home"></i><span class="hidden">home</span> &gt; 세스코광장 &gt; <strong>공지사항</strong></div>
			<h2>공지사항</h2>
			<p>세스코의 <span>새로운 소식</span>과 <span>행사내용</span>을 전해드립니다.</p>
		</div>
		<div class="content_toptopic">
			<h3>NOTICE MODIFY</h3>
		</div>

		<form  name="board_form" class="board_form" method="post" action="insert.php?mode=modify&num=<?=$num?>&page=<?=$page?>"> 
			<div id="write_form">

				<div class="row" id="write_row1">
                    <label for="nick">작성자</label>
					<input type="text" name="nick" id="nick" class="disabled_input " value="<?=$usernick?>" disabled>
                    <div id="loadtext2"></div>  
                </div>

				<div class="row" id="write_row2">
                    <label for="subject">제목</label>
                    <input type="text" name="subject" id="subject" value="<?=$item_subject?>" placeholder="제목을 입력해주세요.">
                </div>

				<div class="row" id="write_row3">
                    <label for="text_content">내용</label>
                    <textarea name="content" id="text_content" class="text_content" placeholder="내용을 입력해주세요."><?=$item_content?></textarea>
                </div>

			</div>

			<div id="page_button">
				<ul class="btn_wrap btn_wrap2">
					<li><a href="list.php?page=<?=$page?>" class="btn btn2">취소</a></li>
					<li><button type="submit" value="등록" class="btn btn1"><span>수정</span></button></li>
				</ul>
			</div>
		</form>
		
    </article>
	<? include "../common/sub_footer.html" ?>
</body>
</html>