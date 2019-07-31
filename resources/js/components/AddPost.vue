<template>
    <div>
        <h4 class="mt-4">Add post</h4>
        <b-card bg-variant="light" class="mt-3">
            <b-row>
                <b-col cols="8">
                    <b-form-group label-cols="4" label-cols-lg="2" label="Headline" label-for="input-headline">
                        <b-form-input id="input-headline"></b-form-input>
                    </b-form-group>
                    <b-form-group label-cols="4" label-cols-lg="2" label="Text" label-for="input-text">
                        <b-form-textarea id="input-text"></b-form-textarea>
                    </b-form-group>
                    <b-form-group label-cols="4" label-cols-lg="2" label="Image" label-for="input-image">
                        <b-form-file
                            :state="Boolean(file)"
                            placeholder="Choose a file..."
                            drop-placeholder="Drop file here..."
                        >
                        </b-form-file>
                    </b-form-group>
                     <b-button variant="primary" class="px-5 float-right">Add post</b-button>
                </b-col>
                <b-col cols="4">
                    <img src="/img/no-image.jpg" alt="" width="100%">
                </b-col>
            </b-row>
        </b-card>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          headline: '',
          text: '',
          file: null,
        }
      }
    },
    methods: {
      
      
    }
  }
</script>

<style>
    textarea{
        min-height: 100px;
    }
</style>


