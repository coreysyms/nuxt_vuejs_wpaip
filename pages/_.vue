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
import Logo from '~/components/Logo.vue'
import { mapState } from 'vuex'

export default {
  components: {
    Logo
  },
  layout (context) {
    //you have to call the context here directly
    //access to mapState is not set yet
    return context.store.state.pageData.acf.template;
  },
  computed: {
    ...mapState({
      pageData: state => state.pageData
    })
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
