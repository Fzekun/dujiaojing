<template>
  <div class="list-wrap">
    <!--<ul class="commodity-list">-->
    <ul class="shop-list">
      <li v-for="data in datas">
        <a href="">
          <div class="img-wrap float_left">
            <img src="../../assets/images/classify-good.png" alt="">
            <span class="icon-tag icon-supplier">供</span>
          </div>
          <!--<div class="text-wrap float_left">-->
          <!--<h3>{{ data.name }}</h3>-->
          <!--<p class="gray_color">规格：{{ data.dimension }}</p>-->
          <!--<p class="gray_color delivery-price"><i class="float_left icon-psf">起</i>{{ data.deliveryPrice }}</p>-->
          <!--<p class="price red_color">{{ data.price }}</p>-->
          <!--</div>-->
          <div class="text-wrap float_left">
            <h3>{{ data.name }}</h3>
            <p class="phone_text">电话：<a href="" class="tel">13718163284</a><a href="tel:13718163284" class="call">拨打</a></p>
            <p class="gray_color delivery-price"><i class="float_left icon-psf">起</i>{{ data.deliveryPrice }}</p>
          </div>
        </a>
        <div class="collect-wrap">
          <i class="icon-dustbin"></i>
        </div>
        <a href="javascript:;" class="u-icon-arr"></a>
        <!--<div class="add-wrap">-->
        <!--<add-number :restriction="data.restriction" ref="input" :number="data.input" v-on:compute="addTotal"></add-number>-->
        <!--</div>-->
      </li>
    </ul>
  </div>
</template>
<script>
  import AddNumber from '../pubilc/AddNumber.vue'
  export default{
    mounted(){
      //console.log( typeof this.datas )
    },
    components : {
      AddNumber
    },
    props : ['datas'],
    methods : {
      addTotal(){
        var input = this.$refs.input;
        this.orderTotal = 0;
        input.forEach((item)=>{
          this.orderTotal += parseInt(item.value,10);
        });
        this.$store.dispatch( 'computeOrderTotal', this.orderTotal );
      }
    }
  }
</script>
