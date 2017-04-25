<template>
  <div>
    <!--收货地址 start-->
    <div class="receiving_info-box">
      <a href="">
        <div class="wrap">
          <h3>
            <span class="float_left bold">张亮</span>&nbsp;
            <span class="float bold">13718163294</span>
          </h3>
          <p class="gray_color">北京市朝阳区西单北大街号西单图书大厦单北大
            街66号西单图书大厦</p>
          <i class="u-icon-arr"></i>
        </div>
      </a>
    </div>
    <!--收货地址 start-->
    <div class="order-line"></div>
    <div class="order-commodity">
      <h3 class="header"><i class="busine-type factory">厂</i>叶问冷冻食品叶问冷冻食品有限公司叶问冷冻食品有限有限公司</h3>
      <div class="commodity">
        <ul>
          <li>
            <div class="order_image_text-box">
              <div class="img-wrap float_left">
                <img src="../../assets/images/order-commodity.jpg" alt="">

              </div>
              <div class="text-wrap float_left">
                <h4>客味缘 </h4>
                <p class="gray_color">规格：12122.15kg/袋</p>
                <p class="delivery-price gray_color"><span>起</span>123121</p>
                <p>
                  <span class="float_left">参考价：<i class="red_color">￥100.00</i></span>
                </p>
              </div>
              <div class="buy-number"><number></number></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="line"></div>
    <div class="pay_type-box">
      <div class="pay-wrap flex">
        <p>支付方式</p>
        <div>
          <v-touch :key="item.id" class="float_left" :class="{ active : index == payTypeIndex, 'chat-pay':index==0 }"  v-for="(item,index) in payTypes" v-on:tap="togglePayTypes(index)" tag="a">{{ item.text }}</v-touch>
        </div>
      </div>
      <div class="delivery-type flex">
        <p>配送方式</p>
        <div>

          <v-touch class="float_left"
                   :key="item.id"
                   :class="{ active : index == deliveryMethodsIndex}"
                   v-for="(item,index) in deliveryMethods"
                   v-on:tap="toggleDeliveryMethods(index)" tag="a">{{ item.text }}</v-touch>
          <!--<a href="" class="float_left">配送</a>-->
          <!--<a href="" class="float_left">自提</a>-->
        </div>
      </div>
      <div class="delivery-type flex">
        <p>发票信息</p>
        <div>

          <v-touch class="float_left"
                   :key="item.id"
                   :class="{ active : index == invoicesIndex}"
                   v-for="(item,index) in invoices"
                   v-on:tap="toggleInvoicesMethods(index)" tag="a">{{ item.text }}</v-touch>
          <!--<a href="" class="float_left">配送</a>-->
          <!--<a href="" class="float_left">自提</a>-->
        </div>
      </div>
    </div>
    <div class="line"></div>
    <div class="remark-box">
      <p><span class="float_left">订单备注</span><textarea maxlength="30" class="float_left" placeholder="选填，30字以内"></textarea></p>
    </div>
    <div class="line"></div>
    <div class="order_details-box">
      <div class="price-wrap">
        <div class="price-box">
          <p>
            <span class="float_left">数量总计：</span>
            <span class="float_right">45件</span>
          </p>
          <p>
            <span class="float_left">商品总价：</span>
            <span class="float_right red_color">￥14145.00</span>
          </p>
        </div>
      </div>
      <div class="submit-wrap">
        <p>总参考价：<span class="red_color duty-price">￥14145.00</span>（不含运费）</p>
        <a href="" class="submit-btn">提交订单</a>
      </div>
    </div>
  </div>
</template>
<script>
  import Number from '../pubilc/Number.vue'
  export default{
    data(){
      return {
        deliveryMethodsIndex : 0,
        invoicesIndex : 0,
        payTypeIndex : 0,
        //配送方式
        deliveryMethods : [
          {
            text : '配送',
            type : ''
          },
          {
            text : '自提',
            type : ''
          }
        ],
        payTypes : [
          {
            text : '微信支付',
            type : ''
          },
          {
            text : '货到付款',
            type : ''
          }
        ],
        invoices : [
          {
            text : '需要发票',
            type : ''
          },
          {
            text : '不需要发票',
            type : ''
          }
        ]
      }
    },
    methods : {
      toggleDeliveryMethods(index){
        this.deliveryMethodsIndex = index;
      },
      toggleInvoicesMethods(index){
        this.invoicesIndex = index;
      },
      togglePayTypes( index ){
        this.payTypeIndex = index;
      }
    },
    components : {
      Number
    }
  }
</script>
