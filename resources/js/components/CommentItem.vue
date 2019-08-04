<template>
    <b-media>
        <b-img slot="aside" blank blank-color="#ccc" width="64" alt="placeholder"></b-img>

        <h5 class="mt-0">Nested Media</h5>
        <p class="mb-0">
        Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in
        faucibus.
        </p>
        <comment-item v-for="comment in comments" :key="comment.id"
            :text="comment.text"
            :comments="comment.comments"
        >
        </comment-item>
    </b-media>
</template>

<script>
import CommentItem from './CommentItem'

export default {
    name: 'comment-item',
    props: ['text', 'comments'],
    components: {
        CommentItem
    }
    
}
</script>

