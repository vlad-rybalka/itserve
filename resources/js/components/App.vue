<template>
    <div>
        <Header></Header>
        
        <b-container>
            <router-view @message="data => showMessage(data)"></router-view>
        </b-container>
        
    </div>
</template>

<script>
import Header from './Header'
export default {
    components: {
        Header
    },
    methods:{
        showMessage(data) {
            this.$bvToast.toast(data.body, {
                title: data.title,
                appendToast: false,
                variant: 'success',
            })
        }
    }

}
</script>

<style>
.b-toaster-top-right{
    position: fixed !important;
    top: 20px  !important;
    right: 20px  !important;
    width: 300px;
}
.toast{
    opacity: 1 !important;
    margin-bottom: 
}
</style>

