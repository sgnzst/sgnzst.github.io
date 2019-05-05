import path from 'path'
import Contents from './contents'

const routes = Contents.map(item => {
  item = `/blog/${item.name}`
  return item
})

const routesSitemap = () => {
  const result = []
  for (const route in routes) {
    const item = {}
    item.url = `${route}/`
    item.changefreq = 'daily'
    item.priority = 1
    item.lastmodISO = String(new Date().toISOString())
    result.push(item)
  }
  return result
}

export default {
  mode: 'universal', // spa or universal

  env: {
    PRODUCTION_URL: process.env.PRODUCTION_URL,
    AUTHOR: process.env.AUTHOR
  },

  server: {
    port: 8000,
    host: '0.0.0.0'
  },

  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        path: '*',
        redirect: '/'
      })
    },
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        let position = {}
        if (to.matched.length < 2) {
          position = { x: 0, y: 0 }
        } else if (
          to.matched.some(r => r.components.default.options.scrollToTop)
        ) {
          position = { x: 0, y: 0 }
        }
        if (to.hash) {
          position = { selector: to.hash }
        }
        return position
      }
    }
  },

  /*
  ** Headers of the page
  */
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#304165' },
      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-title', content: 'Sutanlab' },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:creator', content: '@sutan_gnst' },
      { name: 'twitter:site', content: '@sutan_gnst' },
      { property: 'og:site_name', content: 'Sutanlab' },
      { property: 'profile:username', content: 'sutanlab' },
      { name: 'google-site-verification', content: 'jLyr0TMCl7eKN6nXKMcBVQE7pq3XshkQCTutxZMwQW4' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Poppins:300,400,500,700|Courgette' }
    ],
    noscript: [
      { innerHTML: 'This website requires JavaScript :)', body: true }
    ]
  },

  generate: {
    routes
  },

  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://sutanlab.js.org',
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    generate: true,
    routes: routesSitemap()
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {
    continuous: true,
    height: '4px',
    color: '#11CDEF'
  },

  /* costumize manifest
  **
  */
  manifest: {
    name: 'Sutanlab',
    short_name: 'Sutanlab'
  },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/style/highlight.scss',
    '~/assets/style/ionicons.scss',
    '~/assets/style/global.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '@/plugins/index', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/pwa',
    '@nuxtjs/vuetify',
    '@nuxtjs/sitemap',
    [
      '@nuxtjs/google-analytics',
      { id: 'UA-135036153-1' }
    ]
  ],

  vuetify: {
    treeShake: true,
    theme: {
      default: '#172B4D',
      primary: '#5E72E4',
      secondary: '#F4F5F7',
      accent: '#8965E0',
      info: '#11CDEF',
      success: '#2DCE89',
      warning: '#FB6340',
      error: '#F5365C'
    }
  },

  /*
  ** Build configuration
  */
  build: {
    maxChunkSize: 100000,
    extractCSS: true,

    optimization: {
      minimize: true,
      splitChunks: {
        chunks: 'all',
        automaticNameDelimiter: '.',
        name: true,
        cacheGroups: {},
        minSize: 100000,
        maxSize: 100000
      }
    },

    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save (disabled)
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }

      config.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        include: path.resolve(__dirname, 'contents'),
        options: {
          vue: {
            root: 'posts'
          }
        }
      })
    }
  }
}
