import Vue from 'vue'
import VueRouter from 'vue-router'
import Settings from '../components/Settings'
import Dashboard from '../components/Dashboard'
import Navbar from '../components/Navbar'
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Navbar',
        component: Navbar
    },
    {
        path: '/Dashboard',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/Settings',
        name: 'Settings',
        component: Settings
},

];

const router = new VueRouter({
    routes,
    mode: 'history',
    linkActiveClass: 'active',
});

export default router;