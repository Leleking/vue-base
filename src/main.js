// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {router} from './router'
import store from './store'
import VeeValidate from 'vee-validate';
import VueResource from 'vue-resource'
import {getHeader,loginUrl,signUpUrl} from './config'
import VueIziToast from 'vue-izitoast';
import 'izitoast/dist/css/iziToast.css'
import vbclass from 'vue-body-class'
Vue.use( vbclass, router )
import * as VueGoogleMaps from 'vue2-google-maps'
 
Vue.use(VueGoogleMaps, {
  load: {
    key: 'YOUR_API_TOKEN'
  }
})
Vue.use(VueIziToast)
Vue.use(VeeValidate)
Vue.use(VueResource)
Vue.config.productionTip = false
Vue.http.interceptors.push(function(request, next) {
  store.dispatch('setLoading',true)
  if(request.url !== loginUrl || request.url !== signUpUrl){
   const header = getHeader()
  request.headers.set('Authorization', header.Authorization)
  request.headers.set('Accept' ,header.Accept)  
  next((response)=>{
    store.dispatch('setLoading',false)
    return response
  })

  }else{
    store.dispatch('setLoading',true)
    next()
  }

  
  
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
