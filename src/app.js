import Vue from 'vue'
import AppLayout from './theme/Layout.vue'
import router from './router'

//  have to add the router to the app const
//  holding the base Vue component
//  have to export both the app const and the
//  router
console.log(AppLayout)
const app = new Vue({
  router,
  ...AppLayout
})

export { app, router }
