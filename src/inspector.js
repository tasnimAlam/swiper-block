import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";
import { PanelBody, ToggleControl, RangeControl } from "@wordpress/components";

export default function Inspector({ attributes, setAttributes }) {
	const { autoHeight, slidesPerView, spaceBetween, speed } = attributes;
	return (
		<InspectorControls key="controls">
			<PanelBody>
				<ToggleControl
					label={__("Auto Height")}
					help={!autoHeight && __("Frontend only")}
					checked={autoHeight}
					onChange={() => setAttributes({ autoHeight: !autoHeight })}
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
