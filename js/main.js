$(function() {
  // AOS Animation JS
  AOS.init({
    easing: 'ease-in-out-sine'
  });
  // Desktop Header Section JS
	$(window).scroll(function(){
	  if ($(window).scrollTop() >= 100) {
	    $('.bg-header-desktop').addClass('active');
	   } else {
	    $('.bg-header-desktop').removeClass('active');
	   }
	});
	// Profile JS
	$(".btn-profile-add-to-cart-donate-now > li.profile-li > a").click(function() {
		$(this).parent().parent().find('ul').slideUp(700);
		$(".btn-profile-add-to-cart-donate-now > li:first-child > a").parent().removeClass("active");
		if(!$(this).next().is(":visible")) {
				$(this).next().slideDown(700);
				$(this).parent().addClass("active");
		}
	});
	// Shopping Listing JS
	$(".btn-profile-add-to-cart-donate-now > li.shopping-cart-li > a").click(function() {
		$(this).parent().parent().find('ul').slideUp(700);
		$(".btn-profile-add-to-cart-donate-now > li:nth-child(2) > a").parent().removeClass("active");
		if(!$(this).next().is(":visible")) {
				$(this).next().slideDown(700);
				$(this).parent().addClass("active");
		}
	});
});