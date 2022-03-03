// JavaScript Document
$(document).ready(function () {

    /*리뷰 슬라이드*/
    var position = 0; //최초위치
    var movesize = 438; //이미지 하나의 너비(리뷰)
    $('.review .slide_gallery ul').after($('.review .slide_gallery ul').clone()); //슬라이드 겔러리를 한번 복제
    $('.review .button').click(function (e) { //버튼 클릭 시
        e.preventDefault();

        if ($(this).is('.review .m1')) { //이전버튼 클릭
            if (position == -2628) {
                $('.review .slide_gallery').css('left', 0);
                position = 0;
            }
            position -= movesize; // 400씩 감소
            $('.review .slide_gallery').stop().animate({
                left: position
            }, 'fast', function () {
                if (position == -2628) {
                    $('.review .slide_gallery').css('left', 0);
                    position = 0;
                }
            });
        } else if ($(this).is('.review .m2')) { //다음버튼 클릭
            if (position == 0) { // 처음에 다음버튼을 클릭하면 빠르게 옮겨주기(이전 버튼은 원래 있으니 괜춘)
                $('.review .slide_gallery').css('left', -2628);
                position = -2628;
            }
            position += movesize; // 150씩 증가
            $('.review .slide_gallery').stop().animate({
                left: position
            }, 'fast', function () { // 포문 : 다음버튼 클릭했을 때 이미지 위치가 0일경우 옮겨주기				
                if (position == 0) {
                    $('.review .slide_gallery').css('left', -2628);
                    position = -2628;
                }
            });
        }
    });
    /*프로모션 슬라이드*/
    var position2 = 0; //최초위치
    var movesize2 = 370; //이미지 하나의 너비
    $('.promotion .slide_gallery2 ul').after($('.promotion .slide_gallery2 ul').clone()); //슬라이드 겔러리를 한번 복제
    $('.promotion .button').click(function (e) { //버튼 클릭 시
        e.preventDefault();

        if ($(this).is('.promotion .m1')) { //이전버튼 클릭
            if (position2 == -1850) {
                $('.promotion .slide_gallery2').css('left', 0);
                position2 = 0;
            }
            position2 -= movesize2; // 400씩 감소
            $('.promotion .slide_gallery2').stop().animate({
                left: position2
            }, 'fast', function () {
                if (position2 == -1850) {
                    $('.promotion .slide_gallery2').css('left', 0);
                    position2 = 0;
                }
            });
        } else if ($(this).is('.promotion .m2')) { //다음버튼 클릭
            if (position2 == 0) { // 처음에 다음버튼을 클릭하면 빠르게 옮겨주기(이전 버튼은 원래 있으니 괜춘)
                $('.promotion .slide_gallery2').css('left', -1850);
                position2 = -1850;
            }
            position2 += movesize2; // 150씩 증가
            $('.promotion .slide_gallery2').stop().animate({
                left: position2
            }, 'fast', function () { // 포문 : 다음버튼 클릭했을 때 이미지 위치가 0일경우 옮겨주기				
                if (position2 == 0) {
                    $('.promotion .slide_gallery2').css('left', -1850);
                    position2 = -1850;
                }
            });
        }
    });
});