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
		bulletClickable,
		scrollbar,
		scrollbarHide,
		scrollbarDraggable,
		autoplay,
		autoplayDelay,
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
			data-thumbs={thumbs}
			data-thumbs-per-view={thumbsPerView}
			data-thumb-space={thumbSpaceBetween}
			data-navigation={navigation}
			data-pagination={pagination}
			data-bullet-clickable={bulletClickable}
			data-scrollbar={scrollbar}
			data-scrollbar-hide={scrollbarHide}
			data-scrollbar-draggable={scrollbarDraggable}
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
