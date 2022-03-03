// JavaScript Document
$(document).ready(function() {
    var position=-0;  //최초위치
    var movesize=298; //이미지 하나의 너비

    // var timeonoff;
   
    $('.slide_gallery ul').after($('.slide_gallery ul').clone());

//     //자동 움직임(클릭하면 죽임)
//     timeonoff= setInterval(function () {
//            position-=movesize;  // 150씩 감소
//        $('.slide_gallery').stop().animate({left:position}, 'fast',
//             function(){							
//            if(position==-750){
//               $('.slide_gallery').css('left',0);
//               position=0;
//            }
//        });
//    }, 2000);
   
    
    
        //슬라이드 겔러리를 한번 복제
 
  $('.button').click(function(e){
     e.preventDefault();

    //  clearInterval(timeonoff);
     
     if($(this).is('.m1')){ //이전버튼 클릭
          if(position==-1788){
              $('.slide_gallery').css('left',-0);
               position=-0;
           }
         
          position-=movesize;  // 150씩 감소
              $('.slide_gallery').stop().animate({left:position}, 'fast',
                function(){							
                    if(position==-1788){
                        $('.slide_gallery').css('left',-0);
                        position=-0;
                    }
                });
     }else if($(this).is('.m2')){ //다음버튼 클릭
           if(position==-0){ // 처음에 다음버튼을 클릭하면 빠르게 옮겨주기(이전 버튼은 원래 있으니 괜춘)
                $('.slide_gallery').css('left',-1788);
                position=-1788;
            }
 
            position+=movesize; // 150씩 증가
            $('.slide_gallery').stop().animate({left:position}, 'fast',
                function(){ // 포문 : 다음버튼 클릭했을 때 이미지 위치가 0일경우 옮겨주기				
                    if(position==-0){
                        $('.slide_gallery').css('left',-1788);
                        position=-1788;
                    }
                });
      }
   });

   //살리고싶으면 esefr
});

