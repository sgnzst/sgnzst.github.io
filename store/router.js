export default {
  namespaced: true,
  state: () => ({
    homepage: {
      show: false,
      routes: [
        'index'
      ]
    },
    content: {
      show: false,
      routes: [
        'blog-slug'
      ]
    }
  }),
  mutations: {
    watchRoutes(state, routeName) {
      state.homepage.show = (state.homepage.routes.indexOf(routeName) > -1)
      state.content.show = (state.content.routes.indexOf(routeName) > -1)
    }
  },
  getters: {
    isHomepage: state => state.homepage.show
  }
}
