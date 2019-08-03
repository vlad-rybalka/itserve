<template>
    <router-link :to="{name: 'post-show', params: { id: this.id}}">
        <b-card
            class="mb-3 post-item"
            :img-src="img" 
            img-alt="Image" 
            img-top
        >
            <b-row no-gutters>
                <b-col md="12">
                    <b-card-body :title="title" class="p-0 text-dark">
                        <b-card-text>
                            {{description}}
                        </b-card-text>
                    </b-card-body>
                </b-col>
            </b-row>
            <div slot="footer" class="pb-3">
                <h6 class="text-muted mb-0 float-left"><i class="far fa-calendar-alt"></i> {{date}}</h6>
                <h6 class="text-muted mb-0 float-right"><i class="fas fa-comments"></i> 6</h6>
            </div>
        </b-card>
    </router-link>
</template>

<script>
import Header from './Header'
export default {
    components: {
          Header
        },
    props: ['title', 'description', 'img', 'date', 'id'],
    methods:{

    }
}
</script>

<style>
    .post-item:hover{
        cursor:pointer;
    }
    .post-item .img_wrap {
        width: 308px;
        height: 250px;
        overflow: hidden;
    }

    .post-item .img_wrap img {
        min-width: 308px;
        min-height: 250px;
        vertical-align: middle;
    }
</style>

