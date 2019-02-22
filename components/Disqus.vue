<script>
export default {
  props: {
    Title: String,
    Url: String
  },
  data: () => ({
    disqusLoaded: false
  }),
  render() {
    return (
      <div class="comments default white--text pa-2">
        <div class="my-1" id="disqus_thread"></div>
      </div>
    )
  },
  methods: {
    onScrollDisqus() {
      if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 800)) {
        if (this.disqusLoaded === false) this.loadDisqus()
      }
    },
    loadDisqus() {
      this.disqusLoaded = true
      const disqus_title = this.Title
      const disqus_url = this.Url
      const dsq = document.createElement('script')
      dsq.type = 'text/javascript'
      dsq.async = true
      dsq.src = 'https://sutanlab.disqus.com/embed.js'; (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq)
    }
  },
  beforeMount() {
    window.onscroll = this.onScrollDisqus
  },
  beforeDestroy() {
    this.disqusLoaded = true
  }
}
</script>