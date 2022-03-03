$(document).ready(function(){
    // 첫번째만 활성화
    $('.event_slidemenu .menu01').addClass('pointer');
    $('.event_slidemenu .menu01').animate({width:577},1000).clearQueue();


    $('.event_slidemenu ul li .button_menu').mouseenter(function(event){
        var $target=$(event.target);

        if($target.is('.event_slidemenu .button_menu01')){
            $('.event_slidemenu .eventmenu').removeClass('pointer');

            $('.event_slidemenu .menu01').animate({width:577},1000).clearQueue();
            $('.event_slidemenu .menu02').animate({width:208},1000).clearQueue();
            $('.event_slidemenu .menu03').animate({width:208},1000).clearQueue();
            $('.event_slidemenu .menu04').animate({width:208},1000).clearQueue();

            $('.event_slidemenu .menu01').addClass('pointer');

            }else if($target.is('.button_menu02')){
                $('.event_slidemenu .eventmenu').removeClass('pointer');

                $('.event_slidemenu .menu01').animate({width:208},1000).clearQueue();
                $('.event_slidemenu .menu02').animate({width:577},1000).clearQueue();
                $('.event_slidemenu .menu03').animate({width:208},1000).clearQueue();
                $('.event_slidemenu .menu04').animate({width:208},1000).clearQueue();

                $('.event_slidemenu .menu02').addClass('pointer');

            }else if($target.is('.button_menu03')){
                $('.event_slidemenu .eventmenu').removeClass('pointer');

                $('.event_slidemenu .menu01').animate({width:208},1000).clearQueue();
                $('.event_slidemenu .menu02').animate({width:208},1000).clearQueue();
                $('.event_slidemenu .menu03').animate({width:577},1000).clearQueue();
                $('.event_slidemenu .menu04').animate({width:208},1000).clearQueue();

                $('.event_slidemenu .menu03').addClass('pointer');

            }else if($target.is('.button_menu04')){
                $('.event_slidemenu .eventmenu').removeClass('pointer');

                $('.event_slidemenu .menu01').animate({width:208},1000).clearQueue();
                $('.event_slidemenu .menu02').animate({width:208},1000).clearQueue();
                $('.event_slidemenu .menu03').animate({width:208},1000).clearQueue();
                $('.event_slidemenu .menu04').animate({width:577},1000).clearQueue();

                $('.event_slidemenu .menu04').addClass('pointer');

            };
        
        });
});