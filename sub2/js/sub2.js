// JavaScript Document

$(document).ready(function () {

  var cnt = 3; //탭메뉴 개수 ***
  $('#content .contlist:eq(0)').show(); // 첫번째 탭 내용만 열어라
  $('#content .tab1').css('color', '#1979bd').css('font-weight', '500').css('opacity', '1'); //첫번째 탭메뉴 활성화
  $('#content .tab1').addClass('afline')

  $('#content .tab').each(function (index) { // index=0 1 2 3
    $(this).click(function (e) { //각각의 탭메뉴를 클릭하면... 
      e.preventDefault(); // <a> href="#" 값을 강제로 막는다 

      $("#content .contlist").hide(); //모든 탭내용을 안보이게...
      //$(".content_area .contlist:eq("+index+")").show(); //클릭한 해당 탭내용만 보여라
      $("#content .contlist:eq(" + index + ")").fadeIn('slow');
      $('.tab').css('color', '#666').css('font-weight', '400').css('opacity', '.6'); //모든 탭메뉴를 비활성화
      $('.tab').removeClass('afline').mouseover(function () {
        $(this).css('opacity', '1')
      }).mouseleave(function () {
        $(this).css('opacity', '.6')
      })

      $(this).css('color', '#1979bd').css('font-weight', '500').css('opacity', '1'); // 클릭한 해당 탭메뉴만 활성화
      $(this).addClass('afline').mouseleave(function () {
        $(this).css('opacity', '1')
      })
    });
  });
  /*제품 탭*/
  var cnt = 2; //탭메뉴 개수 ***
  $('.tab_content1 .conlist').fadeOut('');

  $('.tab_content1 .conlist:eq(0)').fadeIn('slow'); //첫번째 탭 컨텐츠 노출    
  $('.tab_menu1 .ptab1').addClass('click'); //첫번째 탭 활성화

  $('.tab_menu1 .ptab').click(function (e) { //탭 클릭 시
    e.preventDefault();
    var ind = $(this).index('.tab_menu1 .ptab'); //탭 클릭 시

    $('.tab_content1 .conlist').hide(); //컨텐츠 미노출
    $('.tab_content1 .conlist:eq(' + ind + ')').fadeIn('slow'); //클릭한 탭에 대한 컨텐츠만 노출

    $('.tab_menu1 li').removeClass('click'); // 탭 활성화 클래스 삭제
    $(this).addClass('click'); //클릭한 탭만 활성화 클래스
  });
  /*----popup----*/
  $('.tab_content1 .conlist a').click(function (e) {
    e.preventDefault();
    // var txt ='';
    var ind = $(this).index('.tab_content1 .conlist a'); // 0 1 2 3
    var alt = ['피닉스 제품이미지', '썬더블루 제품이미지', '블루스톰 제품이미지', '인셉터 제품이미지', '피닉스 제품이미지']
    var product = ['<span class="subtxt1">실내포충등</span>피닉스<span class="subtxt2">PHOENIX</span>', '<span class="subtxt1">외곽살충등</span>썬더블루<span class="subtxt2">THUNDERBLUE</span>', '<span class="subtxt1">소형외곽살충등</span>블루스톰<span class="subtxt2">BLUESTOTM</span>', '<span class="subtxt1">초소형실내포충등</span>인셉터<span class="subtxt2">INCEPTER</span>']

    $('#content .modal_box2').fadeIn('fast');
    $('#content .popup').fadeIn('slow');

    $('#content .popup img').attr('src', './images/content2/service01_pro' + (ind + 1) + '.jpg');
    $('#content .popup img').attr('alt', alt[ind]);
    $('#content .popup .popuptxt p').html(product[ind]);
  });

  $('.close_btn,#content .modal_box2').click(function (e) {
    e.preventDefault();
    $('#content .modal_box2').hide();
    $('#content .popup').hide();
  });
  /*su2_2 제품 슬라이드*/
  var position = 64; //최초위치
  var movesize = 403; //이미지 하나의 너비(리뷰)
  $('.area02_con3 .slide_gallery ul').after($('.area02_con3 .slide_gallery ul').clone()); //슬라이드 겔러리를 한번 복제

  $('.area02_con3 .button').click(function (e) { //버튼 클릭 시
    e.preventDefault();

    if ($(this).is('.area02_con3 .m1')) { //이전버튼 클릭
      if (position == -2354) {
        $('.area02_con3 .slide_gallery').css('left', 64);
        position = 64;
      }
      position -= movesize; // 400씩 감소
      $('.area02_con3 .slide_gallery').stop().animate({
        left: position
      }, 'fast', function () {
        if (position == -2354) {
          $('.area02_con3 .slide_gallery').css('left', 64);
          position = 64;
        }
      });
    } else if ($(this).is('.area02_con3 .m2')) { //다음버튼 클릭
      if (position == 64) { // 처음에 다음버튼을 클릭하면 빠르게 옮겨주기(이전 버튼은 원래 있으니 괜춘)
        $('.area02_con3 .slide_gallery').css('left', -2354)
        position = -2354;
      }

      position += movesize; // 150씩 증가
      $('.area02_con3 .slide_gallery').stop().animate({
        left: position
      }, 'fast', function () { // 포문 : 다음버튼 클릭했을 때 이미지 위치가 0일경우 옮겨주기				
        if (position == 64) {
          $('.area02_con3 .slide_gallery').css('left', -2354);
          position = -2354;
        }
      });
    }
  });

  /*su2_3 제품 슬라이드*/
  var position = 0; //최초위치
  var movesize = 648; //이미지 하나의 너비(리뷰)

  $('.area03_con3 .slide_gallery2 ul').after($('.area03_con3 .slide_gallery2 ul').clone()); //슬라이드 겔러리를 한번 복제

  $('.area03_con3 .button').click(function (e) { //버튼 클릭 시
    e.preventDefault();

    if ($(this).is('.area03_con3 .m1')) { //이전버튼 클릭
      if (position == -5184) {
        $('.area03_con3 .slide_gallery2').css('left', 0);
        position = 0;
      }
      position -= movesize; // 400씩 감소
      $('.area03_con3 .slide_gallery2').stop().animate({
        left: position
      }, 'fast', function () {
        if (position == -5184) {
          $('.area03_con3 .slide_gallery2').css('left', 0);
          position = 0;
        }
      });
    } else if ($(this).is('.area03_con3 .m2')) { //다음버튼 클릭
      if (position == 0) { // 처음에 다음버튼을 클릭하면 빠르게 옮겨주기(이전 버튼은 원래 있으니 괜춘)
        $('.area03_con3 .slide_gallery2').css('left', -5184)
        position = -5184;
      }

      position += movesize; // 150씩 증가
      $('.area03_con3 .slide_gallery2').stop().animate({
        left: position
      }, 'fast', function () { // 포문 : 다음버튼 클릭했을 때 이미지 위치가 0일경우 옮겨주기				
        if (position == 0) {
          $('.area03_con3 .slide_gallery2').css('left', -5184);
          position = -5184;
        }
      });
    }
  });


});