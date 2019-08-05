import Vue from 'vue'
import Vuex from 'vuex'
import comment from './modules/comment'
import auth from './modules/auth'
import post from './modules/post'
import createPost from './modules/forms/createPost'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        post, createPost, comment, auth
    }
})