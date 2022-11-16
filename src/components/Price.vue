<template>
  <section  :style="{marginTop: `${heightSet}px`}">
    
      <div class="d-none row d-flex justify-content-center align-items-center"  style="margin-top: -15px; border-radius: 15px 15px 0px 0px !important;margin-left: 0.25px !important;margin-right: 0.25px !important;height:74px; background: linear-gradient(90deg, #EE6338 0%, #6631FF 58.88%, #3A36FF 100%);">
        <div class="col-4  d-flex justify-content-center align-items-center">
          <span style="font-style: normal;
font-weight: 700;
font-size: 14px;
color:#fff; 
line-height: 17px;">
            Oferta
          </span>
          <div class="promotion-prices"><span class="promotion-old-price" style="display: flex;
    align-items: center;
    padding: 5px 5px;
    background-color: #fff;
    width:50px;
height:24px;
font-size: 12px;
font-weight: 700;
    margin-left: 10px;">-40%</span></div>
        </div>
        <div class="col-8  d-flex justify-content-end align-items-center">
          <span style="font-weight: 400;
font-size: 12px;
line-height: 12px;

color: #FFFFFF;">Términa en:</span>

          
          <img class="mx-1" :src="oferta_dias" alt="brand">
          <img class="mx-1" :src="oferta_horas" alt="brand">
          <img class="mx-1" :src="oferta_segundos" alt="brand">

        </div>
    </div>
  <section  class="price pb-2" id="toolbarChat" :class="{'price_2':offer_end}" style="height:100%"  >
 
    <div class="line"></div>
    <figure>
      <img src="../assets/vans.png" alt="brand">
    </figure>
    <div class="price-tags">
      <Tag value="5237" />
      <Coupon title="EXTRA 30" />
      <WarningTag msg="Avisar agotado" />
    </div>
    <article class="d-flex align-items-center">
      <PriceGroup :price="85.50" :discountPorcent="10" />
      <PrimaryButton type="button" style="font-size: 10px;
    padding: 0px 6px;
    width: 200px;
    height: 35px;
    left: 166px;
    top: 664px;font-weight: 700;
    background: #000000;
    border-radius: 8px;
    color: #fff;
    border: none;
    margin: 0px;">
        Comprar en Deportes Outlet
      </PrimaryButton>
    </article>
  </section></section>
</template>

<script>
import Tag from "./Tag.vue";
import WarningTag from '../components/WarningTag.vue';
import PriceGroup from '../components/PriceGroup.vue';
import PrimaryButton from '../components/PrimaryButton.vue';
import Coupon from '../components/Coupon.vue';
import oferta_dias from "../assets/oferta_dias.svg";
import oferta_horas from "../assets/oferta_horas.svg";
import oferta_segundos from "../assets/oferta_segundos.svg";
import AppTimer from '../components/AppTimer.vue';

export default {
  components: {
    Tag,
    WarningTag,
    PriceGroup,
    PrimaryButton,
    Coupon,
    AppTimer,
  },
  props: ['height','offer_end'],
  data() {
    return {
      oferta_dias : oferta_dias,
      oferta_horas : oferta_horas,
      oferta_segundos : oferta_segundos,

      
      timeElapsed: 0,
      timerInterval: undefined,
      timeLimit: 10,

    }
  },
  methods: {
    startTimer() {
      this.timerInterval = setInterval(() => {
        // Stop counting when there is no more time left
        if (++this.timeElapsed === this.timeLimit) {
          clearInterval(this.timerInterval);
        }
      }, 1000);
    },
  },
  // Start timer immediately
  mounted() {
    this.startTimer();
  },
  
  computed: {
    heightSet() {
       var height = this.height;
       var offer_end = this.offer_end;
       if(offer_end){
        return height-60;
       }else{
        return height;
       }
    }, 
  
  },
}
</script>
