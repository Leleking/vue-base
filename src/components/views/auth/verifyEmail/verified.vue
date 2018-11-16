<template>
     <div class="vertical-align text-center" data-animsition-in="fade-in" data-animsition-out="fade-out">
      <div class="page-content vertical-align-middle">
        <header>
          <h1 class="animation-slide-top" style="font-size:50px">Email Verification Successful</h1>
        </header>
        <p class="error-advise">Your email has successfully been verified</p>
        <router-link class="btn btn-primary btn-round" to="/Login">LOGIN</router-link>

        
      </div>
    </div>
</template>
<script>
import {verifyEmailUrl} from '@/config'
    export default{
        data(){
            return{
                user:{}
            }
        },
        created(){
            alert(verifyEmailUrl)
            this.user.email = this.$route.params.email
            this.user.verifyToken = this.$route.params.verifyToken
            this.user.url = verifyEmailUrl
            this.$store.dispatch('postReqData',this.user).then((response)=>{
                console.log(response)
            })
            
        }
    }
</script>