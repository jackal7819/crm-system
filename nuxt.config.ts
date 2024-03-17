// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			title: 'CRM ViKTor',
			meta: [
				{ name: 'description', content: 'The CRM for the my Company' },
			],
			link: [{ rel: 'icon', type: 'image/svg+xml', href: '/pinia.svg' }],
		},
	},
	devtools: { enabled: false },
	modules: [
		'@nuxtjs/tailwindcss',
		'shadcn-nuxt',
		'@nuxt/image',
		'@pinia/nuxt',
		'@nuxtjs/google-fonts',
		'nuxt-icon',
	],
	shadcn: {
		prefix: 'Ui',
		componentDir: './components/ui',
	},
	googleFonts: {
		families: {
			'Montserrat+Alternates': {
				wght: [100, 200, 300, 400, 500, 600, 700, 800, 900],
			},
		},
	},
});
