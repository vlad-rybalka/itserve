<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="dark">
            <b-container>
                <router-link :to="{name: 'home'}">
                    <b-navbar-brand>IT Serve</b-navbar-brand>
                </router-link>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <router-link :to="{name: 'posts'}">
                        <p class="nav-link mb-0"> Posts</p>
                    </router-link>
                </b-navbar-nav>
                <b-navbar-nav class="ml-auto"  v-if="!isAuth">
                    <router-link :to="{name: 'login'}">
                        <p class="nav-link mb-0"> Sign in</p>
                    </router-link>
                    <router-link :to="{name: 'register'}">
                        <p class="nav-link mb-0"> Sign up</p>
                    </router-link>  
                </b-navbar-nav>
                <b-navbar-nav class="ml-auto"  v-if="isAuth">
                    <b-nav-item-dropdown right>
                        <template slot="button-content"><em>{{user.nickname}}</em></template>
                        <b-dropdown-item @click="onSignOutClick">Sign Out</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
                </b-collapse>
            </b-container>
        </b-navbar>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
    computed:{
        ...mapGetters('auth',['user', 'isAuth'])
    },
    methods:{
        ...mapActions('auth',['logout']),
        async onSignOutClick(){
            await this.logout();
            this.$router.push({ name: "home"})
        }
    }
}
</script>

<style>
a:hover{
    text-decoration: none;
}
</style>

