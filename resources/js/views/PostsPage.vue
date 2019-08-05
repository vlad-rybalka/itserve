<template>
    <div class="mt-3">
        <b-row>
            <b-col>
                <h3 class="float-left pt-2">Posts</h3>
                <router-link v-if="isAuth" :to="{name: 'post-add'}">
                    <b-button variant="success" class="float-right">+ Add post</b-button>
                </router-link>
            </b-col>
        </b-row>
        <b-row class="mt-2" v-if="allPosts.length">
            <b-col cols="6">
                <h5 class="float-left mt-1 text-secondary">Posts from {{this.displayPosts.from}} to {{this.displayPosts.to}}</h5>
            </b-col>
            <b-col cols="6">
                <b-pagination
                    v-model="pagination.currentPage"
                    :total-rows="total"
                    :per-page="perPage"
                    align="right"
                    @input="getPosts(pagination.currentPage)"
                ></b-pagination>
            </b-col>
        </b-row>
        <b-row class="content-box" v-bind:class="{ ready: this.isReady }">
            <b-spinner class="spinner" variant="primary" label="Spinning"></b-spinner>
            <b-col>
                <b-card-group columns class="box">
                    <PostItem  v-for="post in allPosts" v-bind:key="post.id"
                        :id="post.id"
                        :title="post.title"
                        :description="post.short_description"
                        :img="post.img"
                        :date="post.created_at"
                        :comments="post.count_comments"
                    >
                    </PostItem>
                </b-card-group>
            </b-col>            
        </b-row>
        <b-row class="mt-2" v-if="allPosts.length">
            <b-col cols="6">
                <h5 class="float-left mt-1 text-secondary">Posts from {{this.displayPosts.from}} to {{this.displayPosts.to}}</h5>
            </b-col>
            <b-col cols="6">
                <b-pagination
                    v-model="pagination.currentPage"
                    :total-rows="total"
                    :per-page="perPage"
                    align="right"
                    @input="getPosts(pagination.currentPage)"
                ></b-pagination>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import PostItem from '../components/PostItem'
import PostsApi from '../services/api/posts'
import {mapGetters, mapActions} from 'vuex'

export default {
    components: {
        PostItem
    },
    computed:{
        ...mapGetters('post',['allPosts', 'total', 'perPage', 'currentPage', 'isReady']),
        ...mapGetters('auth',['isAuth']),
        displayPosts(){
            const from = (this.currentPage * this.perPage) - (this.perPage - 1);
            const to = from + (this.allPosts.length - 1);
            return {from, to}
        },

    },
    methods:{
        ...mapActions('post',['getPosts']),
    },
    data() {
        return {
            pagination:{
                currentPage: 1,
            },
        }
    },
    created(){
        this.pagination.currentPage = this.currentPage;
        this.getPosts(this.currentPage);
    }
}
</script>

<style>
.content-box{
    min-height: 80vh;
}
.content-box .spinner{
    display:block;
}
.content-box .box{
    opacity: 0.3;
}
.spinner{
    position:fixed; 
    top: 50%; 
    left: 50%;
    width: 4rem; 
    height: 4rem;
}
.ready .spinner{
    display:none;
}
.ready .box{
    opacity: 1;
}
</style>

