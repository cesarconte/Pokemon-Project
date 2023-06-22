<script setup>
  /* import { RouterLink, RouterView } from 'vue-router' */
  import PokeHeader from './components/PokeHeader.vue'
  /* import PokeCard from './components/PokeCard.vue' */
  import PokeFooter from './components/PokeFooter.vue'
</script>

<template>
  <div id="app">
  <header>
    <PokeHeader msg="PokeHeader" />
      <nav>
        <!-- <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink> -->
      </nav>
  </header>
  <main>
   <!-- <PokeCard />-->
    <RouterView />
  </main>

  <footer>
    <PokeFooter />
  </footer>
  </div>
</template>

<style scoped>

</style>
