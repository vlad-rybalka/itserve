import Home from './components/Home'
import AddPost from './components/AddPost'
import VueRouter from 'vue-router';

const routes = [
    { path: '/', component: Home},
    { path: '/posts/add', component: AddPost}
]

export default new VueRouter({
    routes,
    mode: 'history'
})