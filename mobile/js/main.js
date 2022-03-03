$(document).ready(function(){
    /*스크롤 이벤트*/

    // var h1= $('#content .service').offset().top -800;
    var h2= $('#content .members').offset().top -800;
    var h3= $('#content .promotion').offset().top -800;
    // var h4= $('#content .help').offset().top -800;

    var cnt1 = false

    $(window).on('scroll',function(){ //스크롤의 좌표가 변하면.. 스크롤 이벤트
        var scroll = $(window).scrollTop(); //스크롤top의 좌표를 담는다
   
        //$('.text').text(scroll);  //스크롤 좌표의 값을 찍는다.
     
        // if(scroll>=300 && scroll<h1){  //스크롤의 거리의 범위를 처리
        //     $('#content .business').addClass('boxMove');  //첫번째 내용 콘텐츠 애니메이션
            
        // }else if(scroll>=h1 && scroll<h2){            
        //     $('#content .service').addClass('boxMove');

        if(scroll>=h2 && scroll<h3){            
            /*서비스 > 그래프 동적 코드*/
            if(cnt1==false){
            $('.second.circle').circleProgress({
                value: 0.93
            }).on('circle-animation-progress', function(event, progress) {
                $(this).find('strong').html(parseInt(93 * progress) + '<i>%</i>');
            });
            cnt1=true;
            }   
        }
        // }else if(scroll>=h3 && scroll<h4){            
        //     $('#content .promotion').addClass('boxMove1');

        // }else if(scroll>=h4){            
        //     $('#content .help').addClass('boxMove2');
        // }
    });

    /*서비스 슬라이드*/
    var swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        pagination: {
          el: ".swiper-pagination",
        },
      });
    /* 서비스 컨턴츠 tab */
    var cnt=2;  //탭메뉴 개수 ***
    $('.service .tab_content .swiper').fadeOut('');

    $('.service .tab_content .swiper:eq(0)').fadeIn('slow'); //첫번째 탭 컨텐츠 노출    
    $('.service .tab_menu .tab1').addClass('afline'); //첫번째 탭 활성화
            
    $('.service .tab_menu .tab').click(function(e){ //탭 클릭 시
        e.preventDefault();
        var ind = $(this).index('.tab_menu .tab'); //탭 클릭 시
        
        $('.service .tab_content .swiper').hide(); //컨텐츠 미노출
        $('.service .tab_content .swiper:eq('+ind+')').fadeIn('slow'); //클릭한 탭에 대한 컨텐츠만 노출

        $('.service .tab_menu li a').removeClass('afline'); // 탭 활성화 클래스 삭제
        $(this).addClass('afline'); //클릭한 탭만 활성화 클래스

    });
    /*프로모션*/
    var swiper = new Swiper(".mySwiper1", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    /*----popup----*/
    $('.promotion .swiper-slide a').click(function(e){
      e.preventDefault();
      // var txt ='';
      var ind = $(this).index('.promotion .swiper-slide a');  // 0 1 2 3
      var arr = ['<span>세스코 Food Safety</span>믿고먹는 세상의 시작, 화이트 세스코_60초','<span>세스코 Water Safety</span>마시는 과학 물의 스타일이되다. 스마트핏 직수 정수기','<span>세스코 Air Safety</span>기필코! 결단코! 한사코! 세스코가 당신의 공기를 지켜드립니다.']

      $('#content .modal_box2').fadeIn('fast');
      $('#content .popup').fadeIn('slow');

      $('#content .popup video source').attr('src','images/main/videoplay'+(ind+1)+'.mp4');
      $('#content .popup video').attr('poster','./images/main/promotion_ad0'+(ind+1)+'x2.png');
      $('#content .popup p').html(arr[ind]);
    });

    $('.close_btn,#content .modal_box2').click(function(e){
      e.preventDefault();
      $('#content .modal_box2').hide();
      $('#content .popup').hide();
    });

});