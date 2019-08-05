<template>
    <b-media class="mt-3">
        <b-img slot="aside" blank blank-color="#ccc" width="48" alt="placeholder"></b-img>

        <h5 class="mt-0 text-primary"> 
            <span class='font-weight-bold'>{{nickname}}</span>   
            <small class="text-secondary">	• {{date}}</small>
            <small class="float-right text-secondary">{{email}}</small>
        </h5>
        
        <p class="">
            {{text}}
        </p>
        <div class="bottom border-bottom">
            <b-button variant="link" v-if="!isShowForm" @click="showForm" class="mb-0 p-0">Reply</b-button>
            <b-button variant="link" v-if="isShowForm" @click="hideForm" class="mb-0 p-0 float-right"><i class="fas fa-times"></i></b-button>
            <b-form-textarea
                id="textarea"
                v-if="isAuth && isShowForm"
                placeholder="Enter something..."
                v-model="textForm"
                rows="2"
                class="reply-form"
            ></b-form-textarea>
            <p><small class="text-danger">{{error}}</small></p>
            <b-button variant="primary" v-if="isAuth && isShowForm" @click="onSubmit" class="mb-1 mt-1 px-4">Send</b-button>
            <b-alert v-if="!isAuth && isShowForm" show variant="danger" class="mb-1 mt-5">
                <i class="fas fa-info-circle"></i> Comments can be added only by registered users. 
                <router-link :to="{name: 'login'}">Sign in</router-link> 
            </b-alert>
        </div>
        <comment-item v-for="comment in comments" :key="comment.id"
            :text="comment.text"
            :comments="comment.comments"
            :id="comment.id"
            :date="comment.created_at"
            :nickname="comment.user.nickname"
            :email="comment.user.email"
        >
        </comment-item>
    </b-media>
</template>

<script>
import CommentItem from './CommentItem'
import {mapGetters, mapMutations, mapActions} from 'vuex'

export default {
    name: 'comment-item',
    props: ['text', 'comments', 'id', 'date', 'nickname','email'],
    data() {
        return {
            textForm: "",
            error: "",
        }
    },
    computed:{
        ...mapGetters('comment',['activeReplyForm']),
        ...mapGetters('auth',['isAuth', 'user']),
        ...mapGetters('post',['post']),
        isShowForm(){
            return this.activeReplyForm == this.id
        }
    },
    components: {
        CommentItem
    },
    methods:{
        ...mapMutations('comment',['setActiveReplyForm']),
        ...mapActions('comment',['sendComment']),
        showForm(){
            this.setActiveReplyForm(this.id);
        },
        hideForm(){
            this.setActiveReplyForm(0);
            this.textForm = ""
            this.error = ""
        },
        onSubmit(){
            let data = { 
                text: this.textForm,
                user_id: this.user.id,
                post_id: this.post.id,
                parent_id: this.id
            }
            this.sendComment(data)
                .then((data) => {
                    data.comment.comments = []
                    this.comments.push(data.comment)
                    this.hideForm();
                })
                .catch(error => {
                    this.error = error.errors.text[0]
                    console.log(error)
                })
        }
    },
    mounted(){

    }
    
}
</script>

<style>
.reply-form{
    min-height: 50px;
}
.bottom{
    width: 100%;
}
.fa-times{
    font-size: 18px;
}
</style>


