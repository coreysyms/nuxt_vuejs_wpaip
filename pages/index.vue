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
          href="https://github.com/nuxt/nuxt.js"
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
			title: this.pageData.meta_short_title || 'BridgeBio | people',
			meta: [
				{ hid: 'description', name: 'description', content: this.pageData.meta_description || 'Targeting Genetic Diseases at Their Source' },
				{ property: 'og:title', content: this.pageData.meta_short_title || 'BridgeBio | people' },
				{ property: 'og:description', content: this.pageData.meta_description || 'Targeting Genetic Diseases at Their Source' },
				{ property: 'og:type', content: 'website' },
				{ property: 'og:image', content: this.pageData.meta_share_image ? 'https://bbio2019.azurewebsites.net' + this.pageData.meta_share_image : 'https://bbio2019.azurewebsites.net/wp-content/uploads/2019/02/BridgeBio_Share.png' },
				{ name: 'twitter:card', content: 'summary_large_image' },
				{ name: 'twiter:description', content: this.pageData.meta_description || 'Targeting Genetic Diseases at Their Source' },
        { name: 'twitter:image', content: this.pageData.meta_share_image ? 'https://bbio2019.azurewebsites.net' + this.pageData.meta_share_image : 'https://bbio2019.azurewebsites.net/wp-content/uploads/2019/02/BridgeBio_Share.png' }
      ]
		}
	},
  computed: {
    ...mapState({
      pageData: state => state.page
    })
  }
}
</script>
