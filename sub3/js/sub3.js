
// JavaScript Document

$(document).ready(function(){

    /*----popup----*/
    $('#content .button a').click(function(e){
        e.preventDefault();
        // var txt ='';
        var ind = $(this).index('#content .button a');  // 0 1 2 3
  
        $('#content .modal_box').fadeIn('fast');
        $('#content .popup').fadeIn('slow');
  
        $('#content .popup img').attr('src','./images/content1/certificate_img0'+(ind+1)+'.jpg');
          
    });
  
    $('.close_btn,#content .modal_box').click(function(e){
        e.preventDefault();
        $('#content .modal_box').hide();
        $('#content .popup').hide();
    });

    /*----tab----*/
    var cnt=2;  //탭메뉴 개수 ***
    $('#content .contlist:eq(0)').show(); // 첫번째 탭 내용만 열어라
    $('#content .tab1').css('color','#1979bd').css('font-weight','500').css('opacity','1'); //첫번째 탭메뉴 활성화
    $('#content .tab1').addClass('afline')
    
    $('#content .tab').each(function (index) {  // index=0 1 2 3
      $(this).click(function(e){  //각각의 탭메뉴를 클릭하면... 
          e.preventDefault();   // <a> href="#" 값을 강제로 막는다 
  
          $("#content .contlist").hide(); //모든 탭내용을 안보이게
          //$(".content_area .contlist:eq("+index+")").show(); //클릭한 해당 탭내용만 보여라
          $("#content .contlist:eq("+index+")").fadeIn('slow');
          $('.tab').css('color','#666').css('font-weight','400').css('opacity','.6'); //모든 탭메뉴를 비활성화
          $('.tab').removeClass('afline').mouseover(function(){$(this).css('opacity','1')}).mouseleave(function(){$(this).css('opacity','.6')})

          $(this).css('color','#1979bd').css('font-weight','500').css('opacity','1'); // 클릭한 해당 탭메뉴만 활성화
          $(this).addClass('afline').mouseleave(function(){$(this).css('opacity','1')})
        });
    });

    /*----button gallery----*/
	$('.right_btn').click(function () {
        $('.members_gallerybox1 li').first().appendTo('.members_gallerybox1 ul');
                                // = first() = li:eq(0)
			 // ul(부모)의 자식  li중에서 첫번째 li를 마지막으로 위치 이동. (appendTo에는 꼭 부모태그***)
        $('.members_gallerybox2 li').first().appendTo('.members_gallerybox2 ul');

    });
	$('.left_btn').click(function () {
        $('.members_gallerybox1 li').last().prependTo('.members_gallerybox1 ul');
                               // = last() = li:eq(5)
			 // ul(부모)의 자식  li중에서 마지막번째 li를 첫번째로 위치 이동.
        $('.members_gallerybox2 li').last().prependTo('.members_gallerybox2 ul');

    });

    


});
