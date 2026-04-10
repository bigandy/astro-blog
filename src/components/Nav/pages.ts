const pages: {
	[key: string]: {
		url: string;
		title: { default: string; fr?: string };
		location: "header" | "footer";
		external?: boolean;
	};
} = {
	about: {
		url: "/about/",
		title: {
			default: "About",
			fr: "À propos",
		},
		location: "header",
	},

	demos: {
		url: "/experiments/",
		location: "footer",
		title: {
			default: "Experiments",
			fr: "Expériences",
		},
	},

	blog: {
		url: "/",
		title: {
			default: "Archive",
			fr: "Les Archives",
		},
		location: "header",
	},

	weeknotes: {
		url: "/weeknotes/",
		location: "header",
		title: {
			default: "Weeknotes",
		},
	},

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
		location: "header",
	},

	cv: {
		url: "/cv/",
		location: "header",
		title: {
			default: "CV",
			fr: "CV",
		},
	},

	rss: {
		url: "/rss.xml",
		location: "footer",
		title: {
			default: "RSS",
			fr: "RSS",
		},
	}
};

export const headerPages = Object.values(pages).filter(({ location }) =>
	["header"].includes(location),
);

export const footerPages = Object.values(pages).filter(({ location }) =>
	["footer"].includes(location),
);
