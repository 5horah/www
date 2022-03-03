$(document).ready(function(){

    /*스크롤 이벤트*/
    
        var h1= $('.about2').offset().top -100 ;
        var h2= $('.unesco').offset().top -100 ;
        var h3= $('.geo_brands').offset().top -100 ;
        var h4= $('.tourism_video').offset().top -100 ;
        var h5= $('.gallery').offset().top -100 ;
    
        $(window).on('scroll',function(){ 
            var scroll = $(window).scrollTop(); 
                
            if(scroll>=300 && scroll<h1){  
                $('#content>.about').addClass('scrollevent'); 
                $('.about .motion2').css({'animation-name':'aboutmotion','animation-duration': '3s'})
                
            }else if(scroll>=h1 && scroll<h2){            
                $('#content>.about2').addClass('scrollevent'); 
    
            }else if(scroll>=h2 && scroll<h3){            
                $('#content>.unesco').addClass('scrollevent'); 
    
            }else if(scroll>=h3 && scroll<h4){            
                $('#content>.geo_brands').addClass('scrollevent'); 
                $('.geo_brands .motion1').css({'animation-name':'geoani','animation-duration': '5s'})
                $('.geo_brands .motion2').css({'animation-name':'geoani','animation-duration': '5s'})

    
            }else if(scroll>=h4 && scroll<h5){            
                $('#content>.tourism_video').addClass('scrollevent'); 
    
            }else if(scroll>=h5){            
                $('#content>.gallery').addClass('scrollevent');
    
            }
        });
});