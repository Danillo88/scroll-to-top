
$(".top-button").fadeOut(1);


window.addEventListener("scroll", function (event) 
		{
    var scroll = this.scrollY;
   
    if (scroll > 0) 
			{
					
					$(".scroll-to-top").fadeIn(500);
			}else if (scroll == 0) 
							{
										
										$(".scroll-to-top").fadeOut(500);
							}
		});


$(".scroll-to-top").click(function() {
    $('html, body').animate({
        scrollTop: $(".max").offset().top
    }, 500);
});







