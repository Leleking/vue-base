<template>
    <div>
        <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6">
                 <form style="padding-top:30px">
            <div class="form-group">
                    <div class="input-search">
                      <button type="submit" @click.prevent="searchProduct" class="input-search-btn"><i class="icon wb-search" aria-hidden="true"></i></button>
                      <input v-model="searchObj.name" type="text" class="form-control" name="" placeholder="Search...">
                    </div>
            </div>
        </form>
            </div>
            <div class="col-md-3"></div>
        </div>
       
        
    </div>
</template>
<script>
import {search} from '@/config'
    export default{
        props:['product'],
        data(){
            return{
                searchObj:{}
            }
        },
        methods:{
            searchProduct(){
            this.searchObj.url = search + this.$route.params.id
            this.$store.dispatch('postReqData',this.searchObj).then((response)=>{
                return this.$emit('productChange',response.body.data)}).catch((err)=>{console.log(err)})

            }
        }
    }
</script>