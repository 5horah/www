// JavaScript Document

$(document).ready(function() {

  var timeonoff;   //타이머 처리
  var imageCount=3;   //이미지 총개수
  var cnt=1;   //이미지 순서 1 2 3 4 5 1 2 3 4 5....(현재 이미지 순서)
  var onoff=true; // true=타이머 동작중 , false=타이머 동작중지
  
  $('.btn1').css('background','rgba(25, 121, 189, 1)'); //첫번째 dock 색상변경
  
  $('.flexslider .link1').fadeIn('slow'); //첫번째 이미지 노출

  function moveg(){
    cnt++;  //카운트 1씩 증가, 5일 경우 다시 초기화 0  1 2 3 4 5 1 2 3 4 5
     
   $('.flexslider li').hide(); //모든 이미지를 보이지 않게 처리
   $('.flexslider .link'+cnt).fadeIn('slow'); //자신과 관계있는 이미지만 노출
                             
    $('.mbutton').css('background','rgba(255, 255, 255, 0.5)'); // dock 버튼 원래 색상
    $('.btn'+cnt).css('background','rgba(25, 121, 189, 1)'); // 관계있는 dock 버튼 색상변경

     if(cnt==imageCount)cnt=0;  //카운트 초기화 0
   }
   
  timeonoff= setInterval( moveg , 4000);// 타이머를 동작 1~5이미지를 순서대로 자동 처리
    //var 변수 = setInterval( function(){처리코드} , 4000);  //정보를 담아놓는다
    //clearInterval(변수); -> 정보 처리역활

 $('.mbutton').click(function(event){  //각각의 버튼 클릭시
     var $target=$(event.target); //클릭한 버튼 $target == $(this)
     clearInterval(timeonoff); //타이머 중지     
 
    //  for(var i=1;i<=imageCount;i++){
    //      $('.gallery .link'+i).hide(); //모든 이미지 미노출
    //    } 
    $('.flexslider li').hide(); //모든 이미지 미노출

    if($target.is('.btn1')){  //첫번째 버튼 클릭 여부
       cnt=1;  //클릭한 해당 카운트 담기
    }else if($target.is('.btn2')){  //두번째 버튼 클릭 여부
       cnt=2; 
    }else if($target.is('.btn3')){ 
       cnt=3; 
    }

    $('.flexslider .link'+cnt).fadeIn('slow');  //자기 자신 이미지만 노출
    
    // for(var i=1;i<=imageCount;i++){
    //   $('.btn'+i).css('background','#00f'); // 모든 dock 버튼 원래 색상
    //   $('.btn'+i).css('width','16');
    // }
    $('.mbutton').css('background','rgba(255, 255, 255, 0.5)'); // 모든 dock 버튼 원래 색상
    $('.btn'+cnt).css('background','rgba(25, 121, 189, 1)');// 관련 dock버튼 변경 색상
    
    if(cnt==imageCount)cnt=0;  //카운트 초기화
   
    timeonoff= setInterval( moveg , 4000); //타이머 부활
   
    if(onoff==false){ //중지 상태 유무
          onoff=true; //동작
    }
  });

});


