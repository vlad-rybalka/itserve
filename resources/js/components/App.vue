<template>
    <div>
        <Header></Header>
        <b-container>
            <router-view></router-view>
        </b-container>
    </div>
</template>

<script>
import Header from './Header'
export default {
    components: {
          Header
        },
}
</script>
