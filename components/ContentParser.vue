<script>
import Highlight from 'highlight.js'

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
  mounted() {
    for (const element of document.querySelectorAll('pre code')) {
      Highlight.highlightBlock(element)
    }
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