<template>
  <div id="app">
    <pageLoad v-show='this.routeStore.loading'></pageLoad>
    <div v-show='!this.routeStore.loading'>
    <navbar v-show="navR"></navbar>
    <carousel v-show="welcome"></carousel>
    <div class="row">
      <div class="col-md-1"></div>
      <div class="col-md-10">
        <div :class="{myDiv : this.routeStore.loading}">
        <div> <router-view :key="$route.fullPath" /></div>
      </div>
      </div>
      <div class="col-md-1"></div>
    </div>
     <!-- Footer -->
  <vueFooter v-show="navR" class="vuefooter"></vueFooter>
    </div>
    <!-- Core  -->
  </div>
</template>

<script>
import pageLoad from './components/partials/loading/pageLoad'
import navbar from './components/partials/navbar'
import carousel from './components/partials/carousel'
import vueFooter from './components/partials/vueFooter'
import {mapState} from 'vuex'
export default {
  name: 'App',
  components:{
    pageLoad,
    navbar,
    carousel,
		vueFooter
  },
  data(){
    return {
      nav:true,
      carouselMap:false
    }
  },
  computed:{
    ...mapState({
      routeStore: state => state.routeStore
    }),
    navR(){
       if(this.$route.name == "login"){
      return this.nav = false
    }else{
      return this.nav = true
    }
    },
    welcome(){
       if(this.$route.name == "welcome"){
      return this.carouselMap = true
    }else{
      return this.carouselMap = false
    }
    }
  }
}
</script>
<style>
.myDiv {
  display: none;
}
.action{
  cursor: pointer;
}
.vuefooter{
  padding-top:50px;
	position:relative;
	height:100;
  bottom:0px;
	width:100%
}
</style>


