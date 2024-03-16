// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },
	modules: [
		'@nuxtjs/tailwindcss',
		'shadcn-nuxt',
		'@nuxt/image',
		'@pinia/nuxt',
	],
	shadcn: {
		prefix: 'Ui',
		componentDir: './components/ui',
	},
});
