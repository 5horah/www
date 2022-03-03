$(document).ready(function () {
    /*탭*/
    var cnt=4;  //탭메뉴 개수 ***
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
})
