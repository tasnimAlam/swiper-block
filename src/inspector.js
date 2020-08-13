import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";
import { PanelBody, ToggleControl, RangeControl } from "@wordpress/components";

export default function Inspector({ attributes, setAttributes }) {
	const {
		hasNavigation,
		hasPagination,
		hasScrollbar,
		slidesPerView,
		spaceBetween,
	} = attributes;
	return (
		<InspectorControls key="controls">
			<PanelBody>
				<ToggleControl
					label={__("Navigation")}
					checked={hasNavigation}
					onChange={() => setAttributes({ hasNavigation: !hasNavigation })}
				/>

				<ToggleControl
					label={__("Pagination")}
					checked={hasPagination}
					onChange={() => setAttributes({ hasPagination: !hasPagination })}
				/>

				<ToggleControl
					label={__("Scrollbar")}
					checked={hasScrollbar}
					onChange={() => setAttributes({ hasScrollbar: !hasScrollbar })}
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
			</PanelBody>
		</InspectorControls>
	);
}
