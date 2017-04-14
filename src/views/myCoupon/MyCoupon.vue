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
  import Unused from '../../components/myCoupon/Unused.vue'
  import YetUnused from '../../components/myCoupon/YetUnused.vue'
  import Expired from '../../components/myCoupon/Expired.vue'
  export default {
      data(){
          return {
              active : 0,
              arr : [ 5, 10, 6 ],
              currentView : 'Unused',
              tabs : [
              {
                name : '未使用',
                view : 'Unused'
              },
              {
                name : '已使用',
                view : 'YetUnused'
              },
              {
                name : '已过期',
                view : 'Expired'
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
        Unused,YetUnused,Expired
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
        border-bottom:px2rem(3) solid $color_0086d1;
      }
  }
</style>
