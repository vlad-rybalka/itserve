<template>
    <div class="mt-3">
        <b-row>
            <b-col>
                <h3 class="float-left pt-2">Posts</h3>
                <router-link :to="{name: 'post-add'}">
                    <b-button variant="success" class="float-right">+ Add post</b-button>
                </router-link>
            </b-col>
        </b-row>
        <b-row class="mt-2" v-if="posts.length">
            <b-col cols="6">
                <h5 class="float-left mt-1 text-secondary">Posts from {{this.paginate.from}} to {{this.paginate.to}}</h5>
            </b-col>
            <b-col cols="6">
                <b-pagination
                    v-model="paginate.currentPage"
                    :total-rows="paginate.total"
                    :per-page="paginate.perPage"
                    align="right"
                    @input="getPosts()"
                ></b-pagination>
            </b-col>
        </b-row>
        <b-row class="content-box" v-bind:class="{ ready: this.isReady }">
            <b-spinner class="spinner" variant="primary" label="Spinning"></b-spinner>
            <b-col>
                <b-card-group columns class="box">
                    <PostItem  v-for="post in posts" v-bind:key="post.id"
                        :id="post.id"
                        :title="post.title"
                        :description="post.short_description"
                        :img="post.img"
                        :date="post.created_at"
                    >
                    </PostItem>
                </b-card-group>
            </b-col>            
        </b-row>
        <b-row class="mt-2" v-if="posts.length">
            <b-col cols="6">
                <h5 class="float-left mt-1 text-secondary">Posts from {{this.paginate.from}} to {{this.paginate.to}}</h5>
            </b-col>
            <b-col cols="6">
                <b-pagination
                    v-model="paginate.currentPage"
                    :total-rows="paginate.total"
                    :per-page="paginate.perPage"
                    align="right"
                    @input="getPosts()"
                ></b-pagination>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import PostItem from './PostItem'
import PostsApi from '../services/api/posts'
export default {
    
    components: {
          PostItem
        },
    methods:{
        getPosts(){
            this.isReady = false;
            axios.get('/api/posts?page='+this.paginate.currentPage)
                .then( response => {
                    console.log(response);
                    this.posts = response.data.data;
                    this.paginate.perPage = response.data.per_page;
                    this.paginate.total = response.data.total;
                    this.paginate.from = response.data.from;
                    this.paginate.to = response.data.to;
                    this.isReady = true;
                });
        }
    },
    data() {
        return {
            posts: [],
            paginate:{
                perPage: 1,
                currentPage: 1,
                total: 7,
                from: 1,
                to: 15
            },
            isReady: false
        }
    },
    created(){
        this.getPosts();
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

