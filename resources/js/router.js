import Home from './components/Home'
import VueRouter from 'vue-router';

const routes = [
    { path: '/', component: Home}
]

export default new VueRouter({
    routes,
    mode: 'history'
})