const state = {
    posts: [],
    pagination: {
        currentPage: 1,
        perPage: 15,
        total: 15
    },
    post:{
        comments: []
    },
    isReady: false
}

const getters = {
    allPosts(state){
        return state.posts;
    },
    post(state){
        return state.post;
    },
    perPage(state){
        return state.pagination.perPage;
    },
    total(state){
        return state.pagination.total;
    },
    currentPage(state){
        return state.pagination.currentPage;
    },
    isReady(state){
        return state.isReady;
    }
}

const actions = {
    async getPosts(ctx, page){
        ctx.commit('setIsReady', false)
        axios.get('/api/posts?page='+page)
            .then( response => {
                ctx.commit('updatePosts', response.data.posts)
                ctx.commit('updatePagination', response.data.pagination)
                ctx.commit('setIsReady', true)
            })
            .catch(error =>{
                ctx.commit('setIsReady', true)
            });
    },
    async getPost(ctx,{id,sort}){
        axios.get('/api/posts/'+id+"?sort="+sort)
            .then( response => {
                ctx.commit('updatePost', response.data.post)
            })
            .catch(error =>{
                
            });
    }
}

const mutations = {
    updatePosts(state, posts){
        state.posts = posts;
    },
    updatePost(state, post){
        state.post = post;
    },
    updatePagination(state, pagination){
        state.pagination = pagination;
    },
    setIsReady(state, isReady){
        state.isReady = isReady;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}