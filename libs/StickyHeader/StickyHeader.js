var didScroll;
var lastScrollTop = 0 ;
var delta = 5;
var navbarHeight = $('header').outerHeight();

&(window).scroll(function(event){
	didScroll = true;
});

setInterval(function() {
		if (didScroll) {
			hasScrolled();
			didScroll = false;
		}
}, 250);

function hasScrolled() {
		var st = $(this).scrollTop();
}