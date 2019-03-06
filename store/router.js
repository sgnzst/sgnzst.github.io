export default {
  namespaced: true,
  state: () => ({
    homepage: {
      show: false,
      routes: [
        'index'
      ]
    }
  }),
  mutations: {
    watchRoutes(state, routeName) {
      state.homepage.show = (state.homepage.routes.indexOf(routeName) > -1)
    }
  },
  getters: {
    isHomepage: state => state.homepage.show
  }
}
