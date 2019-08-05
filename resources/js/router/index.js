import PostsPage from '../views/PostsPage'
import PostPage from '../views/PostPage'
import CreatePostPage from '../views/CreatePostPage'
import LoginPage from '../views/LoginPage'
import RegisterPage from '../views/RegisterPage'
import VueRouter from 'vue-router';

import store from '../store'

const routes = [
    { path: '/', name: 'home', redirect: '/posts' },
    { path: '/posts', name: 'posts', component: PostsPage},
    { path: '/posts/add', name: 'post-add', component: CreatePostPage},
    { path: '/posts/:id', name: 'post-show', component: PostPage},
    { path: '/login', name: 'login', component: LoginPage},
    { path: '/register', name: 'register', component: RegisterPage},
]

export default new VueRouter({
    routes,
    mode: 'history'
})
