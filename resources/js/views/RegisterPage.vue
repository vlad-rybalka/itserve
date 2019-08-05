<template>
    <b-row class="justify-content-center">
        <b-col cols="6" class="mt-3">

            <b-form-group
                id="input-nickname"
                label="Nickname:"
                label-for="input-nickname"
            >
                <b-form-input
                id="input-nickname"
                v-model="formData.nickname"
                :state="displayErrors.nickname"
                type="nickname"
                required
                placeholder="Enter nickname"
                ></b-form-input>
                <small class="text-danger">{{getError('nickname')}}</small>
            </b-form-group>

            <b-form-group
                id="input-email"
                label="Email:"
                label-for="input-email"
            >
                <b-form-input
                id="input-email"
                v-model="formData.email"
                :state="displayErrors.email"
                type="email"
                required
                placeholder="Enter email"
                ></b-form-input>
                <small class="text-danger">{{getError('email')}}</small>
            </b-form-group>

            <b-form-group
                id="input-password"
                label="Password:"
                label-for="input-password"
            >
                <b-form-input
                id="input-password"
                v-model="formData.password"
                :state="displayErrors.password"
                type="password"
                required
                placeholder="Enter password"
                ></b-form-input>
                <small class="text-danger">{{getError('password')}}</small>
            </b-form-group>

            <b-form-group
                id="input-password-confirmation"
                label="Password confirmation:"
                label-for="input-password-confirmation"
            >
                <b-form-input
                id="input-password-confirmation"
                v-model="formData.password_confirmation"
                :state="displayErrors.password_confirmation"
                type="password"
                required
                placeholder="Enter password-confirmation"
                ></b-form-input>
                <small class="text-danger">{{getError('password_confirmation')}}</small>
            </b-form-group>
            <b-button type="submit" variant="primary" @click="onSubmit">Sign up</b-button>
        </b-col>
    </b-row>
</template>

<script>
import {mapGetters, mapActions, mapMutations} from 'vuex'
export default {
    data() {
        return {
            formData: {
                nickname: '',
                email: '',
                password: '',
                password_confirmation: ''
            },
            displayErrors: {
                nickname: null,
                email: null,
                password: null,
                password_confirmation: null
            }
        }
    },
    computed:{
        ...mapGetters('auth',['errors','user']),
    },
    methods:{
        ...mapActions('auth',['register']),
        ...mapMutations('auth',['updateErrors']),
        onSubmit(){
            this.register(this.formData).then(() => {
                    this.showMessage({
                        title:"Registration successful",
                        body: "Welcome, " +this.user.nickname+"!"
                    })
                    this.$router.go(-1)  

                }).catch(error => {
                    this.showErrors()
                })
        },
        getError(name){
            if(this.errors[name]) return this.errors[name][0];
                return ""
        },
        showErrors(){
            for (var key in this.displayErrors) {
                this.displayErrors[key]  = !this.errors.hasOwnProperty(key)?null:false;
            }
        },
        showMessage(data){
            this.$emit('message', data);
        }
    },
    mounted(){
        this.updateErrors({});
    }
}
</script>

