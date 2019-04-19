<script>
/* eslint-disable no-new-func */

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
  render() {
    return this.templateRender ? this.templateRender() : <div>Rendering</div>
  }
}
</script>

<style lang="scss" scoped>
$main: #5E72E4;
$sec: #FFFFFF;
$lightGray: #F2F2F2;
$texts: #333333;
$colorcode: #3085F4;

img {
  max-width: 100%;
  margin: 1.875rem auto;
  display: block;
}
p, h1, h2, h3, h4, ul, ol, .tags, iframe {
  *zoom: 1;
  float: none;
  display: block;
  font-weight: 300;
  font-style: normal;
  font-size: 1.125rem;
  line-height: 2;
  letter-spacing: .01rem;
  &:before {
    content: '';
    display: table;
  }
  &:after {
    clear: both;
  }
}
p, li {
  color: $texts;
}
p code, li code {
  color: $colorcode;
}
a {
  font-weight: 300;
  font-style: normal;
  color: $colorcode;
  text-decoration: none;
  border-bottom: 2px solid $colorcode;
}
iframe {
  margin-top: 1.875rem;
  width: 100%;
}
h1, h2, h3, h4, h5 {
  font-weight: 800;
  margin-bottom: 10px;
  font-style: normal;
}
h1 {
  font-size: 2rem;
  line-height: 1.4;
}
h2 {
  font-size: 1.675rem;
  line-height: 1.4;
}
h3 {
  font-size: 1.425rem;
  line-height: 1.4;
}
ul, ol {
  padding-left: 2.5rem;
}
blockquote {
  *zoom: 1;
  width: auto;
  max-width: 45.625rem;
  float: none;
  display: block;
  margin-right: auto;
  margin-left: auto;
  padding-left: 0;
  padding-right: 0;
  border-left: .313rem solid $main;
  padding: 0 1.875rem;
  margin: 3.125rem auto;
  &:before {
    content: '';
    display: table;
  }
  &:after {
    content: '';
    display: table;
    clear: both;
  }
  p {
    color: rgba(0, 0, 0, 0.6);
    margin: 0;
  }
}
hr {
  *zoom: 1;
  width: auto;
  max-width: 47.5rem;
  float: none;
  display: block;
  margin-right: auto;
  margin-left: auto;
  padding-left: 0;
  padding-right: 0;
  border: 1px solid $lightGray;
  margin: 50px auto;
  &:before {
    content: '';
    display: table;
  }
  &:after {
    content: '';
    display: table;
    clear: both;
  }
}
</style>
