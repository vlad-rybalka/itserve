<template>
    <div class="mt-3">
        <b-row>
            <b-col>
                <h3 class="float-left pt-2">Posts</h3>
                <router-link :to="{name: 'posts-add'}">
                    <b-button variant="success" class="float-right">+ Add post</b-button>
                </router-link>
            </b-col>
        </b-row>
        <b-row class="mt-2">
            <PostItem  v-for="post in posts" v-bind:key="post.id"
                :title="post.title"
                :description="post.description"
                :img="post.img"
            >
            </PostItem>
        </b-row>
        <div class="overflow-auto">
            <b-pagination-nav  :number-of-pages="10" use-router align="center"></b-pagination-nav>
        </div>
    </div>
</template>

<script>
import PostItem from './PostItem'
import PostsApi from '../services/api/posts'
export default {
    
    components: {
          PostItem
        },
    data() {
        return {
            posts: [],
        }
    },
    mounted(){
        axios.get('/api/posts')
        .then( response => {
            this.posts = response.data;
        });
    }
}
</script>
