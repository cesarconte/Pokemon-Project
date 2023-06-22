//Vuetify 
// import Vue from 'vue';
// import Vuetify from 'vuetify';
// Vue.use(Vuetify);
// import 'vuetify/styles'
// import * as components from 'vuetify/components'
// import * as directives from 'vuetify/directives'
// import 'vuetify/dist/vuetify.min.css';
// import { createVuetify } from 'vuetify/lib/framework.mjs'

import { createApp } from 'vue'
import App from './App.vue'

import axios from 'axios'
import './assets/main.css'

// import { createPinia } from 'pinia'

import router from './router'

const app = createApp(App)

// Instancia de Vuetify
// const vuetify = createVuetify({
//     components,
//     directives
// })

app.mount('#app')
// app.use(vuetify)
app.use(router)
app.use(axios)
