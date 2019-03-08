import { getMatchedComponents } from '~/.nuxt/utils'
import Contents from '~/contents'

// Static middleware to update `asyncData/fetch` when using `nuxt generate`
export default ({ route }) => {
  if (process.static) {
    const Components = getMatchedComponents(route)
    Components.forEach(Component => {
      const cleanPath = route.path.replace('/', '')
      const isPageDetail = Contents.find(item => item === cleanPath)

      if (typeof isPageDetail !== 'undefined') {
        console.log(Component.name, route.path)
        Component.options.asyncData = async function () {
          const fileContent = await import(`~/contents/posts${route.path}/index.md`)
          return {
            meta: { ...fileContent.attributes },
            renderFn: fileContent.vue.render,
            staticRenderFn: fileContent.vue.staticRenderFns
          }
        }
      }
    })
  }
}
