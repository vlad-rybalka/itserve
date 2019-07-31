require('./bootstrap');

window.Vue = require('vue');

Vue.use(BootstrapVue)
Vue.use(VueRouter)


import App from './components/App'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router';
import router from './router'

const app = new Vue({
    el: '#app',
    router,
    render: h=>h(App)
});
