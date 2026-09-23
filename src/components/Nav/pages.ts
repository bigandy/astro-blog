const pages: {
	[key: string]: {
		url: string;
		title: { default: string; fr?: string };
		location: "header" | "footer";
	};
} = {
	about: {
		url: "/about/",
		title: {
			default: "About",
			fr: "À propos",
		},
		location: "footer",
	},

	demos: {
		url: "/experiments/",
		title: {
			default: "Experiments",
			fr: "Expériences",
		},
		location: "footer",
	},

	// blog: {
	// 	url: "/",
	// 	title: {
	// 		default: "Archive",
	// 		fr: "Les Archives",
	// 	},
	// 	location: "header",
	// },

	// weeknotes: {
	// 	url: "/weeknotes/",
	// 	title: {
	// 		default: "Weeknotes",
	// 	},
	// 	location: "header",
	// },

	now: {
		url: "/now/",
		title: {
			default: "Now",
			fr: "Maintenant",
		},
		location: "footer",
	},

	bookshelf: {
		url: "/bookshelf/",
		title: {
			default: "Bookshelf",
			fr: "Bibliothèque",
		},
		location: "footer",
	},

	cv: {
		url: "/cv/",
		title: {
			default: "CV",
			fr: "CV",
		},
		location: "footer",
	},

	bsky: {
		url: "/bsky-feed/",
		title: {
			default: "Bluesky Feed",
			fr: "Bluesky Feed",
		},
		location: "footer",
	},

	rss: {
		url: "/rss.xml",
		title: {
			default: "RSS",
			fr: "RSS",
		},
		location: "footer",
	},
};

export const headerPages = Object.values(pages).filter(({ location }) =>
	["header"].includes(location),
);

export const footerPages = Object.values(pages).filter(({ location }) =>
	["footer"].includes(location),
);
