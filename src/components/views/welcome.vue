<template>
<div class="container">
    <div class="container-fluid">
        <div class="row">
        <div class="col-lg-3" v-for="cat in category">
            <div class="category">
            <div class="card product" style="width: 18rem;">
                <div class="card-body">
                    <center><h5 class="card-title example-title">{{cat.name}}</h5>
                    <p class="card-text">Category Details</p>
                        <small style="text-align:center" ><center><router-link v-bind:to="'/category/'+cat.id" class="btn btn-danger">OPEN</router-link></center></small>                    
                    </center>
                </div>
            </div>
            </div>
        </div>
    </div>
    </div> 
</div>
    
</template>
<script>
import {getCategory} from '@/config'
    export default{
        name:'welcome',
        data(){
            return{
                category:[],
            }
        },
        created(){
            const send = {}
            send.url = getCategory
            var test = this.$store.dispatch('getReqData',send).then((response)=>{
                this.category = response
            }).catch()
        }
    }
</script>
<style scoped>
.category{
    padding-top: 50px
}
.product{
     box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.example-title{
    padding:0px 0px 10px 0px
}
</style>
