<script >
   // import { RouterLink, RouterView } from 'vue-router'
  //import PokeHeader from './components/PokeHeader.vue'
  // import PokeCard from './components/PokeCard.vue'
  //import PokeFooter from './components/PokeFooter.vue'

  export default {
    name: 'App',
  }
  
</script> 

<template>
  <div>
    <header>
      <PokeHeader/>
    </header>
    <main>
      <RouterView />
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </main>
  
    <footer>
      <PokeFooter />
    </footer>


  </div>

</template>

<style scoped>

</style>
