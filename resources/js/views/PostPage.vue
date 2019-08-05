<template>
    <div>
        <div>
            <b-row>
                <b-col cols="9">
                    <b-jumbotron :header="post.title" header-level="6" bg-variant="white" border-variant="grey" class="py-4 mt-3">
                        <h5><i class="far fa-calendar-alt"></i> {{post.created_at}}</h5>
                        <img class="mt-3" :src="post.img" alt="" width="100%">
                        <h5 class="mt-4">{{post.description}}</h5>
                    </b-jumbotron>
                    <b-card class="mb-3 mt-0">
                        <b-row>
                            <b-col>
                                <h5 class="mb-3 float-left">Comments</h5>
                                <b-button variant="primary" :disabled="!isDESC" @click="onSortClick('ASC')" size="sm" class="sort mb-3 float-right"><i class="fas fa-sort-amount-down-alt"></i></b-button>
                                <b-button variant="primary" :disabled="isDESC"  @click="onSortClick('DESC')" size="sm" class="sort mb-3 mr-1 float-right"><i class="fas fa-sort-amount-up-alt"></i></b-button>
                            </b-col>
                        </b-row>
                        <CommentItem v-for="comment in post.comments" :key="comment.id"
                            :text="comment.text"
                            :comments="comment.comments"
                            :id="comment.id"
                            :date="comment.created_at"
                            :nickname="comment.user.nickname"
                            :email="comment.user.email"
                        >>
                        </CommentItem>
                        <p v-if="post.comments.length == 0" >No comments</p>
                        <b-form-textarea
                            id="textarea"
                            v-if="isAuth"
                            v-model="text"
                            placeholder="Enter something..."
                            rows="2"
                            class="mt-3 "
                        ></b-form-textarea>
                        <p><small class="text-danger">{{error}}</small></p>
                        
                        <b-button variant="primary" v-if="isAuth" @click="onSubmit" class="mb-1 mt-2 px-5">Send</b-button>
                        <b-alert v-if="!isAuth" show variant="danger" class="mb-0 mt-3">
                            <i class="fas fa-info-circle"></i> Comments can be added only by registered users. 
                            <router-link :to="{name: 'login'}">Sign in</router-link> 
                        </b-alert>
                    </b-card>
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
import CommentItem from '../components/CommentItem'
import {mapGetters, mapActions} from 'vuex'

export default {
    components: {
        CommentItem
    },
    data() {
        return {
            text: "",
            error: "",
            sort: 'ASC'
        }
    },
    computed:{
        ...mapGetters('auth',['isAuth', 'user']),
        ...mapGetters('post',['post']),
        isDESC(){
            return this.sort == 'DESC';
        }
    },
    methods:{
        ...mapActions('post',['getPost']),
        ...mapActions('comment',['sendComment']),
        ...mapActions('auth',['logout']),
        loadPost(){
            this.getPost({id:this.$route.params.id, sort: this.sort});
        },
        onSubmit(){
            let data = { 
                text: this.text,
                user_id: this.user.id,
                post_id: this.post.id,
                parent_id: 0 
            }
            this.sendComment(data)
                .then((data) => {
                    this.text = ""
                    this.error = ""
                    this.post.comments.push(data.comment)
                })
                .catch(error => {
                    if(error.status== 'Token is Invalid') {
                        this.showMessage({
                            title: "Authorization timed out",
                            body: "Please sign in again"
                        })
                        this.logout()
                    }
                    this.error = error.errors.text[0]
                    console.log(error)
                })
        },
        onSortClick(sort){
            this.sort = sort
            this.loadPost()
        },
        showMessage(data){
            this.$emit('message', data);
        }
    },
    mounted(){
         this.loadPost();
    }
}
</script>

<style>
.sort{
    font-size: 20px;
    padding: 0px 7px;
}
</style>


