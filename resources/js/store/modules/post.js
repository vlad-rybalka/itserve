const state = {
    posts: [],
    pagination: {
        currentPage: 1,
        perPage: 15,
        total: 15
    },
    isReady: false
}

const getters = {
    allPosts(state){
        return state.posts;
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
                console.log(response.data);
                ctx.commit('updatePosts', response.data.posts)
                ctx.commit('updatePagination', response.data.pagination)
                ctx.commit('setIsReady', true)
            })
            .catch(error =>{
                ctx.commit('setIsReady', true)
            });
    }
}

const mutations = {
    updatePosts(state, posts){
        state.posts = posts;
    },
    updatePagination(state, pagination){
        state.pagination = pagination;
    },
    setIsReady(state, isReady){
        state.isReady = isReady;
    }
}

export default {
  state,
  getters,
  actions,
  mutations
}