import './index.scss';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import * as Masonry from 'masonry-layout/masonry';

if (typeof Drupal !== "undefined" && Drupal.behaviors) {
	Drupal.behaviors.ADNew = {
		attach: () => {
			init();
		},
		completedCallback: () => {/*Do nothing. But it's here in case other modules/themes want to override it.*/	}
	}
} else {
	document.addEventListener("DOMContentLoaded", () => {
		init();
	});
}

function init() {
	initCarousels();
	initGallery();
}

function initCarousels() {
	if(typeof $.fn.owlCarousel === "undefined") return;
	$('.owl-carousel__news').owlCarousel({
		dots: false,
		nav: true,
		items: 3,
		margin: 20,
		loop: true,
		responsive: {
			768: {
				loop: false,
			}
		}
	});

	$('.owl-carousel__videos').owlCarousel({
		dots: false,
		nav: true,
		items: 2,
		margin: 0,
		loop: true,
		responsive: {
			768: {
				loop: false,
			}
		}
	});

	$('.owl-carousel__sponsors').owlCarousel({
		dots: false,
		nav: true,
		items: 5,
		margin: 20,
		loop: true,
		responsive: {
			768: {
				loop: false,
			}
		}
	});
}

function initGallery() {
	var grid = document.querySelector('.grid');
	var msnry = new Masonry('.grid', {
		itemSelector: '.grid-item',

	});
	console.log(msnry);
}