<?
    @extract($_POST);
    @extract($_GET);
    @extract($_SESSION);
/*

table=$table (게시글 테이블) (get)
num=$item_num (게시글 글번호) (get)
ripple_num=$ripple_num(댓글 글번호)(get)

*/

      include "../lib/dbconn.php";

      $sql = "delete from free_ripple where num=$ripple_num";
      mysql_query($sql, $connect);
      mysql_close();

      echo "
	   <script>
	    location.href = 'view.php?table=$table&num=$num';
	   </script>
	  ";
    // 삭제 후 게시글에 다시 와야하기 떄문에 table=$table&num=$num 필요
?>
