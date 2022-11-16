<template>
  <figure :style="{height: `${height}px`}" ref="imageWrapper" class="image-wrapper">
    <Swiper :slides="slides" ref="swiper" @NavBarBlack="NavBarBlack"  :agostado="agostado" />
    <span :style="{backgroundColor: color}" :class="{label: true, withOffer: offer,'mb-10':offer_end}">{{ label.name }}</span>
    <span  :class="{'mb-5 pb-4':offer_end}" style="background-color: transparent;
    padding: 0px;
    display: flex;
    justify-content: space-between;
    right: 5px;
    width: 55px;
    height: auto;
    font-size: 12px;
    z-index: 2;
    position: absolute;
    padding: 3px;
    border-radius: 8px;
       bottom: 0;
    flex-direction: column;">
        <div class="row">
          <div class="col-12 py-2 d-flex justify-content-center">
            <div class="text-center">
              <img :src="shipper" alt="" style="width:35px;height:35px;">
              <img :src="plusTop" alt="" style="width: 15px;height: 15px;position: absolute;top: 15px;right: 5px;">
           </div>
          </div>
          <div class="col-12 py-2"> 
            <div class="text-center">
              <svgLike :color="colorIcon" size="25"></svgLike>
            <div :style="'font-size: 8px;color:'+colorIcon">19.455</div>
           </div>
          </div>
          <div class="col-12 py-2"> 
            <div class="text-center">
              
              <svgComments :color="colorIcon" size="25"></svgComments>
            <div :style="'font-size: 8px;color:'+colorIcon">2046</div>

           </div>
          </div>
          <div class="col-12 py-2">
            <div class="text-center">
            
            <svgDelivery :color="colorIcon" size="35"></svgDelivery>
            <div :style="'font-size: 8px;color:'+colorIcon">Info envío</div>

           </div> 
          </div>
          <div class="col-12 py-2">
            <div class="text-center">
           <img :src="wsp" alt="" style="width:30px;height:30px;"><br>
            <div  :style="'font-size: 8px;color:'+colorIcon">Compartir</div>
           </div> 
          </div>
          <div class="col-12 py-2">
            <div class="text-center">
            <svgMore :color="colorIcon" size="30"></svgMore>
           </div> 
          </div>
        </div>

     </span>
    <div v-if="bool" class="gray-screen"></div>
  </figure>
</template>

<script>
import Swiper from './Swiper.vue';
import image_pe from '../assets/rectangle-2.png';
import image from '../assets/zara.jpg';
import zara11 from '../assets/zara11.png';
import zara1 from '../assets/zara1.png';
import zara2 from '../assets/zara2.png';
import zara3 from '../assets/zara3.png';
import like from '../assets/like_black.svg';
import delivery from '../assets/delivery.svg';
import wsp from '../assets/wsp.svg';
import comments from '../assets/comments2.svg';
import ImgHexa from '../components/ImgHexa.vue';
import mujer_hex from '../assets/mujer-hex.svg';
import more from '../assets/more.svg';
 

              import shipper from "../assets/shipper.png";

import svgLike from '../components/svg/like.vue';
import svgComments from '../components/svg/comments.vue';
import svgDelivery from '../components/svg/delivery.vue';
import svgMore from '../components/svg/more.vue';
import plusTop from '../assets/plus-top.svg';


export default {
  components: {
    Swiper,
    ImgHexa,
    svgLike,
    svgComments,
    svgDelivery,
    svgMore,
  },
  mounted() {
    this.height = window.innerHeight - 195;
    this.$emit("setHeight", this.height);
  },
  
  methods: {
    NavBarBlack(data) {
      this.$emit('NavBarBlack',data);
      this.colorIcon =  (data)?'white':'black';
    }
  },

  data() {
    return {
      slides: [image, zara11, zara1, zara2,zara3,zara3],
      height: null,
      image_pe: image_pe,
      like: like,
      comments: comments,
      delivery: delivery,
      wsp: wsp,
      mujer_hex: mujer_hex,
      more: more,
      shipper: shipper,
      plusTop: plusTop,
      colorIcon: 'black',
    };
  },
  props: ["label", "date", "color", "bool", "offer","agostado","offer_end"],
};
</script>
<style>
.mb-10{
  margin-bottom: 5rem !important;
}
</style>