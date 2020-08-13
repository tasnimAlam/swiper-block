/*
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { MediaPlaceholder } from "@wordpress/block-editor";

/*
 * External dependencies
 */
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

/*
 * Internal dependencies
 */
import "./editor.scss";
import Inspector from "./inspector";

export default function Edit({
	isSelected,
	clientId,
	attributes,
	setAttributes,
}) {
	const {
		images,
		hasNavigation,
		hasPagination,
		hasScrollbar,
		slidesPerView,
		spaceBetween,
	} = attributes;

	// Use swiper features
	let features = [Navigation, Pagination, Scrollbar, A11y];

	// if (hasNavigation) {
	// 	features = [...features, Navigation];
	// }
	// if (hasPagination) {
	// 	features = [...features, Pagination];
	// }

	// if (hasScrollbar) {
	// 	features = [...features, Scrollbar];
	// }

	SwiperCore.use(features);
	// SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

	const onImageSelect = (images) => {
		let updatedImages = [];

		images.map((image) => {
			updatedImages = [
				...updatedImages,
				{ url: image.url, alt: image.alt, id: image.id },
			];
		});

		setAttributes({ images: updatedImages });
	};

	const onSwiperClick = () =>
		wp.data.dispatch("core/block-editor").selectBlock(clientId);

	if (images.length === 0) {
		return (
			<MediaPlaceholder
				labels={{
					title: __("Images"),
					instructions: __(
						"Drag images, upload new ones or select files from your library."
					),
				}}
				onSelect={(images) => onImageSelect(images)}
				accept="image/*"
				allowedTypes={["image"]}
				multiple
				value={images}
			/>
		);
	}

	return [
		isSelected && (
			<Inspector attributes={attributes} setAttributes={setAttributes} />
		),
		<div>
			<Swiper
				spaceBetween={spaceBetween}
				slidesPerView={slidesPerView}
				navigation
				pagination={{ clickable: true }}
				scrollbar={{ draggable: true }}
				onClick={() => onSwiperClick()}
				onSwiper={(swiper) => console.log(swiper)}
				onSlideChange={() => console.log("slide change")}
			>
				{images.map((image) => (
					<SwiperSlide>
						<img src={image.url} alt={image.alt} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>,
	];
}
