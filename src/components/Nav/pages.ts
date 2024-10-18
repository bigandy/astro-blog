const pages: {
	[key: string]: {
		url: string
		title: string
		header: boolean
		external?: boolean
	}
} = {
	'sites-i-like': {
		url: '/sites-i-like',
		title: 'Sites I like',
		header: false,
	},

	about: {
		url: '/about',
		title: 'About',
		header: false,
	},

	demos: {
		url: '/experiments',
		title: 'Experiments',
		header: false,
	},

	tools: {
		url: '/tools',
		title: 'Tools',
		header: false,
	},

	now: {
		url: '/now',
		title: 'Now',
		header: false,
	},

	blog: {
		url: '/blog',
		title: 'Archive',
		header: true,
	},

	weeknotes: {
		url: '/weeknotes',
		title: 'Weeknotes',
		header: true,
	},

	bookshelf: {
		url: '/bookshelf',
		title: 'Bookshelf',
		header: true,
	},

	cv: {
		// url: 'https://cv.andrewhudson.dev',
		url: '/cv',
		// external: true,
		title: 'CV',
		header: true,
	},
}

export const headerPages = Object.values(pages).filter(({ header }) =>
	Boolean(header),
)

export const footerPages = Object.values(pages).filter(({ header }) => !header)
