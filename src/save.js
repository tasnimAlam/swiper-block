export default function save({ attributes }) {
	const {
		images,
		autoHeight,
		slidesPerView,
		spaceBetween,
		speed,
		vertical,
		effect,
		grabCursor,
		freeMode,
		loop,
		navigation,
		pagination,
		scrollbar,
		autoplay,
		autoplayDelay,
		parallax,
		thumbs,
		thumbsPerView,
		thumbSpaceBetween,
	} = attributes;

	if (!images.length) {
		return <div />;
	}

	return (
		<div class="swiper-container">
			<div class="swiper-wrapper">
				{images.map((image) => (
					<div class="swiper-slide">
						<img src={image.url} alt={image.alt} />
					</div>
				))}
			</div>

			{pagination && <div class="swiper-pagination"></div>}

			{navigation && (
				<>
					<div class="swiper-button-prev"></div>
					<div class="swiper-button-next"></div>
				</>
			)}

			{scrollbar && <div class="swiper-scrollbar"></div>}
		</div>
	);
}
