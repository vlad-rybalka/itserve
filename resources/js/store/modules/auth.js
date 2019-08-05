
function initialState () {
    const token = localStorage.getItem('token');
    const user = {
        nickname: localStorage.getItem('nickname') || "",
        email: localStorage.getItem('email') || "",
        id: localStorage.getItem('id') || ""
    }
    const isAuth = token !== "" && user.id !== null
    return {
        token,
        user,
        isAuth,
        errors: {}
    }
}

const getters = {
    user(state){
        return state.user;
    },
    isAuth(state){
        return state.isAuth;
    },
    errors(state){
        return state.errors;
    }
}

const actions = {
    async login(ctx, data){
        return new Promise((resolve, reject) => {
            axios.post('/api/login', data)
            .then(response =>{
                ctx.commit('updateToken', response.data.token)
                ctx.commit('updateUser', response.data.user)
                ctx.commit('updateIsAuth')
                resolve()
            })
            .catch(error =>{
                console.log(error.response.data)
                ctx.commit('updateErrors', error.response.data.errors)
                reject()
            })
        })
    },
    async register(ctx, data){
        return new Promise((resolve, reject) => {
            axios.post('/api/register', data)
            .then(response =>{
                ctx.commit('updateToken', response.data.token)
                ctx.commit('updateUser', response.data.user)
                ctx.commit('updateIsAuth')
                resolve()
            })
            .catch(error =>{
                console.log(error.response.data)
                ctx.commit('updateErrors', error.response.data.errors)
                reject()
            })
        })
    },
    async logout(ctx){
        ctx.commit('updateToken', "")
        ctx.commit('updateUser', {})
        ctx.commit('updateIsAuth')
    }
}

const mutations = {
    updateToken(state, token){
        state.token = token;
        localStorage.setItem('token', state.token);
    },
    updateUser(state, user){
        state.user = user;
        localStorage.setItem('nickname', state.user.nickname);
        localStorage.setItem('email', state.user.email);
        localStorage.setItem('id', state.user.id);
    },
    updateIsAuth(state){
        state.isAuth = state.token !== "" && state.user.id !== null
    },
    updateErrors(state, errors){
        state.errors = errors;
    }
}

export default {
    namespaced: true,
    state: initialState,
    getters,
    actions,
    mutations
}