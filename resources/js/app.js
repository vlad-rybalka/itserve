require('./bootstrap');

import App from './components/App'
import router from './router'
import store from './store'

const app = new Vue({
    el: '#app',
    store,
    router,
    render: h=>h(App)
});
