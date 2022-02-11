import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'docs',
			assets: 'docs',
		}),
		amp: true,
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		// browser: {
		// 	hydrate: false,
		// 	router: false
		// },

		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		},
		prerender: {
			createIndexFiles: false,
			crawl: true,
			enabled: true,
		},
		// trailingSlash: 'always'
	}
};

export default config;
