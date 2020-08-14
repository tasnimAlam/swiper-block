import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";
import { PanelBody, RangeControl } from "@wordpress/components";

export default function Inspector({ attributes, setAttributes }) {
	const { slidesPerView, spaceBetween } = attributes;
	return (
		<InspectorControls key="controls">
			<PanelBody>
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
			</PanelBody>
		</InspectorControls>
	);
}
