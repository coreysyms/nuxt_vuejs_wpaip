<template>
  <main class="landing">
    <navbar />
    <header>
    </header>
    <nuxt />
    
    <footer>
      <div class="templateID"><code>Template: Landing</code></div>
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