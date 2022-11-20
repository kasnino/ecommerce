<template>
<div class="row mx-0 px-0 py-1">
  <div class="col-6 mx-0 px-0  my-1" 
  :class="{'pe-1':(index%2==0),'ps-1':(index%2!=0)}" v-for="(item, index) in prodcuts" :key="index">
    <figure class="offer-grid-item-img position-relative text-center">
      <!-- <img :src="item.image" alt="grid item" style="height:220px; width: 170px;"> -->
      <img class="img_card--products" :src="item.image" alt="grid item" :style="`${item.cupon.agotado ? 'filter: grayscale(.9);':''} `">
      <span class="offer-grid-item-img-company  opacity-75" v-html="item.label_top" 
      :style="` background:${item.label_top_bg}; 
       color:${item.label_top_color}; + ${item.cupon.agotado ? 'filter: grayscale(.8);':''} `"></span>
      <span v-if="item.black_friday" class="black_friday fw-bold" v-html="item.black_friday_top" :style="'  color:'+item.black_friday_color+';' "></span>

    
    
 <span :style="`${item.cupon.agotado ? 'filter: grayscale(.9);':''}`" 
 :class="{'offer-grid-item-img-discount':!item.oclock,'offer-grid-item-img-discount-oclock':item.oclock,}">-{{item.discount}}%</span>
         <span :class="{'badget-discount ps-1 pe-1 badget-static':!item.oclock,'badget-discount ps-1 pe-1 badget-buttom':item.oclock + 'badget-discount ps-1 pe-1'}">
        <div class="countdown  d-flex js-article-detail-countdown-container ">
              <div class="countdown--date js-article-detail-countdown">
                 <Timer/>
                <small class="ms-1">00:29:44</small></div>
              </div>
              </span>
      
      <span class="offer-grid-item-img-oclock" v-if="item.oclock">2d : 20h : 15s</span>
      <div v-if="item.cupon.agotado" class="agotado_container d-flex justify-content-center align-items-center"
     style="">
     
       <button 
                v-if="item.cupon.agotado"
                class="btn " style="background: #CC2323;
                padding:0px;
                border-radius:0px;
                width: 80%;
                height:12%;
                color: #fff;
                " >
                AGOTADO
              </button>
              </div>
      </figure>
     
    

     
      <div class="offer-grid-item-body" >
        <div class="offer-grid-item-body-prices">
          <span class="offer-grid-item-body-prices-price">€{{item.cost_end}}</span>
          <span class="offer-grid-item-body-prices-old-price">€{{item.cost_init}}</span>
        </div>
        <!-- <h2><span v-for="(cat, index) in item.categories" :key="index">{{cat.name}}<span v-if="index+1<item.categories.length"> / </span> </span></h2> -->
        <h2>{{item.name}}</h2>
        <div class="offer-grid-item-body-footer promotion-date-offer mb-2">
          <div style="width: 50%; display: flex;">
              <div v-for="(colour, index) in item.colours" :key="index" :style="'margin-right:5px;background-color:'+colour"></div>            
          </div> 
          <div style="width: 50%;" class="d-block align-items-end d-flex justify-content-end offer-grid-item-body-footer promotion-date-offer">
          <span class=""> <img :src="oclock" alt="" class="mx-1 img-fluid" style="height: 10px;width:10px"> 22 marzo</span>
          </div>
          </div>       
      </div>
  </div>
</div>
    
</template>
<script>

import Timer from '../components/svg/oclock.vue';
import oclock from '../assets/oclock.svg';
export default {
  props: ["prodcuts"],
  components: {
      Timer
  },
  data() {
    return { 
      oclock : oclock
    }
  },
  mounted() { 
    console.log(this.details);
  },
  methods: {
    
  },
};
</script>

<style lang="scss" scoped>

.img_card--products{
  width: 100%;
  height: 220px;
          // object-fit: contain;
    background-size: contain;
}

.countdown--date{
  text-align: center;
    justify-content: center;
    align-items: center;
    align-content: center;
    display: flex;
}

.badget-discount {
    position: absolute;
    left: 40px;
    background: #f8f9fa;
    color: #cc2323;
    border: 2px solid #CC2323;
    padding: 1.5px;
    margin: 0px;
    font-size: 0.7rem;
   
  
    font-weight: 700;
}

.badget-buttom{
  bottom: 30px !important;
}

.badget-static{
  bottom: 0px !important;
}


.agotado_container {
  background: rgb(0 0 0 / 51%);
        mix-blend-mode: normal;
        position:absolute;
        width:100%;
        height:100%;
        top:0px;
}
</style>
