<template>
    <div>
        <h4 class="mt-4">Add post</h4>
        <b-card bg-variant="light" class="mt-3">
            <b-row>
                <b-col cols="8">
                    <b-form-group label-cols="4" label-cols-lg="2" label="Title" label-for="input-title" >
                        <b-form-input id="input-title" placeholder="Title" aria-describedby="input-title-feedback" v-model="formData.title" :state="displayErrors.title"></b-form-input>
                        <small class="text-danger">{{getError('title')}}</small>
                    </b-form-group>
                    <b-form-group label-cols="4" label-cols-lg="2" label="Description" label-for="input-description" >
                        <b-form-textarea id="input-description" placeholder="Description" aria-describedby="input-description-feedback"  v-model="formData.description" :state="displayErrors.description"></b-form-textarea>
                        <small class="text-danger">{{getError('description')}}</small>
                    </b-form-group>
                    <b-form-group label-cols="4" label-cols-lg="2" label="Image" label-for="input-file">
                        <b-form-file
                            id="input-file"
                            :state="displayErrors.file"
                            placeholder="Choose a file..."
                            drop-placeholder="Drop file here..."
                            aria-describedby="input-file-feedback"
                            accept="image/*"
                            @change="onFileChange"
                            v-model="formData.file"
                        >
                        </b-form-file>
                        <small class="text-danger">{{getError('file')}}</small>
                    </b-form-group>
                     <b-button variant="primary" class="px-5 float-right" @click="onSubmit">Add post</b-button>
                </b-col>
                <b-col cols="4">
                    <div class="img_wrap">
                        <img id="imageid" src="/img/no-image.jpg" alt="" width="100%">
                    </div>
                </b-col>
            </b-row>
        </b-card>
    </div>
</template>

<script>
    import PostsApi from '../services/api/posts'
    import {mapGetters, mapActions, mapMutations} from 'vuex'

    export default {
        data() {
            return {
                formData: {
                    title: '',
                    description: '',
                    file: null
                },
                fileUrl: "",
                displayErrors: {
                    title: null,
                    description: null,
                    file: null
                }
            }
        },
        computed:{
             ...mapGetters('createPost',['errors']),
        },
        methods: {
            ...mapActions('createPost',['createPost']),
            ...mapActions('auth',['logout']),
            ...mapMutations('createPost',['updateErrors']),
            onFileChange(event){
                var input = event.target;

                if (input.files && input.files[0]) {
                    var reader = new FileReader();
                    reader.onload = function(e) {
                        this.fileUrl = e.target.result;
                        document.getElementById("imageid").src=this.fileUrl;
                    }
                    reader.readAsDataURL(input.files[0]);
                }
            },
            getError(name){
                if(this.errors[name]) return this.errors[name][0];
                    return ""
            },
            showErrors(){
                for (var key in this.displayErrors) {
                    this.displayErrors[key]  = !this.errors.hasOwnProperty(key);
                }
            },
            showMessage(data){
                this.$emit('message', data);
            },
            async onSubmit(){
                this.createPost(this.formData).then((response) => {
                    this.showMessage({
                        title: "Created successful",
                        body: "Post: " + response.data.title +" created!"
                    })
                    this.$router.push({ name: "posts"})

                }).catch(error => {
                    if(error.status == 'Token is Invalid') {
                        this.showMessage({
                            title: "Authorization timed out",
                            body: "Please sign in again"
                        })
                        this.logout()
                    }
                    this.showErrors()
                })
                
            }
        
        },
        mounted(){
            this.updateErrors({});
        }
    }
</script>

<style>
    textarea{
        min-height: 100px;
    }
    .img_wrap {
        width: 336px;
        overflow: hidden;
    }

    .img_wrap img {
        min-width: 336px;
        vertical-align: middle;
    }
</style>


