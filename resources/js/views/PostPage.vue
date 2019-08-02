<template>
    <div>
        <div>
            <b-jumbotron :header="data.title" header-level="4" bg-variant="white" border-variant="grey" class="py-4 mt-3">
                <h5><i class="far fa-calendar-alt"></i> {{data.created_at}}</h5>
                <img class="mt-3" :src="data.img" alt="" width="100%">
                <h4 class="mt-4">{{data.description}}</h4>
            </b-jumbotron>
            <b-card class="mb-3 mt-0">
                <b-media>
                    <b-img slot="aside" blank blank-color="#ccc" width="64" alt="placeholder"></b-img>

                    <h5 class="mt-0">Media Title</h5>
                    <p>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                        Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
                        ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </p>
                    <p>
                        Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque
                        penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    </p>

                    <b-media>
                        <b-img slot="aside" blank blank-color="#ccc" width="64" alt="placeholder"></b-img>

                        <h5 class="mt-0">Nested Media</h5>
                        <p class="mb-0">
                        Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in
                        faucibus.
                        </p>
                        <b-media>
                            <b-img slot="aside" blank blank-color="#ccc" width="64" alt="placeholder"></b-img>

                            <h5 class="mt-0">Nested Media</h5>
                            <p class="mb-0">
                            Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in
                            faucibus.
                            </p>
                            <b-media>
                                <b-img slot="aside" blank blank-color="#ccc" width="64" alt="placeholder"></b-img>

                                <h5 class="mt-0">Nested Media</h5>
                                <p class="mb-0">
                                Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in
                                faucibus.
                                </p>
                            </b-media>
                        </b-media>
                    </b-media>
                </b-media>
                <b-alert show variant="danger" class="mb-0 mt-3"><i class="fas fa-info-circle"></i> Comments can be added only by registered users. <a href="">Log in </a> </b-alert>
            </b-card>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data: {}
        }
    },
    methods:{
        getPost(){
            axios.get('/api/posts/'+this.$route.params.id)
                .then( response => {
                    console.log(response);
                    this.data = response.data;
                });
        }
    },
    created(){
        this.getPost();
    }
}
</script>

