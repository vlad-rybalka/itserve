import PostsPage from '../views/PostsPage'
import PostPage from '../views/PostPage'
import AddPostPage from '../views/AddPostPage'
import VueRouter from 'vue-router';

const routes = [
    { path: '/', name: 'home', redirect: '/posts' },
    { path: '/posts', name: 'posts', component: PostsPage},
    { path: '/posts/add', name: 'post-add', component: AddPostPage},
    { path: '/posts/:id', name: 'post-show', component: PostPage},
]

export default new VueRouter({
    routes,
    mode: 'history'
})