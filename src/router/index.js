
import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../pages/HomePage.vue'
// import ConversionPage from './pages/ConversionPage.vue'

const routes = [
    { path: '/', name: 'homepage', component: HomePage },
    { path: '/conversion2', name: 'conversion', component: () => import('../pages/ConversionPage.vue') }
]

export default createRouter({ history: createWebHistory(), routes, linkActiveClass: 'router-link-active' })
