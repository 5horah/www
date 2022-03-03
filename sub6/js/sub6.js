$(document).ready(function(){
    /* tab */

    var cnt=4;  //탭메뉴 개수 ***
        $('#content .contlist:eq(0)').show(); // 첫번째 탭 내용만 열어라
        $('#content .tab1').css('color','#1979bd').css('font-weight','500').css('opacity','1'); //첫번째 탭메뉴 활성화
        $('#content .tab1').addClass('afline')
        
        $('#content .tab').each(function (index) {  // index=0 1 2 3
        $(this).click(function(e){  //각각의 탭메뉴를 클릭하면... 
            e.preventDefault();   // <a> href="#" 값을 강제로 막는다 
    
            $("#content .contlist").hide(); //모든 탭내용을 안보이게...
            //$(".content_area .contlist:eq("+index+")").show(); //클릭한 해당 탭내용만 보여라
            $("#content .contlist:eq("+index+")").fadeIn('slow');
            $('.tab').css('color','#666').css('font-weight','400').css('opacity','.6'); //모든 탭메뉴를 비활성화
            $('.tab').removeClass('afline').mouseover(function(){$(this).css('opacity','1')}).mouseleave(function(){$(this).css('opacity','.6')})

            $(this).css('color','#1979bd').css('font-weight','500').css('opacity','1'); // 클릭한 해당 탭메뉴만 활성화
            $(this).addClass('afline').mouseleave(function(){$(this).css('opacity','1')})
        });
        });


      /* 탭 클릭 시 내용 노출 */
             
        $('.system_text li:eq(0)').fadeIn('slow');
        
        $('.system_btn li:eq(0) a').addClass('systemclick');
         
        $('.system_btn a').click(function(e){
              e.preventDefault();
              var ind = $(this).index('.system_btn a'); 
             
              $('.system_text li').hide();
              $('.system_text li:eq('+ind+')').fadeIn('slow');

              $('.system_btn li a').removeClass('systemclick');
              $(this).addClass('systemclick');
        });

  /*fqa*/
  var article = $('.content_area01 .article'); //모든 li들..(질문답변들...)
	
  $('.content_area01 .article .trigger').click(function(e){   //각각의 질문을 클릭하면
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
    
})