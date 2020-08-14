/*
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import {
	BlockControls,
	MediaPlaceholder,
	MediaUpload,
} from "@wordpress/block-editor";
import { Toolbar, Button } from "@wordpress/components";

/*
 * External dependencies
 */
import SwiperCore, { A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";

SwiperCore.use([A11y]);

/*
 * Internal dependencies
 */
import Inspector from "./inspector";
import "./editor.scss";

export default function Edit({
	isSelected,
	clientId,
	attributes,
	setAttributes,
}) {
	const { images, slidesPerView, spaceBetween, speed } = attributes;

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

	const onSwiperClick = () => {
		// Select block when swiper is clicked
		wp.data.dispatch("core/block-editor").selectBlock(clientId);
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
		isSelected && (
			<Inspector attributes={attributes} setAttributes={setAttributes} />
		),
		<BlockControls>
			<Toolbar>
				<MediaUpload
					onSelect={(images) => onImageSelect(images)}
					allowedTypes={["image"]}
					multiple
					gallery
					value={images.map((img) => img.id)}
					render={({ open }) => (
						<Button
							className="components-toolbar__control"
							label={__("Edit gallery")}
							icon="edit"
							onClick={open}
						/>
					)}
				/>
			</Toolbar>
		</BlockControls>,

		<div>
			<Swiper
				spaceBetween={spaceBetween}
				speed={speed}
				slidesPerView={slidesPerView}
				onClick={() => onSwiperClick()}
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
