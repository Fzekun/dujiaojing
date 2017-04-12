<template>
    <div>
      <header class="compon-header">
        <v-touch :key="tab.id" :class="{ active : active==index }" v-for="(tab,index) in tabs" class="flex_item" tag="a" v-on:tap="tabToggle(tab,index)">{{ tab.name }}( {{ arr[index] }} )</v-touch>
      </header>
      <component :is="currentView">
        <!-- 组件在 vm.currentview 变化时改变！ -->
      </component>
    </div>
</template>

<script>
  import Available from '../../components/useCoupon/Available.vue'
  import NotAvailable from '../../components/useCoupon/NotAvailable.vue'
  export default {
      data(){
          return {
              active : 0,
              arr : [ 5, 10],
              currentView : 'Available',
              tabs : [
              {
                name : '可用优惠券',
                view : 'Available'
              },
              {
                name : '不可用优惠券',
                view : 'NotAvailable'
              }
            ]
          }
      },
      methods : {
        tabToggle(item,index){
          this.active = index;
          this.currentView = item.view;
        }
      },
      components : {
        Available,NotAvailable
      }
  }
</script>

<style rel="stylesheet/scss" lang="scss" spoend>
  @import '../../assets/scss/common.scss';
  .compon-header{
      @extend .flex;
      height: px2rem(80);
      background: $white;
      a{
          line-height: px2rem(80);
          font-size:px2rem(28);
          @extend .text_center;
      }
      a.active{
        height: px2rem(80);
        @extend .relative;
        z-index: 2;
        border-bottom:px2rem(3) solid $color_0086d1;
      }
  }
</style>
