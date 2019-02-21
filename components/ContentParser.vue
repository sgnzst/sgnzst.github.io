<script>
import Highlight from 'highlight.js'
import 'highlight.js/styles/dracula.css'

export default {
  props: {
    renderFn: {
      type: String,
      default: ''
    },
    staticRenderFn: {
      type: String,
      default: ''
    }
  },
  created() {
    this.templateRender = new Function(this.renderFn)()
    this.$options.staticRenderFns = new Function(this.staticRenderFn)()
  },
  mounted () {
    Highlight.initHighlightingOnLoad()
  },
  render(createElement) {
    return this.templateRender ? this.templateRender() : createElement('div', 'Rendering')
  }

}
</script>

<style lang="scss" scoped>
a {
  color: var(--textHighlight);
  text-decoration: underline;
}
</style>