<template>
    <div>
        <nav class="fixed-top">
            <div class="scroll-box">
                <div>
                    <v-touch :key="tab.id" tag="a" :class="{ active : active==index }" v-for="(tab,index) in tabs" v-on:tap="tabToggle(tab,index)">{{ tab.name }}</v-touch>
                </div>
            </div>
        </nav>
        <component :is="currentView">
          <!-- 组件在 vm.currentview 变化时改变！ -->
        </component>
        <Confirm :show-title="false" v-model="confirm"
                 @on-cancel="haha"
                 @on-confirm="hideConfirm"
        >
            <div class="cancel-order">
              <i class="icon-plaint"></i>
              <p>确认取消订单吗？</p>
            </div>
        </Confirm>
    </div>
</template>

<script>
  import AllOrder from '../../components/myOrder/AllOrder.vue'
  import Obligation from '../../components/myOrder/Obligation.vue'
  import OrderJust from '../../components/myOrder/OrderJust.vue'
  import StayDeliverGoods from '../../components/myOrder/StayDeliverGoods.vue'
  import StayReceiving from '../../components/myOrder/StayReceiving.vue'
  import YetReceiving from '../../components/myOrder/YetReceiving.vue'
  import DealClose from '../../components/myOrder/dealClose.vue'
  import {  Confirm } from 'vux'
  import { mapGetters, mapActions } from 'vuex'
  export default {

      data(){
          return {
            show : true,
            active : 0,
            currentView : 'AllOrder',
            tabs : [
                {
                    name : '全部',
                    view : 'AllOrder'
                },
                {
                    name : '待付款',
                    view : 'Obligation'
                },
                {
                    name : '订单处理中',
                    view : 'OrderJust'
                },
                {
                  name : '待发货',
                  view : 'StayDeliverGoods'
                },
                {
                  name : '待收货',
                  view : 'StayReceiving'
                },
                {
                  name : '已收货',
                  view : 'YetReceiving'
                },
                {
                  name : '交易关闭',
                  view : 'DealClose'
                }
            ]
          }
      },
      computed: {
        ...mapGetters([
          'confirm'
        ])
      },
      methods : {
        ...mapActions([
          'showConfirm',
          'hideConfirm'
        ]),
        haha(){
           this.hideConfirm()
        },
          tabToggle(item,index){
              this.active = index;
              this.currentView = item.view;
          }
      },
      mounted : function(){

//        this.$vux.alert.show({
//          title : false,
//          content : '<div>12312312</div>',
//          'button-text' : '知道了'
//        })
      },
      components : {
          AllOrder,Obligation,OrderJust,StayDeliverGoods,StayReceiving,YetReceiving,DealClose,Confirm
      }
  }
</script>

<style rel="stylesheet/scss" lang="scss" spoend>
  @import '../../assets/scss/common.scss';
  body{
      background: none;
  }
  .fixed-top{
      background: $white;
      width: 100%;
      height: px2rem(97);
      border-bottom: 1px solid $color_efeff4;
      @extend .text_center;
      .scroll-box{
        overflow-y: hidden;
        & > div{
          overflow-x: auto;
          white-space: nowrap;
          font-size: 0;
          -webkit-overflow-scrolling: touch;
          height: px2rem(97);
        }
      }
      a{
        display: inline-block;
        padding:0 px2rem(30);
        font-size:px2rem(28);
        color:$color_333333;
        height: px2rem(94);
        line-height: px2rem(94);
      }
      a.active{
        color:$color_0086d1;
        border-bottom: px2rem(3) solid $color_0086d1;
      }
  }
  .panel-box{
      @extend .absolute;
      top:px2rem(98);
      left: 0;
      width: 100%;
  }
  .cancel-order{
    @extend .text_center;

    color:$color_333333;
    padding:px2rem(60) 0 px2rem(12) 0;
    p{
      font-size:px2rem(28);
      line-height: px2rem(120);
    }
    .icon-plaint{
      @extend .block;
      width: px2rem(84);
      height: px2rem(84);
      background: url("../../assets/images/icon/icon-plaint.png") no-repeat;
      background-size:100% auto;
      margin: 0 auto 0 auto;
    }
  }
</style>
