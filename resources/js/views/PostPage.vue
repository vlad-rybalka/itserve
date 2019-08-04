<template>
    <div>
        <div>
            <b-row>
                <b-col cols="9">
                    <b-jumbotron :header="data.title" header-level="6" bg-variant="white" border-variant="grey" class="py-4 mt-3">
                        <h5><i class="far fa-calendar-alt"></i> {{data.created_at}}</h5>
                        <img class="mt-3" :src="data.img" alt="" width="100%">
                        <h5 class="mt-4">{{data.description}}</h5>
                    </b-jumbotron>
                    <b-card class="mb-3 mt-0">
                        <b-row>
                            <b-col>
                                <h5 class="mb-3 float-left">Comments</h5>
                                <b-button variant="primary" :disabled="!isASC" @click="onSortClick('DESC')" size="sm" class="sort mb-3 float-right"><i class="fas fa-sort-alpha-down-alt"></i></b-button>
                                <b-button variant="primary" :disabled="isASC"  @click="onSortClick('ASC')" size="sm" class="sort mb-3 mr-1 float-right"><i class="fas fa-sort-alpha-down"></i></b-button>
                            </b-col>
                        </b-row>
                        <CommentItem v-for="comment in data.comments" :key="comment.id"
                            :text="comment.text"
                            :comments="comment.comments"
                            :id="comment.id"
                        >>
                        </CommentItem>
                        <b-form-textarea
                            id="textarea"
                            v-if="true"
                            placeholder="Enter something..."
                            rows="2"
                            class="mt-3 "
                        ></b-form-textarea>
                        <b-button variant="primary" v-if="true" class="mb-1 mt-2 px-5">Send</b-button>
                        <b-alert v-if="false" show variant="danger" class="mb-0 mt-3"><i class="fas fa-info-circle"></i> Comments can be added only by registered users. <a href="">Log in </a> </b-alert>
                    </b-card>
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
import CommentItem from '../components/CommentItem'

export default {
    components: {
        CommentItem
    },
    data() {
        return {
            data: {},
            sort: 'ASC'
        }
    },
    computed:{
        isASC(){
            return this.sort == 'ASC';
        }
    },
    methods:{
        getPost(){
            axios.get('/api/posts/'+this.$route.params.id)
                .then( response => {
                    console.log(response);
                    this.data = response.data;
                });
        },
        onSortClick(sort){
            this.sort = sort;
        }
    },
    created(){
        this.getPost();
    }
}
</script>

<style>
.sort{
    font-size: 20px;
    padding: 0px 7px;
}
</style>


