<template>
  <div class="form-group">
    <div class="wrap flex">
      <!--<i class="icon-password"></i>-->
      <label class="label">{{label}}</label>
      <div class="input-wrap flex_item">
        <input ref="password" v-model="password" maxlength="20" :placeholder="placeholder" class="input phone" type="password" />
        <v-touch v-show="showPassword" tag="span" class="icon-clear" v-on:tap="clearPassword"></v-touch>
      </div>
      <div class="eye-wrap">
        <v-touch v-show="eyeGray" tag="i" class="icon-eye" v-on:tap="tapShowPassword"></v-touch>
        <v-touch v-show="eyeHighlight" tag="i" class="icon-eye on" v-on:tap="tapHidePassword"></v-touch>
      </div>
    </div>
  </div>
</template>
<script>

    export default{
        data(){
          return {
             password : '',
             showPassword : false,
             eyeGray : false,
             eyeHighlight : false
          }
        },
        watch : {
          password(val){

            if( val == '' ){
              this.eyeGray = false;
              this.eyeHighlight = false;
              this.$refs.password.type = 'password';
              this.showPassword = false;
            }else{
              if( this.eyeHighlight ){
                this.eyeGray = false;
              }else{
                this.eyeGray = true;
              }
              this.showPassword = true;
            }
          }
        },
        methods : {
          clearPassword(){
            this.password = '';
            this.showPassword = false;
          },
          tapHidePassword : function(){
            this.eyeGray = true;
            this.eyeHighlight = false;
            this.$refs.password.type = 'password';
          },
          tapShowPassword : function(){
            this.eyeGray = false;
            this.eyeHighlight = true;
            this.$refs.password.type = 'text';
          }
        },
        props : [ 'label', 'placeholder' ]
    }
</script>
