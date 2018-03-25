import Vue from 'vue'
import VueRouter from 'vue-router'
import Brands from './theme/Brands.vue'
import Flavors from './theme/Flavors.vue'
import Login from './theme/Login.vue'
import NotFound from './theme/NotFound.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    linkActiveClass: 'is-Active',
    scrollBehavior: (to, from, savedPosition) => ({ y: 0 }),
    routes: [
        { path: '/brands', component: Brands },
        { path: '/flavors', component: Flavors },
        { path: '/login', component: Login },
        { path: '/', redirect: '/main' },
        { path: '*', component: NotFound } 
    ]
})