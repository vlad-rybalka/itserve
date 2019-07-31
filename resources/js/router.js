import Posts from './components/Posts'
import AddPost from './components/AddPost'
import VueRouter from 'vue-router';

const routes = [
    { path: '/', name: 'home', redirect: '/posts' },
    { path: '/posts', name: 'posts', component: Posts},
    { path: '/posts/add', name: 'posts-add', component: AddPost}
]

export default new VueRouter({
    routes,
    mode: 'history'
})