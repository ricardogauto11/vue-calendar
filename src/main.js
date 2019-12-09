import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueTextareaAutosize from 'vue-textarea-autosize'
import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.use(VueTextareaAutosize)
Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyA2aW6nA8OKi1bS__gXPg9EgQk_MhWY6Y8",
  authDomain: "vue-calendar-c257f.firebaseapp.com",
  databaseURL: "https://vue-calendar-c257f.firebaseio.com",
  projectId: "vue-calendar-c257f",
  storageBucket: "vue-calendar-c257f.appspot.com",
  messagingSenderId: "1092434679029",
  appId: "1:1092434679029:web:1080378642fe4ff1fe21bc",
  measurementId: "G-7GTN6EYZK3"
})

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
