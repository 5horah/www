/*----sticky menu----*/
$(document).ready(function(){
    
    //메뉴 클릭 시 해당 위치로 이동
    $('.sub_nav a').click(function(e){
        e.preventDefault();

        var value=0;

        if($(this).hasClass('link1')){  //첫번째 메뉴 버튼을 클릭하면
            value= $('.content_area1').offset().top-200;  // 해당 요소의 상단(top)까지의 거리 
            }else if($(this).hasClass('link2')){
                value= $('.content_area2').offset().top-200; 
                }else if($(this).hasClass('link3')){
                    value= $('.content_area3').offset().top-200; 
                    }  

    $("html,body").stop().animate({"scrollTop":value},1000);});

    //첫번째 서브메뉴 활성화
    $('.sub_nav li:eq(0)').find('a').addClass('afline');
    $('.sub_nav li:eq(0)').find('a').css('color','#1979bd').css('font-weight','500').css('opacity','1');
    $('content_area1').addClass('boxMove');

    //스크롤 좌표 변경 시 스크롤 이벤트
    var smh= $('.visual').height()+350; //sticky menu 고정할 값
    var h1= $('.content_area1').offset().top-1000 ;
    var h2= $('.content_area2').offset().top-1000 ;
    var h3= $('.content_area3').offset().top-1000 ;
    
    $(window).on('scroll',function(){ 

        var scroll = $(window).scrollTop(); //스크롤top의 좌표를 담는다

        //$('.text').text(scroll); //스크롤 좌표의 값을 찍는다.

        //sticky menu 처리
        if(scroll>smh){ 
            $('.nav_box').addClass('navOn'); //스크롤의 거리가 350px 이상이면 서브메뉴 고정
            $('.sub_nav li:eq(0)').find('a').removeClass('afline');
            $('header').hide();
            }else{
                $('.nav_box').removeClass('navOn'); //스크롤의 거리가 350px 보다 작으면 서브메뉴 원래 상태로
                $('header').show();
                $('.sub_nav li:eq(0)').find('a').addClass('afline');

            }

        $('.sub_nav li').find('a').removeClass('spy'); //모든 서브메뉴 비활성화
    
        if(scroll>=h1 && scroll<h2){
            $('.sub_nav li:eq(0)').find('a').addClass('spy');
            $('.sub_nav li:eq(0)').find('a').css('color','#1979bd').css('font-weight','500').css('opacity','1');
            //첫번째 서브메뉴 활성화
            
            $('.content_area1').addClass('boxMove');
            //첫번째 내용 콘텐츠 애니메이션
         }else if(scroll>=h2 && scroll<h3){
            $('.sub_nav li:eq(1)').find('a').addClass('spy');
            $('.sub_nav li:eq(0)').find('a').css('color','#fff').css('font-weight','400').css('opacity','.6');
            //두번째 서브메뉴 활성화
            
            $('.content_area2').addClass('boxMove');
         }else if(scroll>=h3){
            $('.sub_nav li:eq(2)').find('a').addClass('spy');
            $('.sub_nav li:eq(0)').find('a').css('color','#fff').css('font-weight','400').css('opacity','.6');
            //세번째 서브메뉴 활성화
            
            $('.content_area3').addClass('boxMove');
        };

    });
});