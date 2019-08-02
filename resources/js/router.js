import PostsPage from './components/PostsPage'
import AddPostPage from './components/AddPostPage'
import VueRouter from 'vue-router';

const routes = [
    { path: '/', name: 'home', redirect: '/posts' },
    { path: '/posts', name: 'posts', component: PostsPage},
    { path: '/posts/add', name: 'posts-add', component: AddPostPage}
]

export default new VueRouter({
    routes,
    mode: 'history'
})