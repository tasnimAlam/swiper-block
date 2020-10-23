window.addEventListener("DOMContentLoaded", (event) => {
	var swipers = document.querySelectorAll(".swiper-container");

	for (swiper of swipers) {
		const slidesPerView = swiper.getAttribute("data-slides-per-view");
		const spaceBetween = swiper.getAttribute("data-space-between");
		const speed = swiper.getAttribute("data-speed");
		const vertical = swiper.getAttribute("data-vertical") === "true";
		const effect = swiper.getAttribute("data-effect");
		const freeMode = swiper.getAttribute("data-free-mode") === "true";
		const loop = swiper.getAttribute("data-loop") == "true";
		const autoplay = swiper.getAttribute("data-autoplay") === "true";
		const autoplayDelay = swiper.getAttribute("data-autoplay-delay");
		const navigation = swiper.getAttribute("data-navigation") === "true";
		const pagination = swiper.getAttribute("data-pagination") === "true";
		const bulletClickable =
			swiper.getAttribute("data-bullet-clickable") === "true";
		const scrollbar = swiper.getAttribute("data-scrollbar") === "true";
		const scrollbarHide = swiper.getAttribute("data-scrollbar-hide") === "true";
		const scrollbarDraggable =
			swiper.getAttribute("data-scrollbar-draggable") === "true";

		window.mySwiper = null;
		window.mySwiper = new Swiper(".swiper-container", {
			autoplay: autoplay
				? {
						delay: autoplayDelay,
				  }
				: false,
			loop: loop,
			freeMode: freeMode,
			direction: vertical ? "vertical" : "horizontal",
			navigation: navigation
				? {
						nextEl: ".swiper-button-next",
						prevEl: ".swiper-button-prev",
				  }
				: false,
			pagination: pagination
				? {
						el: ".swiper-pagination",
						clickable: bulletClickable,
				  }
				: false,
			scrollbar: scrollbar
				? {
						el: ".swiper-scrollbar",
						hide: scrollbarHide,
						draggable: scrollbarDraggable,
				  }
				: false,
			// Optional parameters
			// slidesPerView: slidesPerView,
			// spaceBetween: spaceBetween,
			// speed: speed,
			// effect: effect,
			// freeMode: freeMode,
			// direction: vertical ? "vertical" : "horizontal",
			// If we need pagination
			// Navigation arrows
			// And if we need scrollbar
			// scrollbar: {
			// 	el: ".swiper-scrollbar",
			// },
		});
	}
});
