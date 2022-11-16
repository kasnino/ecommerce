<template>
<div class="row mx-0 px-0 py-2">
  <div class="col-6 mx-0 px-0  my-1" :class="{'pe-1':(index%2==0),'ps-1':(index%2!=0)}" v-for="(item, index) in prodcuts" :key="index">
    <figure class="offer-grid-item-img text-center">
      <!-- <img :src="item.image" alt="grid item" style="height:220px; width: 170px;"> -->
      <img :src="item.image" alt="grid item" style="width: 100%;height: 100%;object-fit: cover;">
      <span class="offer-grid-item-img-company" v-html="item.label_top" :style="'opacity: 80%; background:'+item.label_top_bg+'; color:'+item.label_top_color+';'"></span>
      <span :class="{'offer-grid-item-img-discount':!item.oclock,'offer-grid-item-img-discount-oclock':item.oclock,}">-{{item.discount}}%</span>
      <span class="offer-grid-item-img-oclock" v-if="item.oclock">2d : 20h : 15s</span>
      </figure>
      <div class="offer-grid-item-body">
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

import oclock from '../assets/oclock.svg';
export default {
  props: ["prodcuts"],
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

<style>

</style>
