<template>
    <div>
         <div class="panel">
          <header class="panel-heading">
            <h3 class="panel-title">
              Cart - Checkout
            </h3>
          </header>
          <div class="panel-body">
            <div class="example table-responsive">
              <table class="table table-striped table-bordered" data-plugin="floatThead">
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody aria-relevant="all" aria-live="polite">
                  <tr v-for="(cart,index) in cartProduct" :key="cart.id" class="odd">
                    <td @click.prevent="delFromCart(cart.id)"><center class="action"><i class="icon wb-trash" aria-hidden="true"></i></center></td>
                    <td>
                      <h5>{{cart.name}}</h5>
                    </td>
                    <td>
                        <button type="button" @click.prevent="increaseQty(cart.id)" class="btn btn-floating btn-danger btn-xs"><i class="icon wb-plus" aria-hidden="true"></i></button> 
                       <span class="col-xs-1">
                             <input type="text" readonly class="btn btn-floating btn-xs form-control" v-model="cart.qty"> 
                       </span>
                       <button type="button" @click.prevent="decreaseQty(cart.id)" class="btn btn-floating btn-danger btn-xs"><i class="icon wb-minus" aria-hidden="true"></i></button>
                    </td>
                    <td>{{cart.price}}</td>
                    <td>{{cart.price * cart.qty }}</td>
                   
                   
                  </tr>
                  <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>{{total}}</td>
                  </tr>
                 
                 
                </tbody>
              </table>
            </div>
          </div>

        </div>
        <!-- End Panel Example 1 -->
        
        <button v-if="this.$store.state.authStore.authUser" type="button" data-target="#beforeInvoice" data-toggle="modal"
class="btn btn-animate btn-animate-side btn-primary">
                <span><i class="icon wb-shopping-cart" aria-hidden="true"></i> Proceed
                  to Invoice</span>
        </button>
         <button v-else type="button"
class="btn btn-animate btn-animate-side btn-primary">
                <router-link style="color:white" to="/login">Login to proceed
                  to Invoice</router-link>
        </button>
        <location></location>
     </div>
</template>
<script>
import _ from 'lodash';
import location from './location'
import {mapState} from 'vuex'
    export default{
        data(){
            return{
                test:[]
            }
        },
        components:{
          location
        },
        computed:{
          ...mapState({
            cartStore : state => state.cartStore,
          }),
          total() {
    	    return _.sumBy(this.cartStore.cartItems, function(o) {return o.price * o.qty;})
          },
          cartProduct(){
            return this.cartProducts= this.cartStore.cartItems
          },
        },
        created() {
            
  },
        methods:{
            increaseQty(index){
               this.$store.dispatch('increaseQty',index)

            },
            decreaseQty(index){
               this.$store.dispatch('decreaseQty',index)

            },
            delFromCart(index){
                this.$store.dispatch('deleteCartItem',index)
            }
        }

    }
</script>
