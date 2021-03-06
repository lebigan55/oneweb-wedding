$(function() {

    new WOW().init();


	// Smooth Scroll to block
	$('a[href^="#l"]').click(function(){
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 1000);
        return false; 
   });

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });



});
$(document).ready(function() {
    $('.testimonials-slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: true,
        items: 1
    });

      $('#slider-1').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
  });
$("#contact-call-back").validate();
$("#contact-order-call").validate();
$("#contact-get-price").validate();

$(document).ready(function(){
    $(".our-partners__content a").hover(function() {
        $(this).next("em").animate({opacity: "show", top: "75"}, "slow");
    }, function() {
        $(this).next("em").animate({opacity: "hide", top: "85"}, "fast");
    });
});

$(document).ready(function() { 

    (function ($) { 
        $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
        
        $('.tab ul.tabs li a').click(function (g) { 
            var tab = $(this).closest('.tab'), 
                index = $(this).closest('li').index();
            
            tab.find('ul.tabs > li').removeClass('current');
            $(this).closest('li').addClass('current');
            
            tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
            tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
            
            g.preventDefault();
        } );
    })(jQuery);

});