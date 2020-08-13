const attributes = {
	images: {
		type: "array",
		default: [],
	},
	hasNavigation: {
		type: "boolean",
		default: false,
	},
	hasPagination: {
		type: "boolean",
		default: false,
	},
	hasScrollbar: {
		type: "boolean",
		default: false,
	},
	slidesPerView: {
		type: "number",
		default: 1,
	},
	spaceBetween: {
		type: "number",
		default: 0,
	},
};

export default attributes;
