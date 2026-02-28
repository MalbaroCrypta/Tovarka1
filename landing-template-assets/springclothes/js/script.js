$(document).ready(function() {


	/* scroll */
 $("a[href^='#']").click(function(){
		var _href = $(this).attr("href");
		$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
		if (_href == "#order_form") {
			var product = $(this).parent().find("h4").text();
			$("#order_form input[name='comment']").val(product);
		}
		return false;
	});
    /* timer */


    lastpack(2, 60, 'lastpack');

    $("a[href^='#']").click(function() {
        var _href = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(_href).offset().top + "px"
        });
        return false;
    });

    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: false,
        smartSpeed: 300,
        mouseDrag: false,
        pullDrag: false,
        dots: false,
        nav: true,
        navText: ""
    });

});
