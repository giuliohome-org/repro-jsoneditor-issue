import './assets/main.css'

import { createApp } from 'vue'
import JsonEditorVue from 'json-editor-vue'

import App from './App.vue'

createApp(App)
  .use(JsonEditorVue, {
    "mode":"text", "mainMenuBar": false
  }).mount('#app')
