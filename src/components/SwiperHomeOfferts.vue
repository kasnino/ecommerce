<template>
<div class="row mx-0 px-0 py-1"  >
  <template v-for="(item, index) in prodcuts" :key="index" >

    <ProductsOfferts v-if="!item.is_cupon" :products_offers="item" :index="index" />
    <CuponesOfferts v-else :datos="item" :index="index"/>
   </template>

</div>
    
</template>
<script>
import CuponesOfferts from '../components/CuponsOffers.vue';
import ProductsOfferts from '../components/ProductsOfferts.vue';
import Timer from '../components/svg/oclock.vue';
import oclock from '../assets/oclock.svg';
import Cupons from '../components/svg/cupons.vue';
import CuponsCode from '../components/svg/cupons_code.vue';
export default {
  props: ["prodcuts"],
  components: {
      Timer,
      CuponesOfferts,
      ProductsOfferts,
      Cupons,
      CuponsCode
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
