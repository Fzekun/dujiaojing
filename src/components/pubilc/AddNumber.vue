<template>
  <div>
    <div class="overflow_hidden top-add" v-show="showAdd">
      <v-touch tag="i" class="icon-add float_right" v-on:tap="showInput"></v-touch>
    </div>
    <div class="add-box">
      <div class="input-wrap" :class="{ show : isInput, hide : isInput == false }">
        <input ref="btn" v-model="value" maxlength="10" class="input float_right" type="tel">
        <v-touch class="icon-sub float_right" tag="i" v-on:tap="sub"></v-touch>
      </div>
      <v-touch class="icon-add" tag="i" v-on:tap="add"></v-touch>
    </div>
    <p v-show="isRestriction" class="restriction-text">限购{{ restriction }}件</p>
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
  .overflow_hidden{
    overflow: hidden;
  }
  .top-add{
    position: relative;
    z-index: 5;
  }

    .icon-add{
      @extend .block;
      width:px2rem(43);
      height:px2rem(43);
      background: url("../../assets/images/icon/icon-add.png") no-repeat;
      background-size:100% auto;
    }
    .input-wrap{
      @extend .absolute;
      right:px2rem(-100);
      width:100%;
    }
    .input-wrap.show{
      transition:right .2s;
      right:px2rem(50);
    }
    .input-wrap.hide{
      transition:right .2s;
      right:px2rem(-100);
    }
    .restriction-text{
      @extend .text_right;
      font-size: px2rem(24);
      padding:0 px2rem(30) 0 0;
      line-height: px2rem(43);
      color:$color_999999;
      @extend .absolute;
      top: px2rem(43);
      right:0;
    }

  .input{
    /*@extend .absolute;*/
    width: px2rem(40);
    margin: 0 0 0 px2rem(5);
    font-size: px2rem(20);
    height: px2rem(20);
    padding: px2rem(11) 0 px2rem(10) 0;
    text-align: center;
    left:px2rem(48);
    top:0;
    border:1px solid $color_9a9899;
    border-radius: px2rem(6);
  }
  .icon-sub{
    width:px2rem(43);
    height:px2rem(43);
    background: url("../../assets/images/icon/icon-sub.png") no-repeat;
    background-size:100% auto;
  }
  .add-box{
    width: 100%;
    height: px2rem(43);
    @extend .absolute;
    overflow: hidden;
    top:0;
    z-index: 2;
    .icon-add{
      @extend .absolute;
      right: 0;
      top:0;
    }
  }
</style>
