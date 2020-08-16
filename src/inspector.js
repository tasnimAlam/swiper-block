import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";
import {
	PanelBody,
	ToggleControl,
	RangeControl,
	SelectControl,
} from "@wordpress/components";

export default function Inspector({ attributes, setAttributes }) {
	const {
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
		parallax,
		thumbs,
		thumbsPerView,
		thumbSpaceBetween,
	} = attributes;
	return (
		<InspectorControls key="controls">
			<PanelBody>
				<p style={{ textAlign: "right" }}>
					<em>*</em> Visible only on frontend
				</p>

				<ToggleControl
					label={__(`Auto Height ${!autoHeight ? "*" : ""}`)}
					checked={autoHeight}
					onChange={() => setAttributes({ autoHeight: !autoHeight })}
				/>

				<ToggleControl
					label={__(`Autoplay ${!autoplay ? "*" : ""}`)}
					checked={autoplay}
					onChange={() => setAttributes({ autoplay: !autoplay })}
				/>

				<ToggleControl
					label={__("Loop")}
					checked={loop}
					onChange={() => setAttributes({ loop: !loop })}
				/>

				<ToggleControl
					label={__(`Free Mode ${!freeMode ? "*" : ""}`)}
					checked={freeMode}
					onChange={() => setAttributes({ freeMode: !freeMode })}
				/>

				<ToggleControl
					label={__(`Vertical Slide ${!vertical ? "*" : ""}`)}
					checked={vertical}
					onChange={() => setAttributes({ vertical: !vertical })}
				/>

				<ToggleControl
					label={__`Navigation ${!navigation ? "*" : ""}`}
					checked={navigation}
					onChange={() => setAttributes({ navigation: !navigation })}
				/>

				<ToggleControl
					label={__(`Pagination ${!pagination ? "*" : ""}`)}
					checked={pagination}
					onChange={() => setAttributes({ pagination: !pagination })}
				/>

				<ToggleControl
					label={__(`Scrollbar ${!scrollbar ? " *" : ""}`)}
					checked={scrollbar}
					onChange={() => setAttributes({ scrollbar: !scrollbar })}
				/>

				<ToggleControl
					label={__(`Parallax ${!parallax ? "*" : ""}`)}
					checked={parallax}
					onChange={() => setAttributes({ parallax: !parallax })}
				/>

				<ToggleControl
					label={__(`Grab Cursor ${!grabCursor ? "*" : ""}`)}
					checked={grabCursor}
					onChange={() => setAttributes({ grabCursor: !grabCursor })}
				/>

				<ToggleControl
					label={__("Thumbs")}
					checked={thumbs}
					onChange={() => setAttributes({ thumbs: !thumbs })}
				/>

				{thumbs && (
					<RangeControl
						label={__("Thumbs Per View")}
						value={thumbsPerView}
						min={1}
						max={10}
						onChange={(thumbsPerView) => setAttributes({ thumbsPerView })}
					/>
				)}

				{thumbs && (
					<RangeControl
						label={__("Thumbs Space Between")}
						value={thumbSpaceBetween}
						min={1}
						max={100}
						onChange={(thumbSpaceBetween) =>
							setAttributes({ thumbSpaceBetween })
						}
					/>
				)}

				<SelectControl
					label={__("Effect")}
					help={__("Visible only on frontend")}
					value={effect}
					options={[
						{ label: __("Slide"), value: "slide" },
						{ label: __("Fade"), value: "fade" },
						{ label: __("Cube"), value: "cube" },
						{ label: __("Coverflow"), value: "coverflow" },
						{ label: __("Flip"), value: "flip" },
					]}
					onChange={(effect) => setAttributes({ effect })}
				/>

				<RangeControl
					label={__("Slider Per View")}
					value={slidesPerView}
					min={1}
					max={10}
					onChange={(slidesPerView) => setAttributes({ slidesPerView })}
				/>

				<RangeControl
					label={__("Space Between Images")}
					value={spaceBetween}
					min={1}
					max={100}
					onChange={(spaceBetween) => setAttributes({ spaceBetween })}
				/>

				<RangeControl
					label={__("Speed")}
					value={speed}
					min={1}
					max={1000}
					onChange={(speed) => setAttributes({ speed })}
				/>
			</PanelBody>
		</InspectorControls>
	);
}
