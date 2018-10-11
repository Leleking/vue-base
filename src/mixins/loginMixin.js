import {mapState} from 'vuex'
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
        loginUser(){
            this.$validator.validateAll().then(() => {
  
                  if (!this.errors.any()) {
                      this.$validator.validateAll()
                      this.$store.dispatch('validateUser',this.userObj).then((response) =>{
                          const authUser = {}
                          this.$store.dispatch('postReqData',this.authStore.postData).then((response)=>{
                            if(response.status == 200){
                                authUser.access_token = response.data.access_token
                                this.$store.dispatch('setAccessToken',authUser)
                                this.$router.go(-1)
                            }else{
                                this.$store.dispatch('error','Credentials do not match in our database')
                            }
                          }).catch((err)=>{
                          })
                      }).catch((err)=>{

                      })
                  }
                }).catch((err) =>{
                });
          }
    }
    
}