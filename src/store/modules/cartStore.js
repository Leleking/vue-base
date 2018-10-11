import Vue from 'vue'
const state = {
    cartItems:[]
}
const mutations = {
    ADD_CART_ITEM(state,reqObj){
        state.cartItems =reqObj
    },
    ADD_NEW_QTY(state,reqObj){
        var item = Vue.util.extend({'qty': 1}, reqObj);
				state.cartItems.unshift(item);
    },
    ADD_QTY(state,exists){
        state.cartItems[exists].qty++
    },
    DECREASE_QTY(state,exists){
        state.cartItems[exists].qty--
        if(state.cartItems[exists].qty <= 0){
            //state.cartItems[exists].$remove
            state.cartItems.splice(exists, 1);
        }
    },
    DELETE_CART_ITEM(state,exists){
     // _.pullAt(state.cartItems,[exists])
     if (exists !== -1) {
        state.cartItems.splice(exists, 1);
        }
    }

}
const getters = {
    getCartLength: state => {
        return state.cartItems.length
    }
}
const actions = {
    addCartItem:({commit,dispatch},index)=>{
        var exists = _.findIndex(state.cartItems, ['id', index.id]);
        if (exists == -1) {
        window.localStorage.removeItem('cartItems')
           dispatch('toastSuccess',index.name)
             commit('ADD_NEW_QTY',index)
           window.localStorage.setItem('cartItems',JSON.stringify(state.cartItems))
        } else {
           dispatch('toastSuccess',index.name)
            commit('ADD_QTY',exists)
           window.localStorage.setItem('cartItems',JSON.stringify(state.cartItems))

        }
       // commit('ADD_CART_ITEM',index)
    },
    addCartFromStorage:({commit},index)=>{
        commit('ADD_CART_ITEM',index)
    },
    increaseQty:({commit},index)=> {
        var exists = _.findIndex(state.cartItems, ['id', index]);
        commit('ADD_QTY',exists)
        window.localStorage.setItem('cartItems',JSON.stringify(state.cartItems))

    },
    decreaseQty:({commit},index)=> {
        var exists = _.findIndex(state.cartItems, ['id', index]);
        commit('DECREASE_QTY',exists)
     },
     deleteCartItem:({commit},index)=>{
        var exists = _.findIndex(state.cartItems, ['id', index]);
        //console.log(state.cartItems[exists].id)
        commit('DELETE_CART_ITEM',exists)
        window.localStorage.setItem('cartItems',JSON.stringify(state.cartItems))
        //console.log(state.cartItems)
        //alert(index)
    }
}
export default{
    state,mutations,actions,getters
}