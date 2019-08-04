const state = {
    activeReplyForm: 0,
}

const getters = {
    activeReplyForm(state){
        return state.activeReplyForm;
    }
}

const actions = {
    
}

const mutations = {

    setActiveReplyForm(state, id){
        state.activeReplyForm = id;
    }
}

export default {
  state,
  getters,
  actions,
  mutations
}