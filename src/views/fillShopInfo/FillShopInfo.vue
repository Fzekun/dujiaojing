<template>
  <div>
    <div class="form-group">
      <div class="wrap flex">
        <label class="label">店铺名称：</label>
        <div class="input-wrap flex_item">
          <input maxlength="20" class="input phone" type="text" />
          <v-touch v-show="showShopName" tag="span" class="icon-clear" v-on:tap=""></v-touch>
        </div>
      </div>
    </div>
    <div class="form-group">
      <div class="wrap flex">
        <label class="label">收货人：</label>
        <div class="input-wrap flex_item">
          <input maxlength="20" class="input phone" type="text" />
          <v-touch v-show="showShopName" tag="span" class="icon-clear" v-on:tap=""></v-touch>
        </div>
      </div>
    </div>
      <div class="shop-info">
          <a href="javascript:;" @click="showPopup">
            <p>
              <span>省市区：</span>
              <span class="float_right address">{{ address }}</span>
            </p>
            <i class="u-icon-arr"></i>
          </a>
          <a href="javascript:;">
            <p>
              <span class="float_left">详细地址：</span>
              <textarea class="site float_left" placeholder="请输入详细地址"></textarea>
            </p>
          </a>
      </div>
      <div class="btn-wrap">
        <a href="" class="btn-censure">确定</a>
      </div>
      <popup v-model="show">
          <header class="picker-header">
              <v-touch class="float_left" tag="span" v-on:tap="hidePopup">取消</v-touch>
              <!--<span class="float_right blue_color">确定</span>-->
           <v-touch class="float_right blue_color" tag="span" v-on:tap="getSelectValue">确定</v-touch>
          </header>
          <picker ref="picker" :data='year7' :columns=3 v-model='addressArray' @on-change='change'></picker>
      </popup>
  </div>
</template>
<script>
  import { Popup, Picker } from 'vux';
  export default{
    data(){
      return {
        showShopName : '',
        show : false,
        address : "",
        year7: [{
          name: '中国',
          value: 'china',
          parent: 0
        }, {
          name: '美国',
          value: 'USA',
          parent: 0
        }, {
          name: '广东',
          value: 'china001',
          parent: 'china'
        }, {
          name: '广西',
          value: 'china002',
          parent: 'china'
        }, {
          name: '美国001',
          value: 'usa001',
          parent: 'USA'
        }, {
          name: '美国002',
          value: 'usa002',
          parent: 'USA'
        }, {
          name: '广州',
          value: 'gz',
          parent: 'china001'
        }, {
          name: '深圳',
          value: 'sz',
          parent: 'china001'
        }, {
          name: '广西001',
          value: 'gz',
          parent: 'china002'
        }, {
          name: '广西002',
          value: 'sz',
          parent: 'china002'
        }, {
          name: '美国001_001',
          value: '0003',
          parent: 'usa001'
        }, {
          name: '美国001_002',
          value: '0004',
          parent: 'usa001'
        }, {
          name: '美国002_001',
          value: '0005',
          parent: 'usa002'
        }, {
          name: '美国002_002',
          value: '0006',
          parent: 'usa002'
        }],
        addressArray: []
      }
    },
    components : {
        Popup,Picker
    },
    mounted(){

    },
    methods : {
      showPopup(){
          this.show = true;
      },
      hidePopup(){
        this.show = false;
      },
      getSelectValue(){
          this.hidePopup();
          this.address = this.$refs.picker.getNameValues()
          //this.address = this.addressArray.join(' ');
      },
      change(){
        //console.log( this )
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" spoend>
  @import "../../assets/scss/common";
  body{
    background:
      $white !important;
  }
  .blue_color{
      color:$color_0086d1;
  }
  .label{
    font-size: px2rem(28);
    line-height: px2rem(74);
  }
  .form-group{
    padding: px2rem(35) px2rem(30) 0 0;
    margin: 0 0 0 px2rem(30);
    border-bottom: 1px solid $color_efeff4;
  }
  .wrap{
    height:px2rem(74);
    @extend .relative;
    .img-wrap{
      width: px2rem(182);
      height: px2rem(52);
      overflow: hidden;
      margin:px2rem(10) 0 0 0;
      img{
        width: 100%;
      }
    }
    .icon-eye{
      @extend .block;
      width: px2rem(50);
      height: px2rem(74);
      background: url("../../assets/images/icon/icon-eye.png") no-repeat center;
      background-size:px2rem(41) auto;
    }
    .icon-eye.on{
      background: url("../../assets/images/icon/icon-eye_on.png") no-repeat center;
      background-size:px2rem(37) auto;
    }
    .input-wrap{
      /*width: px2rem(322);*/
      position: relative;
      /*padding:0 px2rem(54) 0 0;*/
    }
    .input{
      height: px2rem(28);
      font-size:px2rem(28);
      padding:px2rem(23) 0;
      line-height: 1.2em;
      color: $color_333333;
      width: 100%;
    }
    .input::-webkit-input-placeholder{
      color:$color_999999;
    }
    .icon-clear{
      @extend  .absolute;
      right:0;
      top:0;
      height:px2rem(74);
      width: px2rem(54);
      background: url("../../assets/images/icon/icon-clear.png") no-repeat center;
      background-size: px2rem(33) auto;
    }
  }
  .address{
    margin : 0 px2rem(75) 0 0;
    @include overflow_omit;
    width: px2rem(500);
    text-align: right;
  }
  .btn-censure{
    @extend .block;
    border-radius: px2rem(6);
    background: $color_0086d1;
    @extend .text_center;
    color:$white;
    font-size:px2rem(32);
    line-height: px2rem(80);
    height:px2rem(80);
  }
  .u-icon-arr
  {
    position: absolute;
    top: px2rem(63);
    right: px2rem(35);
    width: px2rem(17);
    height: px2rem(17);
    border-style: solid;
    border-width: px2rem(3) px2rem(3) 0 0;
    border-color: $color_9a9899;
    -webkit-transform-origin: center center;
    -webkit-transform: rotateZ(45deg);
  }
  .btn-wrap{
    padding:px2rem(194) px2rem(30) 0 px2rem(30);
  }
  .picker-header{
      height: px2rem(70);
      line-height: px2rem(70);
      font-size:px2rem(28);
      padding: 0 px2rem(20);
      color: $color_333333;
  }
  .shop-info{
      padding: 0 0 0 px2rem(30);
      .site{
          width: px2rem(530);
          height:auto;
          margin: px2rem(20) 0 0 0;
          line-height: 1.4em;
          resize: none;
          overflow-x: hidden;
          overflow-y: visible;
      }
      a{
          @extend .block;
          color:$color_333333;
          font-size:px2rem(28);
          border-bottom: 1px solid $color_efeff4;
          overflow: hidden;
          padding:px2rem(32) 0 0 0;
          @extend .relative;
          p{
              line-height: px2rem(80);
          }
      }
  }
</style>
