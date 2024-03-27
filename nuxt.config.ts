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
		'shadcn-nuxt',
		'@nuxt/image',
		'@pinia/nuxt',
		'@nuxtjs/google-fonts',
		'nuxt-icon',
		'@vee-validate/nuxt',
		'@nuxt/ui',
	],
	veeValidate: {
		autoImports: true,
	},
	shadcn: {
		prefix: 'Ui',
		componentDir: './components/ui',
	},
	pinia: {
		storesDirs: ['./stores/**'],
	},
	googleFonts: {
		families: {
			'Montserrat+Alternates': {
				wght: [100, 200, 300, 400, 500, 600, 700, 800, 900],
			},
		},
	},
	runtimeConfig: {
		public: {
			appWriteId: process.env.APP_WRITE_ID,
			dBId: process.env.DB_ID,
			collectionsDeals: process.env.COLLECTION_DEALS,
			collectionCustomers: process.env.COLLECTION_CUSTOMERS,
			collectionComments: process.env.COLLECTION_COMMENTS,
			storageId: process.env.STORAGE_ID,
		},
	},
});
