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
});