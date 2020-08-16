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
import { useState, useEffect } from "@wordpress/element";

/*
 * External dependencies
 */
import SwiperCore, {
	A11y,
	Navigation,
	Pagination,
	Scrollbar,
	Thumbs,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/thumbs/thumbs.scss";

SwiperCore.use([A11y, Navigation, Pagination, Scrollbar, Thumbs]);

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
	const {
		images,
		autoHeight,
		slidesPerView,
		spaceBetween,
		speed,
		vertical,
		loop,
		thumbs,
		thumbsPerView,
		thumbSpaceBetween,
	} = attributes;

	const [swiper, setSwiper] = useState(null);
	const [thumbSwiper, setThumbSwiper] = useState(null);
	const [options, setOptions] = useState({});

	useEffect(() => {
		let options = {};

		options.autoHeight = autoHeight;
		options.slidesPerView = slidesPerView;
		options.speed = speed;
		options.spaceBetween = spaceBetween;
		options.loop = loop;

		console.log(options);

		setOptions(options);
	}, [autoHeight, slidesPerView, spaceBetween, speed, vertical, loop]);

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
				{...options}
				thumbs={{
					swiper: thumbSwiper,
				}}
				onSwiper={setSwiper}
				onClick={() => onSwiperClick()}
				onSlideChange={() => console.log("slide change")}
			>
				{images.map((image) => (
					<SwiperSlide>
						<img src={image.url} alt={image.alt} />
					</SwiperSlide>
				))}
			</Swiper>

			<div style={{ display: thumbs ? "block" : "none" }}>
				<Swiper
					onSwiper={setThumbSwiper}
					slidesPerView={thumbsPerView}
					spaceBetween={thumbSpaceBetween}
				>
					{images.map((image) => (
						<SwiperSlide>
							<img src={image.url} alt={image.alt} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>,
	];
}
