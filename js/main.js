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
	$(".btn-profile-add-to-cart-donate-now > li.profile-li > i").click(function() {
		$(this).parent().parent().find('ul').slideUp(700);
		$(".btn-profile-add-to-cart-donate-now > li.profile-li > i").parent().removeClass("active");
		if(!$(this).next().is(":visible")) {
				$(this).next().slideDown(700);
				$(this).parent().addClass("active");
		}
	});
	// Shopping Listing JS
	$(".btn-profile-add-to-cart-donate-now > li.shopping-cart-li > span").click(function() {
		$(this).parent().parent().find('ul').slideUp(700);
		$(".btn-profile-add-to-cart-donate-now > li.shopping-cart-li > span").parent().parent().removeClass("active");
		if(!$(this).next().is(":visible")) {
				$(this).next().slideDown(700);
				$(this).parent().addClass("active");
		}
	});
});