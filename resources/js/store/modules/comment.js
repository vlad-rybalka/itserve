const state = {
    activeReplyForm: 0,
}

const getters = {
    activeReplyForm(state){
        return state.activeReplyForm;
    }
}

const actions = {
    async sendComment(ctx, data){
        return new Promise((resolve, reject) => {
            const headers = {
                'Authorization': 'Bearer '+ctx.rootState.auth.token,
            }
            axios.post('/api/comments', data, {headers})
            .then(response =>{
                resolve(response.data)
            })
            .catch(error =>{
               
                reject(error.response.data)
            })
        })
    }
}

const mutations = {

    setActiveReplyForm(state, id){
        state.activeReplyForm = id;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}