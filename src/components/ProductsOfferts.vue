<template>
    <div   class="col-6 mx-0 px-0  my-1"   :class="{'pe-1':(index%2==0),'ps-1':(index%2!=0)}">
    <figure class="offer-grid-item-img position-relative text-center">
      <!-- <img :src="products_offers.image" alt="grid item" style="height:220px; width: 170px;"> -->
      <img class="img_card--products" :src="products_offers.image" alt="grid item" :style="`${products_offers.cupon.agotado ? 'filter: grayscale(.9);':''} `">
      <span class="offer-grid-item-img-company  opacity-75" v-html="products_offers.label_top" 
      :style="` background:${products_offers.label_top_bg}; 
       color:${products_offers.label_top_color}; + ${products_offers.cupon.agotado ? 'filter: grayscale(.8);':''} `"></span>
      <span v-if="products_offers.black_friday" class="black_friday fw-bold" v-html="products_offers.black_friday_top" :style="'  color:'+products_offers.black_friday_color+';' "></span>

     
 <span :style="`${products_offers.cupon.agotado ? 'filter: grayscale(.9);':''}`" 
 :class="{'offer-grid-item-img-discount':!products_offers.oclock,'offer-grid-item-img-discount-oclock':products_offers.oclock,}">-{{products_offers.discount}}%</span>
         <span :class="{'badget-discount ps-1 pe-1 badget-static':!products_offers.oclock,'badget-discount ps-1 pe-1 badget-buttom':products_offers.oclock + 'badget-discount ps-1 pe-1'}">
        <div class="countdown  d-flex  ">
              <div class="countdown--date ">
                 <Timer/>
                <small class="ms-1">00:29:44</small></div>
              </div>
              </span>
      
        <span class="offer-grid-item-img-oclock" v-if="products_offers.oclock">2d : 20h : 15s</span>
        <div v-if="products_offers.cupon.agotado" class="agotado_container d-flex justify-content-center align-items-center">
            <button   v-if="products_offers.cupon.agotado" class="btn buttom_agotado">
                AGOTADO
              </button>
        </div>
    </figure>
     
      <div class="offer-grid-item-body pe-0 pb-1 d-flex flex-column justify-content-between "  >
        <div class="">
        <div class="offer-grid-item-body-prices">
          <span class="offer-grid-item-body-prices-price">€{{products_offers.cost_end}}</span>
          <span class="offer-grid-item-body-prices-old-price">€{{products_offers.cost_init}}</span>
        </div>
      
        <h2>{{products_offers.name}}</h2>
        </div>
           <div class=" d-flex  justify-content-between justify-content-center align-items-end pe-1">
         <div style="width: 50%; display: flex;" class=" offer-grid-item-body-footer ">
              <div v-for="(colour, index) in products_offers.colours" :key="index" :style="'background-color:'+colour"></div>            
          </div> 
         <div style=" m-0 p-0" class="d-flex ">
              <img :src="oclock" alt="" class="me-1 img-fluid" style="">
               <span class="d-flex p-0 m-0 text_footer--cupons">Desde 22 marzo</span>
            </div>
          </div>       
      </div>
  </div>
</template>

<script>
import Cupons from '../components/svg/cupons.vue';
import CuponsCode from '../components/svg/cupons_code.vue';
import oclock from '../assets/oclock.svg';
export default {
  props: ["products_offers", "index"],
  components: {
      Cupons,
      CuponsCode
  },
  data(){
    return{
          oclock : oclock,
    }
  }
}
</script>

<style lang="scss" scoped>
.text_footer--cupons{
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;
  color: #9B9B9B;
}
.img_card--products{
  width: 100%;
  height: auto;
          // object-fit: contain;
    background-size: contain;
}


.buttom_agotado{
  background: #CC2323;
                padding:0px;
                border-radius:0px;
                width: 80%;
                height:12%;
                color: #fff;
}
.countdown--date{
text-align: center;
    justify-content: flex-end;
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
    padding: 0.12rem;
    margin: 0;
    font-size: .68rem;
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