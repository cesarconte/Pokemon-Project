<template>
   <div class="poke-card" :class="pokemonClass">
    <div class="image-section">
      <img v-if="pokemon.imageUrl" :src="pokemon.imageUrl" :alt="pokemon.name" class="pokemon-image" />
    </div>
    <div class="info-row">
      <div class="info-item">
        <span class="info-label">ID:</span>
        <span class="info-value">{{ pokemon.id }}</span>
      </div>
      <div class="info-item">
        <span class="info-label">Name:</span>
        <span class="info-value">{{ pokemon.name }}</span>
      </div>
    </div>
    <div class="info-row">
      <div class="info-item">
        <span class="info-label">Type:</span>
        <span class="info-value">{{ pokemon.type }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted, watch, computed } from 'vue'
import axios from 'axios'

const pokemon = reactive({
  id: '',
  name: '',
  imageUrl: '',
  type: ''
})

const fetchPokemonData = (id) => {
  axios
    .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(response => {
      const data = response.data
      pokemon.id = data.id
      pokemon.name = data.name
      pokemon.imageUrl = data.sprites.front_default
      pokemon.type = data.types[0].type.name
    })
    .catch(error => {
      console.log(error)
    })
}

// Propiedad que representa el número de ID del Pokémon
let pokemonId = 587

// Vigila los cambios en la propiedad pokemonId
watch(() => pokemonId, (newPokemonId) => {
  fetchPokemonData(newPokemonId)
})

onMounted(() => {
  fetchPokemonData(pokemonId) // Carga el Pokémon inicialmente
})

// Mapeo de tipos de Pokémon con colores
/*const typeColors = {
  normal: '#F5F5F5',
  fire: '#F08030',
  water: '#6890F0',
  electric: '#F8D030',
  grass: '#78C850',
  ice: '#98D8D8',
  fighting: '#C03028',
  poison: '#A040A0',
  ground: '#E0C068',
  flying: '#A890F0',
  psychic: '#F85888',
  bug: '#A8B820',
  rock: '#B8A038',
  ghost: '#705898',
  dragon: '#7038F8',
  dark: '#705848',
  steel: '#B8B8D0',
  fairy: '#EE99AC'
}*/

// Clase dinámica basada en el tipo de Pokémon
const pokemonClass = computed(() => {
  const type = pokemon.type.toLowerCase()
  return `poke-card ${type}`
})
</script>

<style scoped>
.poke-card {
  border: 1px solid #ccc;
  padding: 1rem;
  margin: 1rem;
  width: 30vw;
  height: 30vw;
  border-radius: 8px;
  background-color:ghostwhite;
}

.image-section {
  height: calc(3/4 * 100%);
  background-color: var(--pokemon-color);
  display: flex;
  align-items: center;
  justify-content: center;
}

.pokemon-image {
  height: 100%;
  width: auto;
}

.info-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.info-item {
  display: flex;
  align-items: center;
}

.info-label {
  font-weight: bold;
  margin-right: 0.5rem;
}

.info-value {
  font-weight: bold;
}

/* Colores de fondo de acuerdo al tipo de Pokémon */
.poke-card.normal {
  --pokemon-color: #F1F1F1;
}

.poke-card.fire {
  --pokemon-color: #F08030;
}

.poke-card.water {
  --pokemon-color: #6890F0;
}

.poke-card.electric {
  --pokemon-color: #F8D030;
}

.poke-card.grass {
  --pokemon-color: #78C850;
}

.poke-card.ice {
  --pokemon-color: #98D8D8;
}

.poke-card.fighting {
  --pokemon-color: #C03028;
}

.poke-card.poison {
  --pokemon-color: #A040A0;
}

.poke-card.ground {
  --pokemon-color: #E0C068;
}

.poke-card.flying {
  --pokemon-color: #A890F0;
}

.poke-card.psychic {
  --pokemon-color: #F85888;
}

.poke-card.bug {
  --pokemon-color: #A8B820;
}

.poke-card.rock {
  --pokemon-color: #B8A038;
}

.poke-card.ghost {
  --pokemon-color: #705898;
}

.poke-card.dragon {
  --pokemon-color: #7038F8;
}

.poke-card.dark {
  --pokemon-color: #705848;
}

.poke-card.steel {
  --pokemon-color: #B8B8D0;
}

.poke-card.fairy {
  --pokemon-color: #EE99AC;
}
</style>
