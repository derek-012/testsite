let slider = document.getElementsByClassName('slider')[0];

let sPositions = ['0', '-100%'];
let sPos = 0;
let sBlock = document.getElementsByClassName('slider__slides')[0];
let sliderListener = new Hammer(slider);

function sChange(pos) {
	if (pos >= 0 && pos < sPositions.length && sPos != pos) {
		$('.slider__switch_active').removeClass('slider__switch_active');
		$($('.slider__switch')[sPos = pos]).addClass('slider__switch_active');
		$(sBlock).css('margin-left', sPositions[sPos]);
	}
}

sliderListener.on("swipeleft swiperight", function(ev) {
	(ev.type == "swiperight") ? sChange(sPos - 1) : sChange(sPos + 1);
});

$('.slider__switch').click((e) => {
	sChange($('.slider__switch').index(e.currentTarget));
});


let testimonials = document.getElementsByClassName('testimonials__items')[0];
let testimonialsListener = new Hammer(testimonials);

let tPositions;
let tPos = 1;

function tSwitch(step) {
	if (tPos + step >= 0 && tPos + step < tPositions.length) {
		testimonials.style.marginLeft = tPositions[tPos += step];
		$('.testimonials__item_active').removeClass('testimonials__item_active');
		$($('.testimonials__item')[tPos]).addClass('testimonials__item_active');
	}
}

testimonialsListener.on("swipeleft swiperight", function(ev) {
	(ev.type == "swiperight") ? tSwitch(-1) : tSwitch(1);
});

$('.testimonials__arrow-left').click((e) => { tSwitch(-1); });
$('.testimonials__arrow-right').click((e) => { tSwitch(1); });

function resetTestimonials() {
	tPositions = (window.innerWidth >= 1024) ? ['17%', '-50%', '-117%'] : ['6.6%', '-80%', '-166.6%'];
	testimonials.style.marginLeft = tPositions[tPos];
}

$().ready(resetTestimonials);

$(window).resize(resetTestimonials);

let productSlideBlock = $('.slider__wrap')[0];
let pPositions = ['0', '-100%', '-200%', '-300%', '-400%'];
let pPos = 1;

function pChange(pos) {
	if (pos >= 0 && pos < pPositions.length && pPos != pos) {
		$('.control__item_active').removeClass('control__item_active');
		$($('.control__item')[pPos = pos]).addClass('control__item_active');
		$(productSlideBlock).css('margin-left', pPositions[pPos]);
	}
}

$('.control__item').click((e) => { pChange($(e.currentTarget).index()); });

$('.product__arrow-left').click(() => { pChange(pPos - 1); });

$('.product__arrow-right').click(() => { pChange(pPos + 1); });

let pSlideBlockListener = new Hammer(productSlideBlock);

pSlideBlockListener.on("swipeleft", (ev) => { pChange(pPos + 1); });
pSlideBlockListener.on("swiperight", (ev) => { pChange(pPos - 1); });

$().ready(() => {
	if (window.innerWidth >= 768)
		$('.slide2').html('<img class="slide2__text" src="/img/slider/slide2/UpCBD_Slider2.svg" alt="slide2-text">' + 
				'<img class="slide2__image" src="/img/slider/slide2/slide2-5x.svg" alt="slide2-5x">');
});