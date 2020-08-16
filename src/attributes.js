const attributes = {
	autoHeight: {
		type: "boolean",
		default: false,
	},
	vertical: {
		type: "boolean",
		default: false,
	},
	images: {
		type: "array",
		default: [],
	},
	slidesPerView: {
		type: "number",
		default: 1,
	},
	spaceBetween: {
		type: "number",
		default: 0,
	},
	speed: {
		type: "number",
		default: 300,
	},
	effect: {
		type: "string",
		default: "slide",
	},
	grabCursor: {
		type: "boolean",
		default: false,
	},
	freeMode: {
		type: "boolean",
		default: false,
	},
	loop: {
		type: "boolean",
		default: false,
	},
	navigation: {
		type: "boolean",
		default: false,
	},
	pagination: {
		type: "boolean",
		default: false,
	},
	scrollbar: {
		type: "boolean",
		default: false,
	},
	autoplay: {
		type: "boolean",
		default: false,
	},
	autoplayDelay: {
		type: "number",
		default: 3000,
	},
	parallax: {
		type: "boolean",
		default: false,
	},
	thumbs: {
		type: "boolean",
		default: false,
	},
	thumbsPerView: {
		type: "number",
		default: 3,
	},
	thumbSpaceBetween: {
		type: "number",
		default: 10,
	},
};

export default attributes;
