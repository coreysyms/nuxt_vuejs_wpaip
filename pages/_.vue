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
        <nuxt-link to="/" class="button--green">Home</nuxt-link>
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
  layout (context) {
    //you have to call the context here directly
    //access to mapState is not set yet
    return context.store.state.page.acf.template;
  },
  computed: {
    ...mapState({
      pageData: state => state.page
    })
  }
}
</script>
