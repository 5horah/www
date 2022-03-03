$(document).ready(function () {
    // 스와이프
    var screenSize, screenHeight;
    var screenSize = $(window).width(); //디바이스의 해상도(폭)

    function screen_size() {
        screenSize = $(window).width(); //스크린의 너비
        screenHeight = $(window).height(); //스크린의 높이  

        if (screenSize > 1280) { //와이드 pc
            var swiper = new Swiper(".mySwiper", {
                slidesPerView: 3,
                spaceBetween: 32,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                }
            });
        } else if (screenSize > 1024, screenSize>640) { //일반pc
            var swiper = new Swiper(".mySwiper", {
                slidesPerView: 2,
                spaceBetween: 24,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                }
            });
        } else { //모바일
            var swiper = new Swiper(".mySwiper", {
                slidesPerView: 1,
                spaceBetween: 20,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                }
            });
        }
    }
    screen_size(); //최초 실행시 호출
    $(window).resize(function () { //웹브라우저 크기 조절시 반응하는 이벤트 메소드()
        screen_size();
    });

    // 유튜브 팝업
    $('.popup-youtube').magnificPopup({
        disableOn: 320,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: true,

        fixedContentPos: false
    });

    /*탭*/
    var cnt=2;  //탭메뉴 개수 ***
    $('.tab_content .conlist').fadeOut('');

    $('.tab_content .conlist:eq(0)').fadeIn('slow'); //첫번째 탭 컨텐츠 노출    
    $('.tab_menu .tab1').addClass('click'); //첫번째 탭 활성화
            
    $('.tab_menu .tab').click(function(e){ //탭 클릭 시
        e.preventDefault();
        var ind = $(this).index('.tab_menu .tab'); //탭 클릭 시
        
        $('.tab_content .conlist').hide(); //컨텐츠 미노출
        $('.tab_content .conlist:eq('+ind+')').fadeIn('slow'); //클릭한 탭에 대한 컨텐츠만 노출

        $('.tab_menu li a').removeClass('click'); // 탭 활성화 클래스 삭제
        $(this).addClass('click'); //클릭한 탭만 활성화 클래스

    });

    // 호버 시 이미지 변경
    $(function() { 
        $(".tab_content .conlist>ul>li img").hover(function(){ 
            $(this).attr("src", $(this).attr("src").replace(".png", "_2.png"));
            $(this).css('opacity','.5').stop().fadeTo('slow',1) ; 
        }, function(){ 
            $(this).attr("src", $(this).attr("src").replace("_2.png", ".png")); 
            $(this).css('opacity','.5').stop().fadeTo('slow',1) ; 
        }); 
    });
});