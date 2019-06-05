<template>
  <main class="dev">
    <navbar />
    <header>
    </header>
    <nuxt />
    
    <footer>
      <div class="templateID"><code>Template: Default</code></div>
      <footerNav />
    </footer>
  </main>
</template>


<script>
import navbar from '@/components/nav';
import footerNav from '@/components/footerNav'

export default {
  components: {
    navbar,
    footerNav
  }  
}
</script>