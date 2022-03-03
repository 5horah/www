<? session_start(); ?>
<?
    @extract($_POST);
    @extract($_GET);
    @extract($_SESSION);
    /*
    table=$table
    num=$num
    real_name=$real_name(저장)
    show_name=$show_name(실제)
    file_type=$real_type
    
    */


	if(!$userid) {
		echo("
		<script>
	     window.alert('로그인 후 이용해 주세요.')
	     history.go(-1)
	   </script>
		");
		exit;
	}
    $file_path = "./data/".$real_name;
          //$file_path =./data/2019_03_25_10_01_04_1.jpg

    if( file_exists($file_path) ) //파일이 존재하면(file_exists:파일의경로와파일명)   => 입력한 경로에 해당 파일이 있는지 확인  true/false 반환
    { 
        $fp = fopen($file_path,"rb"); //파일포인터 (fopen:파일의경로와파일명 , 모드) => 파일을 열어서 파일이 있는 위치를 가르키는 파일포인터. 모드(r-읽기 w-쓰기 b-이진모드)
                //$fp =>메모리에 올려진 파일의 시작 주소

        if( $file_type ) //익스 등 브라우저마다 다른 다운로드 형식 처리
        { 
                Header("Content-type: application/x-msdownload");
                Header("Content-Length: ".filesize($file_path)); //(filesize:파일의경로와파일명)  => 파일을 용량을 반환한다.
                Header("Content-Disposition: attachment; filename=$show_name"); //파일명(실명)으로 저장
                Header("Content-Transfer-Encoding: binary"); 
                Header("Content-Description: File Transfer"); 

                header("Expires: 0"); 
            } 
        else 
        { 
            if(eregi("(MSIE 5.0|MSIE 5.1|MSIE 5.5|MSIE 6.0)", $HTTP_USER_AGENT)) 
            { 
                Header("Content-type: application/octet-stream"); 
                Header("Content-Length: ".filesize($file_path));     
                Header("Content-Disposition: attachment; filename=$show_name");   
                Header("Content-Transfer-Encoding: binary");   
                Header("Expires: 0");   
            } 
            else 
            { 
                Header("Content-type: file/unknown");     
                Header("Content-Length: ".filesize($file_path)); 
                Header("Content-Disposition: attachment; filename=$show_name"); 
                Header("Content-Description: PHP3 Generated Data"); 
                Header("Expires: 0"); 
            } 
        } 

        if(!fpassthru($fp))  //파일다운로드(fpassthru:파일포인터)  => 파일포인터가 지시하는 현 위치에서 파일을 끝까지 읽어서 출력버퍼에 저장한다.(다운로드)
            fclose($fp); 
	}
?>

  
