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

        return new Promise((resolve, reject) => {
            axios.post('/api/posts', data)
            .then(response =>{
                console.log(response)
                ctx.commit('updateErrors', {})
                resolve()
            })
            .catch(error =>{
                ctx.commit('updateErrors', error.response.data.errors)
                console.log(error.response.data.errors)
                reject()
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
  state,
  getters,
  actions,
  mutations
}