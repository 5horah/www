$(document).ready(function() {

    /*탭 형식 셀렉트박스*/
    var cnt=2;  //탭메뉴 개수 ***
    $('.tab_content .contlist').fadeOut('');
    $('.tab_content .contlist:eq(0)').fadeIn('slow'); //첫번째 탭 컨텐츠 노출   
    $('.tab_menu .listname').html('해충관련문의')

    $('.tab_menu .tab').click(function(e){ //탭 클릭 시
        e.preventDefault();
        var ind = $(this).index('.tab_menu .tab'); //탭 클릭 시
        var arr = ['해충관련문의','서비스 및 비용문의','회사문의','기타']
        $('.tab_content .contlist').hide(); //컨텐츠 미노출
        $('.tab_content .contlist:eq('+ind+')').fadeIn('slow'); //클릭한 탭에 대한 컨텐츠만 노출    
        $('.tab_menu .listname').html(arr[ind])

    });

    // 리스트 노출
        $('.tab_menu').toggle(function(){ //클릭 시 하위 리스트 노출
        $('.tab_menu ul').slideDown('fast');
        $('.tab_menu p i').removeClass('.fas fa-chevron-down');
        $('.tab_menu p i').addClass('.fas fa-chevron-up');
        },function(){ //클릭 시 하위 리스트 미노출
            $('.tab_menu ul').slideUp('fast');	
            $('.tab_menu p i').removeClass('.fas fa-chevron-up');
            $('.tab_menu p i').addClass('.fas fa-chevron-down');	
            });

    /*fqa*/
    var article = $('.contlist .article'); //모든 li들..(질문답변들...)

    $('.contlist .article .trigger').click(function(e){   //각각의 질문을 클릭하면
        e.preventDefault();
        var myArticle = $(this).parents('.article');  //클릭한 해당 메뉴에 li(리스트) 

        if(myArticle.hasClass('hide')){   //클릭한 해당 리스트 닫힌 여부
            article.find('.a').slideUp(100); // 모든 리스트의 답변을 닫기
            article.removeClass('show').addClass('hide'); //모든 리스트의 클래스 hide로 체인지
            article.find('i').attr('class','fas fa-plus'); //모든 리스트 +아이콘으로 변경
            article.find('.hidden').text('답변열기'); //모든 리스트 답변열기로 변경
            myArticle.removeClass('hide').addClass('show');  // 클래스를 show로 바꾼다
            myArticle.find('.a').slideDown(100);  //해당 리스트의 답변을 열어라~~~
            myArticle.find('i').attr('class','fas fa-minus'); //모든 리스트 -아이콘으로 변경
            myArticle.find('.hidden').text('답변닫기'); //모든 리스트 답변닫기로 변경
            } else {  //클릭한 해당 리스트가 열려있냐?? (show)
                myArticle.removeClass('show').addClass('hide');  //클래스 hide로 바꾼다
                myArticle.find('.a').slideUp(100);   //해당 리스트의 답변을 닫아라~~~
                myArticle.find('i').attr('class','fas fa-plus'); //리스트 +아이콘으로 변경
                myArticle.find('.hidden').text('답변열기'); //리스트 답변열기로 변경
                }  
    });      

    $('.all').toggle(function(e){  //모두여닫기
        e.preventDefault(); 
        article.find('.a').slideDown(100);
        article.removeClass('hide').addClass('show');
        $(this).html('모든 답변 닫기<i class="fas fa-minus"></i><span class="hidden">답변닫기</span>');
        article.find('i').attr('class','fas fa-minus'); //모든 리스트 -아이콘으로 변경
        article.find('.hidden').text('답변닫기'); //모든 리스트 답변닫기로 변경
        },function(e){ 
            e.preventDefault();
            article.find('.a').slideUp(100);
            article.removeClass('show').addClass('hide');
            $(this).html('모든 답변 보기<i class="fas fa-plus"></i><span class="hidden">답변보기</span>');
            article.find('i').attr('class','fas fa-plus'); //모든 리스트 +아이콘으로 변경
            article.find('.hidden').text('답변열기'); //모든 리스트 답변열기로 변경
    });
});