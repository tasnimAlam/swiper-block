import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";

import "./style.scss";
import Edit from "./edit";
import save from "./save";
import attributes from "./attributes";

registerBlockType("create-block/swiper-slider", {
	title: __("Swiper Slider", "create-block"),
	description: __(
		"Most Modern Mobile Touch Slider now in gutenberg.",
		"create-block"
	),
	category: "widgets",
	icon: "smiley",
	attributes,
	edit: Edit,
	save,
});
