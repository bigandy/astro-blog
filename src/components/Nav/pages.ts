const pages: {
	[key: string]: {
		url: string
		title: string
		location: 'header' | 'footer' | 'both'
		external?: boolean
	}
} = {
	'sites-i-like': {
		url: '/sites-i-like',
		title: 'Sites I like',
		location: 'footer',
	},

	about: {
		url: '/about',
		title: 'About',
		location: 'footer',
	},

	demos: {
		url: '/experiments',
		title: 'Experiments',
		location: 'footer',
	},

	tools: {
		url: '/tools',
		title: 'Tools',
		location: 'footer',
	},

	blog: {
		url: '/blog',
		title: 'Archive',
		location: 'header',
	},

	weeknotes: {
		url: '/weeknotes',
		title: 'Weeknotes',
		location: 'header',
	},

	bookshelf: {
		url: '/bookshelf',
		title: 'Bookshelf',
		location: 'header',
	},

	cv: {
		url: 'https://cv.andrewhudson.dev',
		title: 'CV',
		location: 'header',
		external: true,
	},
	now: {
		url: '/now',
		title: 'Now',
		location: 'both',
	},
}

export const headerPages = Object.values(pages).filter(({ location }) =>
	['header', 'both'].includes(location),
)

export const footerPages = Object.values(pages).filter(({ location }) =>
	['footer', 'both'].includes(location),
)
