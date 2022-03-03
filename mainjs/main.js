$(document).ready(function () {

    /*스크롤 이벤트*/
    var h1 = $('#content .service').offset().top - 600;
    var h2 = $('#content .members').offset().top - 100;
    var h3 = $('#content .review').offset().top - 10;
    var h4 = $('#content .promotion').offset().top - 10;
    var h5 = $('#content .notice').offset().top - 0;

    var cnt1 = false

    $(window).on('scroll', function () { //스크롤의 좌표가 변하면.. 스크롤 이벤트
        var scroll = $(window).scrollTop(); //스크롤top의 좌표를 담는다
        $('.text').text(scroll); //스크롤 좌표의 값을 찍는다.

        if (scroll >= 300 && scroll < h1) { //스크롤의 거리의 범위를 처리
            $('#content .business_topic').addClass('boxMove'); //첫번째 내용 콘텐츠 애니메이션
            $('#content .business li').addClass('boxMove');
        } else if (scroll >= h1 && scroll < h2) {
            $('#content .service_content').addClass('boxMove');
        } else if (scroll >= h2 && scroll < h3) {
            $('#content .members').addClass('boxMove');
            /*서비스 > 그래프 동적 코드*/
            if (cnt1 == false) {
                $('.second.circle').circleProgress({
                    value: 0.93
                }).on('circle-animation-progress', function (event, progress) {
                    $(this).find('strong').html(parseInt(93 * progress) + '<i>%</i>');
                });
                cnt1 = true;
            }
        } else if (scroll >= h3 && scroll < h4) {
            $('#content .review_topgroup').addClass('boxMove1');
            $('#content .review .slide_gallerybox').addClass('boxMove1_1');
        } else if (scroll >= h4 && scroll < h5) {
            $('#content .promotion_topgroup').addClass('boxMove2');
            $('#content .promotion .slide_gallerybox2').addClass('boxMove2_1');
        } else if (scroll >= h5) {
            $('#content .notice').addClass('boxMove');
        }
    });

    /* 비즈니스영역 마우스 오버 시 효과*/
    $('.business li:eq(0)').addClass('lihover');
    $('#content .business li').each(function (index) { // index=0 1 2 3
        $(this).mouseover(function (e) { //각각의 탭메뉴를 마우스 오버하면... 
            e.preventDefault(); // <a> href="#" 값을 강제로 막는다 
            $('.business li').removeClass('lihover'); //모두 비활성화
            $(this).addClass('lihover'); // 클릭한 해당 탭메뉴만 활성화
        });
    });


    /* 서비스 컨턴츠 tab */
    var cnt = 2; //탭메뉴 개수 ***
    $('.tab_content .management_solution').fadeIn('slow'); //첫번째 탭 컨텐츠 노출    
    $('.tab_groub .tab1').addClass('afline'); //첫번째 탭 활성화
    $('#content .tab_content ul li:eq(1)').addClass('lihover'); //컨텐츠 마우스 오버 효과
    $('.tab_groub .tab').click(function (e) { //탭 클릭 시
        e.preventDefault();
        var ind = $(this).index('.tab_groub .tab'); //탭 클릭 시

        $('.tab_content ul').hide(); //컨텐츠 미노출
        $('.tab_content ul li').removeClass('lihover'); //컨텐츠 마우스 오버 효과 X
        $('.tab_content ul:eq(' + ind + ')').fadeIn('slow'); //클릭한 탭에 대한 컨텐츠만 노출
        $('.tab_content ul:eq(' + ind + ') li:eq(1)').addClass('lihover'); //컨텐츠 마우스 오버 효과
        $('.tab_groub li a').removeClass('afline'); // 탭 활성화 클래스 삭제
        $(this).addClass('afline'); //클릭한 탭만 활성화 클래스
    });
    /*탭 오버효과*/
    $('.tab_groub .tab').each(function (index) { // index=0 1
        $(this).mouseover(function (e) { //각각의 탭메뉴를 마우스 오버하면... 
            e.preventDefault(); // <a> href="#" 값을 강제로 막는다 

            $('.tab_groub .tab').removeClass('tabhover'); //모두 비활성화
            $(this).addClass('tabhover'); // 클릭한 해당 탭메뉴만 활성화
        });
        $(this).mouseout(function (e) { //각각의 탭메뉴를 마우스 아웃하면... 
            e.preventDefault(); // <a> href="#" 값을 강제로 막는다 

            $('.tab_groub .tab').removeClass('tabhover'); //모두 비활성화
            $(this).removeClass('tabhover'); // 클릭한 해당 탭메뉴만 활성화
        });
    });
    /*컨텐츠 마우스오버 시 효과*/
    $('#content .tab_content ul li').each(function (index) { // index=0 1 2
        $(this).mouseover(function (e) { //각각의 탭메뉴를 마우스 오버하면... 
            e.preventDefault(); // <a> href="#" 값을 강제로 막는다 

            $('.tab_content ul li').removeClass('lihover'); //모두 비활성화
            $(this).addClass('lihover'); // 클릭한 해당 탭메뉴만 활성화
        });
    });

});