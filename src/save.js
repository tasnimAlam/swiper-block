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
		<div
			class="swiper-container"
			data-auto-height={autoHeight}
			data-slides-per-view={slidesPerView}
			data-space-between={spaceBetween}
			data-speed={speed}
			data-vertical={vertical}
			data-effect={effect}
			data-grab-cursor={grabCursor}
			data-free-mode={freeMode}
			data-loop={loop}
			data-autoplay={autoplay}
			data-autoplay-delay={autoplayDelay}
			data-parallax={parallax}
			data-thumbs={thumbs}
			data-thumbs-per-view={thumbsPerView}
			data-thumb-space={thumbSpaceBetween}
			data-navigation={navigation}
		>
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
