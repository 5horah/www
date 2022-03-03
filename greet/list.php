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
	<title>공지사항</title>
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous">
	<link rel="stylesheet" href="../common/css/common.css">
	<link rel="stylesheet" href="../sub4/common/css/sub4common.css">
	<link rel="stylesheet" href="./css/greet.css">
	<?
		include "../lib/dbconn.php";

		//화면에 표시되는 글수
		if (!$scale)
		{
			$scale=10;
		}
		
		//검색 여부에 따른 리스트 출력
		if ($mode=="search") //검색했을때
		{
			if(!$search)
			{
				echo("
				<script>
					window.alert('검색어를 입력해 주세요!');
					history.go(-1);
				</script>
				");
				exit;
			}
			$sql = "select * from greet where $find like '%$search%' order by num desc"; //검색어 검색
		}
		else //검색 안했을때
		{
			$sql = "select * from greet order by num desc";
		}

		$result = mysql_query($sql, $connect);
		$total_record = mysql_num_rows($result); // 전체 글 수

		// 전체 페이지 수($total_page) 계산 
		if ($total_record % $scale == 0)
		{   
			$total_page = floor($total_record/$scale); 
		}     
		else
		{
			$total_page = floor($total_record/$scale) + 1; 
		}
		//리스트 개수
		if (!$page) // 페이지번호($page)가 0 일 때
		{                 
			$page = 1; // 페이지 번호를 1로 초기화
		}

		// 표시할 페이지($page)번호에 따라 $start 계산  
		$start = ($page - 1) * $scale;      

		$number = $total_record - $start;
	?>

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
            <h3>NOTICE LIST</h3>
        </div>
		<div class="search">
			<form  name="board_form" method="post" action="list.php?mode=search" class="search_form"> 
				<div id="list_search">	
					<div id="list_search1">
						<label class="hidden" for="find">검색 카테고리</label>
						<select name="find" id="find"> 
							<option value='subject'>제목</option>
							<option value='content'>내용</option>
							<option value='nick'>닉네임</option>
							<option value='name'>이름</option>
						</select>
					</div>
					<div id="list_search2">
						<input type="text" name="search" id="search" value="<?= $search ?>" placeholder="검색어를 입력해주세요.">
					</div>
					<ul id="list_search3" class="btn_wrap btn_wrap2">
						<li><button type="submit" value="검색" class="btn btn1">검색</button></li>
						<li><button type="button" value="검색" class="btn btn2" onclick="location.href='list.php'">초기화</button></li>
					</ul>
				</div>
			</form>
		</div>

		<div class="tb_top">
			<p>총 <span><?= $total_record ?></span> 개의 소식이 있습니다.</p>
			<select name="scale" class="scale" onchange="location.href='list.php?scale='+this.value">
				<option value=''>보기</option>
				<option value='5'>5</option>
				<option value='10'>10</option>
				<option value='15'>15</option>
				<option value='20'>20</option>
			</select>
		</div>

		<table class="list_content">
			<caption><span class="hidden">공지사항 목록</span></caption>
			<colgroup>
				<col style="width:10%">
				<col style="width:55%">
				<col style="width:10%">
				<col style="width:15%">
				<col style="width:10%">
			</colgroup>
			<thead> 
				<tr> 
					<th scope="col" id="list_title1">No</th> 
					<th scope="col" id="list_title2">제목</th> 
					<th scope="col" id="list_title3">작성자</th> 
					<th scope="col" id="list_title4">등록일</th> 
					<th scope="col" id="list_title5">조회</th> 
				</tr> 
			</thead>
			<tbody>
				<?		
					for ($i=$start; $i<$start+$scale && $i < $total_record; $i++)                    
					{
						mysql_data_seek($result, $i); //가져올 레코드로 위치(포인터) 이동  
						$row = mysql_fetch_array($result); // 하나의 레코드 가져오기
						$item_num     = $row[num];
						$item_id      = $row[id];
						$item_name    = $row[name];
						$item_nick    = $row[nick];
						$item_hit     = $row[hit];
						$item_date    = $row[regist_day];
						$item_date = substr($item_date, 0, 10);  //2022-02-21(10자만 가지고 오기)
						$item_subject = str_replace(" ", "&nbsp;", $row[subject]); //공백 문자는 태그로 바꾸기
				?>
				<tr> 
					<td class="list_item1"> <?= $number ?> </td> 
					<td class="list_item2"> <a href="view.php?num=<?=$item_num?>&page=<?=$page?>"><?= $item_subject ?></a> </td> 
					<td class="list_item3"> <?= $item_nick ?> </td> 
					<td class="list_item4"> <?= $item_date ?> </td> 
					<td class="list_item5"> <?= $item_hit ?> </td> 
				</tr> 
			</tbody>
			<?
					$number--;
				}
			?>
		</table>

		<!-- 하단 버튼 -->
		<div id="page_button">
			<!-- 목록/글쓰기 버튼 -->
			<ul class="btn_wrap btn_wrap2 btn_write">
				<li><a href="list.php" class="btn btn2">목록</a></li>
				<? 
					if($userid) //만약 로그인 상태라면
					{
				?>
				<li><a href="write_form.php" class="btn btn1">글쓰기</a></li>

				<?
					}
				?>
			</ul>
			<!-- 페이지 버튼 -->
			<div id="page_num"> 
				<i class="fas fa-angle-double-left"></i><span class="hidden">이전</span>
				<?
					// 게시판 목록 하단에 페이지 링크 번호 출력
					for ($i=1; $i<=$total_page; $i++)
					{
						if ($page == $i)     // 현재 페이지 번호 링크 안함
						{
							echo "<b> $i </b>";
						}
						else
						{ 
							if($mode=="search") //검색했을때
							{ 
								echo "<a href='list.php?page=$i&scale=$scale&mode=search&find=$find&search=$search'> $i </a>"; //3페이지 번호랑 스케일, 검색 값을 다 넘겨줌
							}
							else //검색 안했을때
							{ 
								echo "<a href='list.php?page=$i&scale=$scale'> $i </a>"; //페이지 번호랑 스케일만 넘겨줌
							}
						}      
					}
				?>			
				<i class="fas fa-angle-double-right"></i><span class="hidden">다음</span>
			</div>

		</div> <!-- end of page_button -->
		
    </article>
	<? include "../common/sub_footer.html" ?>
</body>
</html>