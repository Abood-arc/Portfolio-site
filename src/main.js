import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { reveal } from './directives/reveal'
import { parallax } from './directives/parallax'

createApp(App).use(router).directive('reveal', reveal).directive('parallax', parallax).mount('#app')
