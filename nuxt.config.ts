// https://nuxt.com/docs/api/configuration/nuxt-config
import postcsspxtoviewport from 'postcss-px-to-viewport'
export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: {
    port: 3001
  },
  app: {
    head: {
      charset: "UTF-8",
      viewport: "width=device-width, initial-scale=1.0",
      title: "新禾数科",
      meta: [{ name: "description", content: "新禾数字科技（无锡）有限公司，是生态环境行业资深产品研发及经营团队创办的数字化高科技公司，致力于用AIoT和SaaS推动环保行业数字化变革，以SaaS方式提供端到端的软件及咨询服务，以订" },
      { name: "keywords", content: "新禾数科，新禾数字科技，环保数字化，大气环境平台"}
    ],
      script: [
        {
          // type: "text/javascript",
          src: "/js/wow.min.js",
          body: true
          
        },
        {
          // type: "text/javascript",
          src: "/js/baidu.js",
          body: true
        },
      ],
      link: [
        { rel: 'icon', type: "image/png", href: '/favicon.png' }
      ]
    },
  },
  modules: ["@nuxtjs/tailwindcss"],
  // build: {
  //   postcss: {
  //     postcssOptions: require('./postcss.config.js'),
  //   },
  // },
  postcss: {
      plugins: {
        "postcss-pxtorem": {
            rootValue: 16,
            unitToConvert: 'px', // 要转化的单位
            // viewportWidth: 1920, // UI设计稿的宽度
            unitPrecision: 5, // 转换后的精度，即小数点位数
            propList: ['font', 'font-size', 'line-height', 'letter-spacing'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
            // viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
            // fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
            selectorBlackList: ['el-'], // 指定不转换为视窗单位的类名,例如van-（vantUI组件），
            // minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
            mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
            replace: true, // 是否转换后直接更换属性值
            exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配，最好不要排除node_modules 文件，排除后在项目中会发现字体不能跟随页面放大
            landscape: false, // 是否处理横屏情况
            minPixelValue: 12, //px小于12的不会被转换
        },
      }
    },
  css: ['bootstrap/dist/css/bootstrap.min.css', '~/assets/style/animate.css','~/assets/fonts/iconfont.css', '~/assets/style/base.css'], // 全局css
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
