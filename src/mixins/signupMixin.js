import {mapState} from 'vuex'
import {signUpUrl} from '@/config'
export default{
    data(){
        return {
            userObj:{}
        }
    },
    created(){
        if(this.$store.state.authStore.authUser){
            this.$router.go(-1)
        }
    },
    computed:{
        ...mapState({
            authStore:state => state.authStore
        })
    },
    methods:{
        signupUser(){
            this.$validator.validateAll().then(() => {
  
                  if (!this.errors.any()) {
                    this.$validator.validateAll()
                    this.userObj.url = signUpUrl
                    this.$store.dispatch('postReqData',this.userObj).then((response)=>{
                        console.log(response)
                    }).catch((err)=>{
                        console.log(err)
                    })
                  }
                }).catch((err) =>{
                });
          }
    }
    
}