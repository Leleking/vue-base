<template>
    <div>sign up</div>
</template>
<script>
    export default{
        created(){
            if(this.$store.state.authStore.authUser){
                this.$router.go(-1)
            }
        }
    }
</script>