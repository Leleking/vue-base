import { clientId,clientSecret} from  '../../../env.js'
import {loginUrl,userUrl} from '../../config'
import vue from 'vue'
const state = {
    authUser: null,
    postData:{

    },
    
}
const getters= {
    getAuthUser: state => {
      return state.authUser;
    }
}
const mutations ={
    SET_USER(state,response){
        state.authUser.email = response.body.email
        state.authUser.name = response.body.name
        state.authUser.id =   response.body.id
    },
    SET_AUTH_USER(state,userObj){
        state.authUser = userObj
    },
    HANDLE_LOGIN_SUBMIT(state,user){
        state.postData = {
        grant_type: 'password',
        client_id: clientId,
        client_secret: clientSecret,
        username:user.email,
        password:user.password,
        scope:'',
        url:loginUrl
        }
    },
    UNSET_AUTH_USER(state){
        state.authUser = ''
    }
}
const actions = {
    setUserObject:({commit},userObj) => {
        commit('SET_AUTH_USER',userObj)
    },
    validateUser:({commit},user) => {
        return commit('HANDLE_LOGIN_SUBMIT',user)
    },
    unsetUserObject: ({commit,dispatch}) => {
        commit('UNSET_AUTH_USER')
        window.localStorage.removeItem('authUser')
        dispatch('success','You have logged out',{root:true})
    },
    setAccessToken:({commit},obj)=>{
        commit('SET_AUTH_USER',obj)
        window.localStorage.setItem('authUser',JSON.stringify(state.authUser))
        vue.http.get(userUrl).then((response) => {
             commit('SET_USER',response)
             window.localStorage.setItem('authUser',JSON.stringify(state.authUser))
        })
    }
}
export default{
    state,mutations,actions,getters
}