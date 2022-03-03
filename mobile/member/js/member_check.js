$(document).ready(function(){
        
    //    회원가입 개인정보 동의 ------------------------------------
    
    $('.check_agree').on('click',check_agree);
    
    function check_agree(e){
        e.preventDefault();

        var checkboxLength=$('input[type="checkbox"]').length;
			            // 체크박스의 총개수 변수로 담기(5개)
        var checkedLength=$('input[type="checkbox"]:checked').length;   //체크가 되어있는 체크박스 개수 (체크박스ed)
         //console.log(checkboxLength,$('input[type="checkbox"]:checked').length)
        
        if(checkboxLength != checkedLength){ //체크박스 총개수 != 체크박스ed 총개수
            alert("수집하는 개인정보 항목에 동의해야 가입하실 수 있습니다.");
        }else{ //체크박스 총개수 = 체크박스ed 총개수
            location.href="member_form.php";   //회원가입 폼 입력 페이지로 이동
        }
    }
    
    //모두선택/해제
    $('.allcheck').toggle(function(e){

        e.preventDefault();
     
        $('input[type="checkbox"]').attr('checked',true);
        $(this).addClass('afline');
     
      },function(e){
     
        e.preventDefault();
     
        $('input[type="checkbox"]').attr('checked',false);
        $(this).removeClass('afline');
     
      });

   });


function join_cancel(){
   history.go(-1);
}

















