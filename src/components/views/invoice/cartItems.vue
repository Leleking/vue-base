<template>
    <div>
        <tr v-for="cart in this.$store.cartStore.cartItems">
                    <td>hj</td>
                    <td>ki</td>
                    <td>hj</td>
                    <td>ki</td>
                    <td>hj</td>
        </tr>
    </div>
</template>
<script>
import {mapState} from 'vuex'
    export default{
        data(){
            cartProduct:{}
        },
        computed:{
           ...mapState({
            cartStore : state => state.cartStore,
          }),
            cartProduct(){
            return this.cartProducts= this.cartStore.cartItems
            }
          },
    }
</script>