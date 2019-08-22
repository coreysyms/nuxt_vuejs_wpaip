<template>
  <section class="container">
    <div>
      <h1 class="title">
        {{ pageData.acf.meta_short_title }}<br/><small>boilerplate</small>
      </h1>
      <h2 class="subtitle">
        starter pack for API connected frontend
      </h2>
      <div class="links">
        <nuxt-link to="/about-us" class="button--green">About Us</nuxt-link>
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >Documentation</a>
        <a
          href="https://github.com/coreysyms/nuxt_vuejs_wpaip"
          target="_blank"
          class="button--grey"
        >GitHub</a>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  layout: 'default',
  head () {
		return {
			title: this.pageData.meta_short_title || this.pageMeta.title,
			meta: [
				{ hid: 'description', name: 'description', content: this.pageData.meta_description || this.pageMeta.description },
				{ property: 'og:title', content: this.pageData.meta_short_title || this.pageMeta.title },
				{ property: 'og:description', content: this.pageData.meta_description || this.pageMeta.description },
				{ property: 'og:image', content: this.pageData.meta_share_image ? this.state.contentBaseURL + this.pageData.meta_share_image : this.pageMeta.shareImage },
				{ name: 'twiter:description', content: this.pageData.meta_description || this.pageMeta.description },
        { name: 'twitter:image', content: this.pageData.meta_share_image ? this.state.contentBaseURL + this.pageData.meta_share_image :  this.pageMeta.shareImage }
      ]
		}
	},
  computed: {
    ...mapState({
      pageData: state => state.page,
      pageMeta: state => state.pageMeta,
      contentBaseURL: state => state.contentBaseURL
    })
  }
}
</script>
