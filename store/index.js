export default {
  state: () => ({
    menu: [
      { title: 'Home', icon: 'home', target: '#banner-figure' },
      { title: 'Biodata', icon: 'person', target: '#nuxt-content' },
      { title: 'Blogs', icon: 'chrome_reader_mode', href: '/blog' }
    ],
    scroll: {
      options: {
        duration: 750,
        offset: 40,
        easing: 'easeInOutQuart'
      }
    },
    sidebar: {
      visible: null
    }
  }),
  mutations: {
    setSidebar(state, payload) {
      state.sidebar.visible = payload
    },
    setScrollOptions(state, payload) {
      state.scroll.options.duration = payload.duration || state.scroll.options.duration
      state.scroll.options.offset = payload.offset || state.scroll.options.offset
      state.scroll.options.easing = payload.easing || state.scroll.options.easing
    }
  }
}
