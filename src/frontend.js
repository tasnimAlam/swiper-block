window.addEventListener("DOMContentLoaded", (event) => {
	var swipers = document.querySelectorAll(".swiper-container");

	for (swiper of swipers) {
		const autoHeight = swiper.getAttribute("data-auto-height") == "true";
		const slidesPerView = swiper.getAttribute("data-slides-per-view");
		const spaceBetween = swiper.getAttribute("data-space-between");
		const speed = swiper.getAttribute("data-speed");
		const vertical = swiper.getAttribute("data-vertical");
		const effect = swiper.getAttribute("data-effect");
		const grabCursor = swiper.getAttribute("data-grab-cursor");
		const freeMode = swiper.getAttribute("data-free-mode");
		const loop = swiper.getAttribute("data-loop") == "true";
		const autoplay = swiper.getAttribute("data-autoplay") == "true";
		const autoplayDelay = swiper.getAttribute("data-autoplay-delay");
		// const parallax = swiper.getAttribute("data-parallax");
		const thumbs = swiper.getAttribute("data-thumbs");
		const thumbsPerView = swiper.getAttribute("data-thumbs-per-view");
		const thumbSpaceBetween = swiper.getAttribute("data-thumb-space");

		const mySwiper = new Swiper(".swiper-container", {
			autoplay: autoplay
				? {
						delay: autoplayDelay,
				  }
				: false,
			// // Optional parameters
			// autoHeight: autoHeight,
			// autoHeight: true,
			// slidesPerView: slidesPerView,
			// spaceBetween: spaceBetween,
			// speed: speed,
			// effect: effect,
			// grabCursor: grabCursor,
			// freeMode: freeMode,
			// parallax: parallax,
			// thumbs: thumbs,
			// direction: vertical ? "vertical" : "horizontal",
			// loop: loop,
			// If we need pagination
			// pagination: {
			// 	el: ".swiper-pagination",
			// },
			// Navigation arrows
			// navigation: {
			// 	nextEl: ".swiper-button-next",
			// 	prevEl: ".swiper-button-prev",
			// },
			// And if we need scrollbar
			// scrollbar: {
			// 	el: ".swiper-scrollbar",
			// },
		});
	}
});
