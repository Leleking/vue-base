<template>

    <div>
        <searchProduct :product="product" @productChange="product = $event"></searchProduct>
        <div class="container">
            <div class="container-fluid">
                <div class="row">
            <div v-for="products in product" class="col-md-3">
                <div class="example-wrap">
                  <div class="example product" >
                    <figure class="overlay overlay-hover">
                      <img class="overlay-figure" height="180px" v-bind:src="'http://localhost:8000/img/product/'+ products.image" alt="...">
                      <figcaption class="overlay-bottom overlay-panel overlay-background overlay-slide-top">
                        <small>{{products.details}}</small>
                      </figcaption>
                    </figure>
                    <span class="badge badge-pill badge-danger up">1</span>
                    <h4 class="example-title" ><center>{{products.name}} - GH&#8373; {{products.price}}</center></h4>
                    <div class="example-title">
                        <small style="text-align:center" ><center><button @click="addToCart(products)" class="btn btn-danger">Add to cart</button></center></small>
                        </div>
                  </div>
                </div>
                <!-- End Example Overlay Bottom -->
            </div>
        </div>
            </div>
        </div>
    </div>
    
</template>
<script>
import searchProduct from './searchProduct'
import {category} from '@/config'
    export default{
        data(){
            return{
                id:this.$route.params.id,
                product:[],
                cart:[]
            }
        },
        components:{
            searchProduct,
        },
         created(){
            const send = {}
            send.url = category + this.$route.params.id
            var pro = this.$store.dispatch('getReqData',send).then((response)=>{
                this.product = response
            }).catch()
            
        },
        methods:{
            addToCart(index){
                this.$store.dispatch('addCartItem',index)
            }
        }
    }
</script>
<style scoped>

.product{
     box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.example-title{
    padding:0px 0px 10px 0px
}
</style>
