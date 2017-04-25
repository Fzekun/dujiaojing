<template>
  <div class="number-wrap">
         <v-touch class="icon-sub" tag="i" v-on:tap="sub"></v-touch>
         <input ref="btn" v-model="value" maxlength="10" class="input" type="tel">
         <v-touch class="icon-add" tag="i" v-on:tap="add"></v-touch>
  </div>
</template>
<script>
    import { Toast } from 'vux'
    export default{
        data(){
            return {
                value : 0,
                showAdd : true,
                isInput : null,
                isRestriction : false
            }
        },
        props : [ 'number','restriction' ],
        watch : {
            value(val){
                if( val === '' ){
                  this.value = this.number;
                }
                if( val > this.restriction ){
                   //限购功能
                   //this.$store.dispatch('showToast');
                   //this.$store.dispatch('getRestriction',this.restriction);
                }
                var len = val.length,
                input = this.$refs.btn;
                input.style.width = 40+(len*10) + 'px';
                this.$emit('compute');
            }
        },
        methods : {
            sub(){
              if( this.value == this.number ){
                this.showAdd = true;
                this.isInput = false;
                this.value--;
              }else{
                this.value--;
              }
            },
            add(){
              this.value++;
            },
            showInput(){
                //是否限购
//                if( this.restriction && this.restriction > 0 ){
//                    this.isRestriction = true;
//                }
                this.value = this.number;
                this.showAdd = false;
                this.isInput = true;
            }
        },
        components : {
          Toast
        }
    }
</script>
<style rel="stylesheet/scss" lang="scss" spoend>
  @import '../../assets/scss/base/necessary.scss';
    .number-wrap{
      font-size:0;
    }
    .icon-add{
      @extend .inline_block;
      width:px2rem(43);
      height:px2rem(43);
      background: url("../../assets/images/icon/icon-add.png") no-repeat;
      background-size:100% auto;
    }
  .input{
    @extend .inline_block;
    vertical-align: top;
    width: px2rem(40);
    font-size: px2rem(20);
    height: px2rem(20);
    padding: px2rem(11) 0 px2rem(10) 0;
    text-align: center;
    border:1px solid $color_9a9899;
    border-radius: px2rem(6);
    margin:0 px2rem(6);
  }
  .icon-sub{
    @extend .inline_block;
    width:px2rem(43);
    height:px2rem(43);
    background: url("../../assets/images/icon/icon-sub.png") no-repeat;
    background-size:100% auto;
  }
  .add-box{
    width: 100%;
    height: px2rem(43);
    overflow: hidden;
  }
</style>
