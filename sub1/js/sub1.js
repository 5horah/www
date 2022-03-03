// JavaScript Document

$(document).ready(function(){
  var cnt=4;  //탭메뉴 개수 ***
  $('.content_area .contlist:eq(0)').show(); // 첫번째 탭 내용만 열어라
  $('.content_area .tab1').css('color','#1979bd').css('font-weight','700'); //첫번째 탭메뉴 활성화
  $('.content_area .tab1').addClass('afdock').removeClass('bedock')
  
  $('.content_area .tab').each(function (index) {  // index=0 1 2 3
    $(this).click(function(e){  //각각의 탭메뉴를 클릭하면... 
        e.preventDefault();   // <a> href="#" 값을 강제로 막는다 

        $(".content_area .contlist").hide(); //모든 탭내용을 안보이게...
        //$(".content_area .contlist:eq("+index+")").show(); //클릭한 해당 탭내용만 보여라
        $(".content_area .contlist:eq("+index+")").fadeIn('slow');
        $('.tab').css('color','#666').css('font-weight','400'); //모든 탭메뉴를 비활성화
        $('.tab').addClass('bedock').removeClass('afdock')
        $(this).css('color','#1979bd').css('font-weight','700'); // 클릭한 해당 탭메뉴만 활성화
        $(this).addClass('afdock').removeClass('bedock')
   });
  });

});

