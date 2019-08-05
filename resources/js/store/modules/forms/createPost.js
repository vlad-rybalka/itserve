import router from '../../../router';

const state = {
    errors: {}
}

const getters = {
    errors(state){
        return state.errors;
    }
}

const actions = {
    async createPost(ctx, formData){

        let data = new FormData();
        data.append('title', formData.title);
        data.append('description', formData.description);
        data.append('file', formData.file);

        const headers = {
            'Authorization': 'Bearer '+ctx.rootState.auth.token,
            'Content-Type': 'application/x-www-form-urlencoded'
        }
        return new Promise((resolve, reject) => {
            axios.post('/api/posts', data,{ headers})
            .then(response =>{
                ctx.commit('updateErrors', {})
                resolve(response.data)
            })
            .catch(error =>{
                console.log(error.response.data)
                ctx.commit('updateErrors', error.response.data.errors)
                reject(error.response.data)
            })
        })
    },
}

const mutations = {
    updateErrors(state, errors){
        state.errors = errors;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}