const state ={
    loading:false
}
const getters = {
    getLoading: state => {
        return state.loading
    }
}
const mutations = {
    SET_LOADING(state,status){
        state.loading = status
    }
}
const actions = {
    setLoading:({commit},status) =>{
        commit('SET_LOADING',status)
    }
}
export default{
    state,getters,mutations,actions
}