// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      charset: "UTF-8",
      viewport: "width=device-width, initial-scale=1.0",
      title: "加速器",
      meta: [{ name: "description", content: "加速器" }],
    },
  },
  modules: ["@nuxtjs/tailwindcss"],
  css: ['bootstrap/dist/css/bootstrap.min.css', '~/assets/style/animate.css','~/assets/style/base.css'], // 全局css
  vite: {
		css: {
			preprocessorOptions: {
				less: {
					additionalData: '@import "assets/style/var.less";',
				}
			}
		}
	}
})
