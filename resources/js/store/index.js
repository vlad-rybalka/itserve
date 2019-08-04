import Vue from 'vue'
import Vuex from 'vuex'
import comment from './modules/comment'
import post from './modules/post'
import postForm from './modules/forms/postForm'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        post, postForm, comment
    }
})