$(document).ready(function(){
	/*for the sticky navigation*/

	$('.js--section-features').waypoint(function(direction){
		
	}, {
			 offset: '60px;'
			});
	
	
	/*navigation scrolling to sections*/
		$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
			|| location.hostname == this.hostname) {
			
            var nav = $('.js--main-nav');
			var target = $(this.hash);
			var icon=$('.js--nav-icon i');
		
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			   if (target.length) {
				 $('html,body').animate({
					 scrollTop: target.offset().top
				}, 1000);
				return false;
			}
			
           nav.slideToggle(0);
		}
			
			
	});
	
/*mobile navigation*/
	$('.js--nav-icon').click(function() {
		
		var nav = $('.js--main-nav');
		var icon=$('.js--nav-icon i');
	 	nav.slideToggle(200);
		
		 if (icon.hasClass('ion-naviklo,con-round')) {
			//$('.menu-box').height('180px');
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
			
			 
        } else {
			//$('.menu-box').height('60px');
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
			
        }  
	
		
	});
	
	/*mobile navigation*/
	
	 $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
	
	$('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
	
	$('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated bounceInLeft');
    }, {
        offset: '50%'
    });
	
	$('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated bounceInRight');
    }, {
        offset: '50%'
    });
	
});