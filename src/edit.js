/*
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { MediaPlaceholder } from "@wordpress/block-editor";

/*
 * External dependencies
 */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";

/*
 * Internal dependencies
 */
import "./editor.scss";
import Inspector from "./inspector";

export default function Edit({ isSelected, attributes, setAttributes }) {
	const { images } = attributes;

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
		isSelected && <Inspector />,
		<div>
			<Swiper
				spaceBetween={50}
				slidesPerView={1}
				onSlideChange={() => console.log("slide change")}
				onSwiper={(swiper) => console.log(swiper)}
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
