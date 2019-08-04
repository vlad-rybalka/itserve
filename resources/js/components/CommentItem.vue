<template>
    <b-media class="mt-3">
        <b-img slot="aside" blank blank-color="#ccc" width="48" alt="placeholder"></b-img>

        <h5 class="mt-0 text-primary"> 
            <span class='font-weight-bold'>Vlad Rybalka</span>   
            <small class="text-secondary">	• 2019-08-14 15:24:35</small>
            <small class="float-right text-secondary">vlad.rybalka@nure.ua</small>
        </h5>
        
        <p class="">
            {{text}}
        </p>
        <div class="bottom border-bottom">
            <b-button variant="link" v-if="!isShowForm" @click="showForm" class="mb-0 p-0">Reply</b-button>
            <b-button variant="link" v-if="isShowForm" @click="hideForm" class="mb-0 p-0 float-right"><i class="fas fa-times"></i></b-button>
            <b-form-textarea
                id="textarea"
                v-if="isShowForm"
                placeholder="Enter something..."
                rows="2"
                class="reply-form"
            ></b-form-textarea>
            <b-button variant="primary" v-if="isShowForm" class="mb-1 mt-1 px-4">Send</b-button>
        </div>
        <comment-item v-for="comment in comments" :key="comment.id"
            :text="comment.text"
            :comments="comment.comments"
            :id="comment.id"
        >
        </comment-item>
    </b-media>
</template>

<script>
import CommentItem from './CommentItem'
import {mapGetters, mapMutations} from 'vuex'

export default {
    name: 'comment-item',
    props: ['text', 'comments', 'id'],
    data() {
        return {
           
        }
    },
    computed:{
        ...mapGetters(['activeReplyForm']),
        isShowForm(){
            return this.activeReplyForm == this.id
        }
    },
    components: {
        CommentItem
    },
    methods:{
        ...mapMutations(['setActiveReplyForm']),
        showForm(){
            this.setActiveReplyForm(this.id);
        },
        hideForm(){
            this.setActiveReplyForm(0);
        }
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


