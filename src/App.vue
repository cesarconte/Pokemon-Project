<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import PokeHeader from './components/PokeHeader.vue'
  import PokeCard from './components/PokeCard.vue'
  import PokeFooter from './components/PokeFooter.vue'
  import axios from 'axios'
</script>

<template>

  <header>
    <PokeHeader msg="pokerHeader" />
      <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
  </header>
  <main>
    <RouterView />
  </main>

  <footer>
    <PokeFooter />
  </footer>

</template>

<style scoped>

</style>
