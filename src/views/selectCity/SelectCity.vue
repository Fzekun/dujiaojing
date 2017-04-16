<template>
    <div class="select-city">
        <header class="top-search">
            <div class="search-box flex">
              <label class="search-icon" for=""></label>
              <form class="flex_item" id="myform" action="" onsubmit="return false;">
                <input type="search" autocomplete="off" @search="search" placeholder="输入城市名称或拼音" class="search-input">
              </form>
            </div>
        </header>
        <div class="current-city">
            <p>当前城市：<span class="blue_color">北京</span></p>
        </div>
        <div class="line"></div>
        <div class="city-box">
            <p class="opened_text">已开通城市</p>
            <div class="city-wrap">
                <div class="opened-city-box">
                  <ul>
                    <li v-for="city in openedCityData">
                        <img :src="city.src" alt="">
                        <a href="javascript:;">{{ city.city }}</a>
                    </li>
                  </ul>
                </div>
                <div class="stay_open-city">
                  <p class="stayCity-text">待开通城市</p>
                </div>
                <ul class="letter_city-box">
                    <li class="en" v-for="(item,index) in letterCity">
                        <h3 href="">{{ item.letter }}</h3>
                        <p v-for="city in item.citys">{{ city.name }}</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="letter-box">
            <h3>热门</h3>
            <div id="letter">
              <p v-for="item in letter">{{ item }}</p>
            </div>
        </div>
        <div v-if="showChoose" id="choose" class="choose">{{ chooseText }}</div>
    </div>
</template>
<script>
  import $ from 'n-zepto'
  export default {
      data(){
          return {
             showChoose : false,
             chooseText : '',
             letter : [
                'A','B','C','D','E','F','G','H','I',
                'J','K','L','M','N','O','P','Q','R',
                'S','T','U','V','W','X','Y','Z'
             ],
             letterCity :  [
                 {
                   letter : 'A',
                   citys : [
                     {
                       name : '商丘'
                     },
                     {
                       name : '商丘'
                     },
                     {
                       name : '商丘'
                     },
                     {
                       name : '商丘'
                     },
                     {
                       name : '商丘'
                     },
                     {
                       name : '商丘'
                     },
                     {
                       name : '商丘'
                     },
                     {
                       name : '商丘'
                     },
                     {
                       name : '商丘'
                     }
                   ]
                 },
                 {
                   letter : 'B',
                   citys : [
                     {
                       name : '商丘'
                     },
                     {
                       name : '商丘'
                     },
                     {
                       name : '商丘'
                     },
                     {
                       name : '商丘'
                     },
                     {
                       name : '商丘'
                     },
                     {
                       name : '商丘'
                     },
                     {
                       name : '商丘'
                     },
                     {
                       name : '商丘'
                     },
                     {
                       name : '商丘'
                     }
                   ]
                 },
                 {
                   letter : 'C',
                   citys : [
                     {
                       name : '商丘'
                     },
                     {
                       name : '商丘'
                     },
                     {
                       name : '商丘'
                     },
                     {
                       name : '商丘'
                     },
                     {
                       name : '商丘'
                     },
                     {
                       name : '商丘'
                     },
                     {
                       name : '商丘'
                     },
                     {
                       name : '商丘'
                     },
                     {
                       name : '商丘'
                     }
                   ]
                 },
                 {
                   letter : 'D',
                   citys : [
                     {
                       name : '商丘'
                     },
                     {
                       name : '商丘'
                     },
                     {
                       name : '商丘'
                     },
                     {
                       name : '商丘'
                     },
                     {
                       name : '商丘'
                     },
                     {
                       name : '商丘'
                     },
                     {
                       name : '商丘'
                     },
                     {
                       name : '商丘'
                     },
                     {
                       name : '商丘'
                     }
                   ]
                 },
             ],


              openedCityData :  [
                {
                    city : '邯郸',
                    src : '../static/images/handan.jpg'
                },
                {
                  city : '秦皇岛',
                  src : '../static/images/qinhuangdao.jpg'
                },
                {
                  city : '衡水',
                  src : '../static/images/hengshui.jpg'
                },
                {
                  city : '邢台',
                  src : '../static/images/xingtai.jpg'
                },
                {
                  city : '聊城',
                  src : '../static/images/liaocheng.jpg'
                },
                {
                  city : '天津',
                  src : '../static/images/tianjin.jpg'
                }
              ]
          }
      },
      mounted : function(){
          this.selectCity();
      },
      methods : {
          search(){

          },
          selectCity(){
              var _this = this;
//                  index = 0,
//
//                  //$lis = $('#letter p'),
//                  ot,
//                  vh;
              $('#letter').on('touchstart',function(e){

                  _this.showChoose = true;
                  _this.chooseText = $(e.target).text();
//                  vh = $(this).height();
//                  ot = $(this).offset().top
//                  var t = e.touches[0];
//                  index = (t.pageY - ot) / ((vh) / _this.letter.length) | 0;
                  $('.en').each(function () {
                    if ($(this).find('h3').text() == $(e.target).text()){
                      $(window).scrollTop($(this).offset().top )
                      return false;
                    }
                  });
                  //$('#letter').on('touchmove',touchmove);
                  $('#letter').on('touchend',touchend);
                  e.preventDefault();
              });
              function touchmove(e){
//                 e.preventDefault();
//                  var t = e.touches[0];
//                  index = (t.pageY - ot) / ((vh) / _this.letter.length);
//                  if( index <= 0 ){
//                      index = 0;
//                  }
//                  if( index >=  _this.letter.length ){
//                      index =  _this.letter.length-1;
//                  }
//                  _this.chooseText = $lis.eq(index).text();

              }
                function touchend(e){
                  _this.showChoose = false;
  //                $('.en').each(function () {
  //                  if ($(this).find('h3').text() == $lis.eq(index).text()) {
  //                    $(window).scrollTop($(this).offset().top )
  //                    return false;
  //                  }
  //                });
                  //$('#letter').off('touchmove', touchmove);
                  $('#letter').off('touchend', touchend);
                  e.preventDefault();
                }
          }
      },
      components : {
      }
  }
