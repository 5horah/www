$(document).ready(function() {
    /*----popup----*/
    $('#content .button a').click(function(e){
        e.preventDefault();
        // var txt ='';
        var ind = $(this).index('#content .button a');  // 0 1 2 3

        $('#content .modal_box2').fadeIn('fast');
        $('#content .popup').fadeIn('slow');

        $('#content .popup img').attr('src','./images/sub3/certificate_img0'+(ind+1)+'.png');
        
    });

    $('.close_btn,#content .modal_box2').click(function(e){
        e.preventDefault();
        $('#content .modal_box2').hide();
        $('#content .popup').hide();
    });
});