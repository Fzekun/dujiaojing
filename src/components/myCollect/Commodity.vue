<template>
  <div class="list-wrap">
    <ul class="commodity-list">
      <li v-for="data in datas">
        <a href="">
          <div class="img-wrap float_left">
            <img src="../../assets/images/classify-good.png" alt="">
          </div>
          <div class="text-wrap float_left">
            <h3>{{ data.name }}</h3>
            <p class="gray_color">规格：{{ data.dimension }}</p>
            <p class="gray_color delivery-price"><i class="float_left icon-psf">起</i>{{ data.deliveryPrice }}</p>
            <p class="price red_color">{{ data.price }}</p>
          </div>
        </a>
        <div class="collect-wrap">
          <i class="icon-dustbin"></i>
        </div>
        <div class="add-wrap">
          <add-number :restriction="data.restriction" ref="input" :number="data.input" v-on:compute="addTotal"></add-number>
        </div>
      </li>
    </ul>
    <not-date></not-date>
  </div>
</template>
<script>
    import AddNumber from '../pubilc/AddNumber.vue'
    import NotDate from '../../components/myCollect/NotData.vue'
    export default{
        mounted(){
            //console.log( typeof this.datas )
        },
        components : {
            AddNumber,
            NotDate
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
