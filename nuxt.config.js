import path from 'path'
import nodeExternals from 'webpack-node-externals'
import pkg from './package.json'
import Contents from './contents'

const productionUrl = 'https://sutanlab.js/org'
const appTitle = 'Sutan Nst. - Coder'

const routes = Contents.map(item => {
  item = `/blog/${item.name}`
  return item
})

const routesSitemap = () => {
  const res = []
  routes.forEach(el => {
    const item = {}
    item.url = el + '/'
    item.changefreq = 'daily'
    item.priority = 1
    item.lastmodISO = String(new Date().toISOString())
    res.push(item)
  })
  return res
}

export default {
  mode: 'spa', // spa or universal

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
    title: appTitle,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'title', content: appTitle },
      { name: 'author', content: pkg.author },
      { name: 'description', content: pkg.description },
      {
        name: 'keywords',
        content:
          'sutan nst, sutan gading fadhillah nasution, sutan, gading, fadhillah, nasution, sgnzst, sutanlab, sutan lab, coder, mahasiswa, it polsri, itpolsri, polsri, politeknik negeri sriwijaya'
      },

      { name: 'theme-color', content: '#304165' },
      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-title', content: appTitle },
      { property: 'profile:username', content: 'sutanlab' },

      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: '/icon.png' },
      { property: 'og:image:secure_url', content: '/icon.png' },
      { property: 'og:image:width', content: '512' },
      { property: 'og:image:height', content: '512' },
      { property: 'og:title', content: appTitle },
      { property: 'og:description', content: pkg.description },
      { property: 'og:site_name', content: appTitle },
      { property: 'og:url', content: productionUrl },
      { property: 'og:updated_time', content: new Date().toISOString() },

      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:creator', content: '@sutan_gnst' },
      { name: 'twitter:site', content: '@sutan_gnst' },
      { name: 'twitter:image:src', content: '/icon.png' },
      { name: 'twitter:title', content: appTitle },
      { name: 'twitter:description', content: pkg.description },
      { name: 'twitter:url', content: productionUrl },

      { name: 'google-site-verification', content: 'jLyr0TMCl7eKN6nXKMcBVQE7pq3XshkQCTutxZMwQW4' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Poppins:300,400,500,700|Courgette' }
    ]
  },

  generate: {
    routes
  },

  sitemap: {
    path: '/sitemap.xml',
    hostname: productionUrl,
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
    '~/assets/style/preloader.scss',
    '~/assets/style/global.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '@/plugins/global', ssr: false },
    { src: '@/plugins/ionicons', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
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
    optimization: {
      splitChunks: {
        chunks: 'all',
        automaticNameDelimiter: '.',
        name: true,
        cacheGroups: {},
        minSize: 100000,
        maxSize: 100000
      }
    },
    maxChunkSize: 100000,
    extractCss: {
      allChunks: true
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

      if (ctx.isServer) {
        config.externals = [
          nodeExternals({
            whitelist: [/^vuetify/]
          })
        ]
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
