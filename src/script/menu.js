$(".header__menu-icon").on('click', function() {
	$(".menu").addClass("menu_active");
	$('.menu__wrap').addClass("menu__wrap_active");
});

let menu = $(".menu")[0];
let menuListener = new Hammer(menu);

menuListener.on('swipeleft tap', function(ev) {
	if ((ev.type == "tap" && ev.target == menu) || ev.type == "swipeleft") {
		$('.menu').removeClass('menu_active');
		$('.menu__wrap').removeClass("menu__wrap_active");
	}
	console.log(ev.type);
});

