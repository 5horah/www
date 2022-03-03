<? 
	session_start(); 
    @extract($_POST);
    @extract($_GET);
    @extract($_SESSION);
    //새글쓰기 =>  $table
	//수정글쓰기 => $table, $num, $page, $modify

	include "../lib/dbconn.php";

	if ($mode=="modify") //수정 글쓰기면
	{
		$sql = "select * from $table where num=$num";
		$result = mysql_query($sql, $connect);

		$row = mysql_fetch_array($result);       
	
		$item_subject = $row[subject];
		$item_content = $row[content];

		$item_file_0 = $row[file_name_0];
		$item_file_1 = $row[file_name_1];
		$item_file_2 = $row[file_name_2];

		$copied_file_0 = $row[file_copied_0];
		$copied_file_1 = $row[file_copied_1];
		$copied_file_2 = $row[file_copied_2];
	}
?>
<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>고객리뷰 글쓰기</title>
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous">
	<link rel="stylesheet" href="../common/css/common.css">
	<link rel="stylesheet" href="../sub4/common/css/sub4common.css">
	<link rel="stylesheet" href="./css/concert.css">
	<script>
		function check_input()
			{
			if (!document.board_form.subject.value)
			{
				alert("제목을 입력하세요!");    
				document.board_form.subject.focus();
				return;
			}
			if (!document.board_form.content.value)
			{
				alert("내용을 입력하세요!");    
				document.board_form.content.focus();
				return;
			}
			document.board_form.submit();
		}

		// 파일 업로드 

		$(".file").on("change", function(){
	 
			var filename = $(".file").val();

			$(".file_info").val(fileName);
		});

	</script>
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
            <li class="current"><a href="../concert/list.php">고객리뷰</a></li>
            <li><a href="../sub4/sub4_2.html">세스코 지식인</a></li>
            <li><a href="../sub4/sub4_3.html">홍보센터</a></li>
            <li><a href="../greet/list.php">공지사항</a></li>
        </ul>
    </div>

	<article id="content">
		<div class="title_area">
		<div class="line_map"><i class="fas fa-home"></i><span class="hidden">home</span> &gt; 세스코광장 &gt; <strong>고객리뷰</strong></div>
			<h2>고객리뷰</h2>
            <p>세스코 서비스에 관한 <span>생생한 이야기</span>를 확인할 수 있습니다.</p>
        </div>

		<div class="content_toptopic">
            <h3>REVIEW WRITING</h3>
        </div>

		<?
			if($mode=="modify") //수정글쓰기 mode=modify&num=<?=$num~~
			{
		?>
			<form  name="board_form" method="post" class="board_form" action="insert.php?mode=modify&num=<?=$num?>&page=<?=$page?>&table=<?=$table?>" enctype="multipart/form-data"> 
		<?
			}
			else //새글쓰기 table=<?=$table~~
			{
		?>
			<form  name="board_form" method="post" class="board_form" action="insert.php?table=<?=$table?>" enctype="multipart/form-data"> 
		<?
			}
		?>
		<div id="write_form">

			<div class="row" id="write_row1">
				<label for="nick">작성자</label>
				<input type="text" name="nick" id="nick" class="disabled_input " value="<?=$usernick?>" disabled>
			</div>		

			<div class="row" id="write_row2">
				<label for="subject">제목</label>
				<input type="text" name="subject" id="subject" value="<?=$item_subject?>" placeholder="제목을 입력해주세요.">
			</div>
			<div class="row" id="write_row3">
				<label for="text_content">내용</label>
				<textarea name="content" id="text_content" class="text_content" placeholder="내용을 입력해주세요."><?=$item_content?></textarea>
			</div>

			<div class="row" id="write_row4">
				<label for="file1">이미지파일1</label>
				<input type="file" name="upfile[]" id="file1">
				<? 	
				if ($mode=="modify" && $item_file_0)
				{
				?>
				<div class="delete_ok">
					<i class="fas fa-file-image"></i><span class="hidden">이미지 파일아이콘</span> <?=$item_file_0?>
					<input type="checkbox" id="checkbox" name="del_file[]" value="0">
					<label for="checkbox">파일삭제</label>
				</div>
				<?
					}
				?>
			</div>
			<div class="row" id="write_row5">
				<label for="file2">이미지파일3</label>
				<input type="file" name="upfile[]" id="file2">
			</div>
			<? 	
				if ($mode=="modify" && $item_file_1)
				{
			?>
			<div class="delete_ok">
				<?=$item_file_1?> 파일이 등록되어 있습니다.
				<input type="checkbox" name="del_file[]" value="1"> 삭제
			</div>
			<?
				}
			?>
			<div class="row" id="write_row6">
				<label for="file3">이미지파일3</label>
				<input type="file" name="upfile[]" id="file3">
			</div>
			<? 	
				if($mode=="modify" && $item_file_2)
				{
			?>
			<div class="delete_ok">
				<?=$item_file_2?> 파일이 등록되어 있습니다. 
				<input type="checkbox" name="del_file[]" value="2"> 
				삭제
			</div>
			<?
				}
			?>
		</div>
		
		<div id="page_button" >
			<ul class="btn_wrap btn_double center_btn" id="write_button">
			<?
			if($mode=="modify") //수정글쓰기 mode=modify&num=<?=$num~~
			{
			?>
				<li><a href="list.php?table=<?=$table?>&page=<?=$page?>" class="btn btn_nomal">취소</a></li>
				<li><a href="#" role="button" onclick="check_input()" class="btn btn_solid">수정</a></li>
			<?
			}
			else //새글쓰기 table=<?=$table~~
			{
			?>
				<li><a href="list.php?table=<?=$table?>&page=<?=$page?>" class="btn btn_nomal">취소</a></li>
				<li><a href="#" role="button" onclick="check_input()" class="btn btn_solid">등록</a></li>
			<?
				}
			?>
			</ul>
		</div>
	</form>

	</article>
	<? include "../common/sub_footer.html" ?>

</body>
</html>