</script>

<style rel="stylesheet/scss" lang="scss" spoend>
  @import '../../assets/scss/common';
  body,html{
      background: none;
  }
  .select-city{
      font-size: px2rem(26);
  }
  .blue_color{
      color:$color_0086d1;
  }
  .line{
      height: px2rem(10);
      background: $color_efeff4;
  }
  .choose{
      position: fixed;
      left:50%;
      top:50%;
      width: px2rem(100);
      height: px2rem(100);
      border-radius: px2rem(10);
      background:rgba(0,0,0,1);
      color:$white;
      @extend .text_center;
      font-size: px2rem(30);
      margin: px2rem(-50) 0 0 px2rem(-50);
      line-height: px2rem(100);
  }
  .letter-box{
      position: fixed;
      top:px2rem(282);
      right:0;
      font-size: px2rem(24);
      width: px2rem(100);
      @extend .text_center;
      h3{
          height: px2rem(42);
      }
      p{
          height: px2rem(30);
      }
  }
  .city-box{
      .opened_text{
          line-height: px2rem(80);
          border-bottom: 1px solid $color_efeff4;
          padding: 0 0 0 px2rem(82);
          background: url("../../assets/images/icon/icon-city_location_on.png") no-repeat px2rem(30) px2rem(22);
          background-size: px2rem(30) auto;
      }
     .city-wrap{
        padding: px2rem(35) 0 0 px2rem(30);
     }
    .stay_open-city{
        width: px2rem(620);
    }
    .stayCity-text{
        height: px2rem(65);
        line-height: px2rem(52);
        border-bottom: 1px solid $color_efeff4;
        padding:0  0 0 px2rem(50);
        background: url("../../assets/images/icon/icon-city_location.png") no-repeat left px2rem(8);
        background-size: px2rem(30) auto;
    }
    .letter_city-box{
        width: px2rem(620);
        h3{
          height: px2rem(40);
          line-height: px2rem(60);
          overflow: hidden;
          text-indent: px2rem(8);
        }
        p{
          line-height: px2rem(75);
          color:$color_666666;
            line-height: px2rem(75);
          border-bottom: 1px solid $color_efeff4;
        }
    }
      .opened-city-box{
          width: px2rem(620);
          ul{
              width: px2rem(645);
              overflow: hidden;
              li{
                  @extend .float_left;
                  @extend .relative;
                  width: px2rem(300);
                  height: px2rem(103);
                  overflow: hidden;
                  margin: 0 px2rem(20) px2rem(20) 0;
                  img{
                      width: 100%;
                  }
                  a{
                      @extend .absolute;
                      top:0;
                      left:0;
                      width: 100%;
                      height: 100%;
                      font-size: px2rem(32);
                      color:$white;
                      @extend .text_center;
                      line-height: px2rem(103);
                  }
              }
          }
      }
  }
  .current-city{
      line-height: px2rem(84);
      padding:0 0 0 px2rem(30);
  }
  .top-search{
    padding: px2rem(18) px2rem(54) px2rem(18) px2rem(52);
    border-bottom: 1px solid $color_d9d9d9;
    .search-box{
      border:1px solid $color_d9d9d9;
      border-radius: px2rem(6);
      height: px2rem(59);
      .search-icon{
        width: px2rem(83);
        height: 100%;
        background: url("../../assets/images/icon/icon-classify_search.png") no-repeat px2rem(30) center;
        background-size: px2rem(30) auto;
      }

      .search-input{
        width: 100%;
        padding:0 px2rem(30) 0 0;
        font-size: px2rem(26);
        padding: px2rem(14) 0;
        /*height: 100%;*/
        line-height: 1em;
      }
    }
  }

</style>
