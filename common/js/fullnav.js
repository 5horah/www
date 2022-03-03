
$(document).ready(function() {

    var smh=$('.visual').height();      //비주얼 이미지의 높이 리턴 960px
    var on_off=false;       //false(안오버)  true(오버)  
   

    // header 마우스 오버 효과
    $('#headerArea').mouseenter(function(){
        $(this).css('background','#fff');
        $('.dropdownmenu li a').css('color','#333'); 
        $('li.topmenu_button01 a').css('color','#333');
        $('#headerArea .inner_section .top_menu li').addClass('af');
        $('.dropdownmenu ul li a').css('color','#666');
        on_off=true;
    });
    
    $('#headerArea').mouseleave(function(){
        var scroll = $(window).scrollTop();     //스크롤의 거리

        if(scroll>=0 && scroll<smh-50 ){
            $(this).css('background','rgba(0, 0, 0, .5)'); 
            $('.dropdownmenu li a').css('color','#fff');
            $('.topmenu_button01 a').css('color','#fff');
            $('#headerArea .inner_section .top_menu li').removeClass('af');
        }else if(scroll>smh-50){
            $(this).css('background','#fff'); 
            $('.dropdownmenu li a').css('color','#333');
            $('.topmenu_button01 a').css('color','#333');
            $('#headerArea .inner_section .top_menu li').addClass('af');
        }
        on_off=false;    
    });


    //스크롤 시 header 효과
      $(window).on('scroll',function(){     //스크롤 거리 발생
            var scroll = $(window).scrollTop();     //스크롤 거리 리턴 함수
            
           // console.log(scroll);      스크롤 길이 확인 정보 로그

           if(scroll>smh-50){       //스크롤 거리 560
               $('#headerArea').css('background','#fff');
               $('.dropdownmenu li a').css('color','#333');
               $('.topmenu_button01 a').css('color','#333');
               $('#headerArea .inner_section .top_menu li').addClass('af');
            }else{       //스크롤 거리 0 (마우스올리지않음)
              if(on_off==false){
                   $('#headerArea').css('background','rgba(0, 0, 0, .5)');
                   $('.dropdownmenu li a').css('color','#fff');
                   $('.topmenu_button01 a').css('color','#fff');
                   $('#headerArea .inner_section .top_menu li').removeClass('af');
                }
           }; 
           
        });
  

    //hrader 2depth 열기/닫기
    $('ul.dropdownmenu').hover(     
       function() { 
          $('ul.dropdownmenu li.menu ul').fadeIn('normal',function(){       //2depth 열기
            $(this).stop();
            });     
          $('#headerArea').animate({height:390},'fast').clearQueue();},function(){      //2depth닫기
            $('ul.dropdownmenu li.menu ul').hide();       
            $('#headerArea').animate({height:210},'fast').clearQueue();
     });


     //1depth 효과
     $('ul.dropdownmenu li.menu').hover(
       function() { 
           $('.depth1',this).css('color','#1979bd');
           $('ui.dropdownmenu li a',this).css('color','#1979bd');
       },function() {
          $('.depth1',this).css('color','#333');
          $('.depth1 li a',this).css('color','#666');
     });     


     //2depth효과
     $('.dropdownmenu ul li').hover(
        function() { 
            $('a',this).css('color','#1979bd');
        },function() {
           $('a',this).css('color','#666');
    });  


    //top_menu효과
    $('.top_menu li.topmenu_button01').hover(
        function() { 
            $('a',this).css('color','#1979bd');
        },function() {
           $('a',this).css('color','#333');
    }); 

    
     //tab 처리
     $('ul.dropdownmenu li.menu .depth1').on('focus', function () {        
        $('ul.dropdownmenu li.menu ul').slideDown('normal');
        $('#headerArea').animate({height:390},'fast').clearQueue();
     });

    $('ul.dropdownmenu li.m6 li:last').find('a').on('blur', function () {        
        $('ul.dropdownmenu li.menu ul').slideUp('fast');
        $('#headerArea').animate({height:210},'normal').clearQueue();
    });


    //상단 이동
    $('.topMove').hide();
           
    $(window).on('scroll',function(){   //스크롤 값의 변화가 생기면
         var scroll = $(window).scrollTop();    //스크롤의 거리

         //$('.text').text(scroll); 스크롤 길이 정보 텍스트

         if(scroll>500){    //500이상의 거리가 발생되면
             $('.topMove').fadeIn('slow');  //top노출
         }else{
             $('.topMove').fadeOut('fast'); //top미노출
         }
    });

    $('.topMove').click(function(e){    //아이콘 클릭 시 상단으로 스르륵 이동
        e.preventDefault();
        $("html,body").stop().animate({"scrollTop":0},1000); 
    });


     //family site
	$('.footer_family .arrow').toggle(function(){   //클릭 시 > list 노출 > 미노출
        $('.footer_family .family_list').slideDown('fast');
        $('.footer_family i').removeClass('.fas fa-chevron-up');
        $('.footer_family i').addClass('.fas fa-chevron-down');
	},function(){
		$('.footer_family .family_list').slideUp('fast');	
        $('.footer_family i').removeClass('.fas fa-chevron-down');
        $('.footer_family i').addClass('.fas fa-chevron-up');	
	});
        //family site tab키 처리     
        $('.footer_family .arrow').on('focus', function () {    
        $('.footer_family .family_list').slideDown('fast');	
        $('.footer_family i').removeClass('.fas fa-chevron-up');
        $('.footer_family i').addClass('.fas fa-chevron-down');
                
        });
        $('.footer_family .family_list li:last a').on('blur', function () {        
        $('.footer_family .family_list').slideUp('fast');
        $('.footer_family i').removeClass('.fas fa-chevron-up');
        $('.footer_family i').addClass('.fas fa-chevron-down');
        });  


});