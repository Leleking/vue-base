import vue from 'vue'
const state = {
    reqData:{

    }
}
const mutations = {
    SET_REQ_DATA(state,reqObj){
        state.reqData = reqObj
    }
}
const actions = {
    postReqData:({commit,dispatch},reqDataObj)=>{
    commit('SET_REQ_DATA',reqDataObj)
    return vue.http.post(reqDataObj.url,state.reqData).then((response)=>{
      dispatch('success','Process complete',{root:true})    
        return response
            }).catch((error)=>{
                Promise.reject().then(()=>{setTimeout(()=>{dispatch('error','Slow Network.Please wait',{root:true})},2000)}).catch(()=>{dispatch('reqError','error occured',{root:true}) })   
                return error
            })
        },
    getReqData:({commit},reqDataObj)=>{
        return vue.http.get(reqDataObj.url).then((response)=>{
        return response.body.data
        }).catch((err)=>{return err})
    }
}

export default{
    state,mutations,actions
}