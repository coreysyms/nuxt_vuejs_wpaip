<template>
  <section class="container">
    <div>
      <logo />
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
import Logo from '~/components/Logo.vue'
import { mapState } from 'vuex'

export default {
  components: {
    Logo
  },
  layout: 'default',
  computed: {
    ...mapState({
      pageData: state => state.page
    })
  },
  transition:'page'
}
</script>
