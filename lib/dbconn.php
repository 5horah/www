<?  
    //db접속코드 인크루드

    
    $connect=mysql_connect( "localhost", "www", "1234") or  
    die( "SQL server에 연결할 수 없습니다."); 
    mysql_select_db("www_db",$connect);


    // $connect=mysql_connect( "localhost", "o5horah", "q1w2e3r4") or  
    // die( "SQL server에 연결할 수 없습니다."); 
    // mysql_select_db("o5horah",$connect);

?>
