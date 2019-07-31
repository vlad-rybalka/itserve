<template>
    <b-col cols="4">
        <b-card
            title="Card Title"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            class="mb-2 post-item"
            v-on:click="OnClick"
        >
            <b-card-text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
            </b-card-text>

            <div slot="footer">
                <h6 class="text-muted mb-0 float-left"><i class="far fa-calendar-alt"></i> 25.01.2017</h6>
                <h6 class="text-muted mb-0 float-right"><i class="fas fa-comments"></i> 6</h6>
            </div>
        </b-card>
    </b-col>
</template>

<script>
import Header from './Header'
export default {
    components: {
          Header
        },
    methods:{
        OnClick: function(){
            console.log(123);
        }
    }
}
</script>

<style>
    .post-item:hover{
        cursor:pointer;
    }
</style>

