<template>
<div class="row mx-0 px-0 py-1">

  <template  v-for="(item, index) in prodcuts" :key="index">
      <div class="col-6 mx-0 px-0  my-1" 
      v-if="!item.is_cupon" :class="{'pe-1':(index%2==0),'ps-1':(index%2!=0)}">
        <figure class="offer-grid-item-img text-center" style="display: flex;
    height: -webkit-fill-available;
    align-items: center;
    width: 100%;">
          <!-- <img :src="item.image" alt="grid item" style="height:220px; width: 170px;"> -->
          <img :src="item.image" alt="grid item" style="width: 100%;height: 100%;object-fit: cover;">
          <span class="offer-grid-item-img-company" v-html="item.label_top" :style="' background:'+item.label_top_bg+'; color:'+item.label_top_color+';'"></span>
          <span :class="{'offer-grid-item-img-discount':!item.oclock,'offer-grid-item-img-discount-oclock':item.oclock,}">-{{item.discount}}%</span>
          <span class="offer-grid-item-img-oclock" v-if="item.oclock">2d : 20h : 15s</span>
        </figure>
        <div class="offer-grid-item-body">

          <div class="offer-grid-item-body-prices">
            <span class="offer-grid-item-body-prices-price">€{{item.cost_end}}</span>
            <span class="offer-grid-item-body-prices-old-price">€{{item.cost_init}}</span>
          </div>
           <h2><span v-for="(cat, index) in item.categories" :key="index">{{cat.name}}<span v-if="index+1<item.categories.length"> / </span> </span></h2> 
          <h2>{{item.name}}</h2>
          <div class="offer-grid-item-body-footer promotion-date-offer mb-2">
            <div style="width: 50%; display: flex;">
                <div v-for="(colour, index) in item.colours" :key="index" :style="'margin-right:5px;background-color:'+colour"></div>            
            </div> 
            <div style="width: 50%;" class="d-block align-items-end d-flex justify-content-end offer-grid-item-body-footer promotion-date-offer">
            <span class=""> <img :src="oclock" alt="" class="mx-1 img-fluid" style="height: 10px;width:10px;margin-top: -4px;"> 22 marzo</span>
            </div>
            </div>       
        </div>
  </div>

   <div class="col-6 mx-0 px-0  my-0" v-else>
        <figure class="offer-grid-item-img  mx-0 px-0  my-1" 
        :class="{'pe-1':(index%2==0),'ps-1':(index%2!=0)}">
          <img :src="bg_white" style="width: 100%;min-height: 310px;object-fit: cover;">
          <span class="offer-grid-item-img-company" v-html="item.label_top" :style="'left: '+((index%2==0)?'0px':'5px')+';opacity: 80%; background:'+item.label_top_bg+'; color:'+item.label_top_color+';'"></span>
          <div style="font-weight: 600;
font-size: 10px;
line-height: 12px;
letter-spacing: 0.05em;
color: #A5A5A5;
position: absolute;
    top: 30px;
    left: 10px;">
            Código
          </div>
          
          
            <div class="row mx-0 px-0 mb-3" style="position: absolute;
    top: 3rem;height: -webkit-fill-available;
    left: 0.1rem;">
              <div class="col-12 py-1">
                <span style="font-weight: 800;
font-size: 16px;
line-height: 19px;">
                  {{item.name}}
                </span>
              </div>
              <div class="col-12" style="max-height: 72px;">
                <span style="font-weight: 400;display: inline-table;
font-size: 11px;
line-height: 12px;
text-align: justify;">
                  ¡Rebaja exclusiva! 35% de ahorro en la gama veganos al canjear el código de descuento...
                </span>
              </div>
              <div class="col-12 text-center py-1">
                <span style="font-weight: 400;
font-size: 10px;
line-height: 12px;
text-align: justify;">
                  <img :src="item.image" alt="" :style="'object-fit: contain !important;width:'+item.image_width+';'">
                </span>
              </div>
              <div class="col-12 text-center py-0">
              
                <hr class="" style="color:#D9D9D9;padding: 0px;    margin: 0px;">
              </div>
              <div class="col-12 d-flex justify-content-center">
              <div class="text-center">
              <span style="font-weight: 600;
font-size: 10px;
line-height: 12px;

color: #A5A5A5;">
                ¿Funciona el cupón?
              </span>

              <button 
                v-if="item.cupon.agotado"
                class="btn" style="background: #CC2323;
                padding:0px;
                border-radius:0px;
                width: 100px;
                color: #fff;
                gap: 10px;" >
                AGOTADO
              </button>
              <button 
              v-else
              class="btn" style="background: transparent;
                padding:0px;
                border-radius:0px;
                width: 100px;
                color: #fff;
                gap: 10px;" >
               
               <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="8" cy="8" r="6" fill="#DF1A1A"/>
<path d="M7.99998 1.33334C4.32398 1.33334 1.33331 4.32401 1.33331 8.00001C1.33331 11.676 4.32398 14.6667 7.99998 14.6667C11.6766 14.6667 14.6666 11.676 14.6666 8.00001C14.6666 4.32401 11.6766 1.33334 7.99998 1.33334ZM7.99998 10.6667L4.66665 6.66668H11.3333L7.99998 10.6667Z" fill="#F5D8D2"/>
</svg>

<span class="mx-2" style="font-weight: 700;
font-size: 12px;
line-height: 15px;
color: #232323;">
  {{item.cupon.codigo}}
</span>

<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="8" cy="8" r="6" fill="#0FB734"/>
<path d="M7.99996 14.6667C11.676 14.6667 14.6666 11.676 14.6666 7.99999C14.6666 4.32399 11.676 1.33332 7.99996 1.33332C4.32329 1.33332 1.33329 4.32399 1.33329 7.99999C1.33329 11.676 4.32329 14.6667 7.99996 14.6667ZM7.99996 5.33332L11.3333 9.33332L4.66663 9.33332L7.99996 5.33332Z" fill="#D2F5DB"/>
</svg>


              </button>
              </div>
              </div>
              
              <div class="col-12 text-center pt-2 p-0 m-0" style="bottom: -12px; position: relative;" :class="{'pe-1':(index%2==0),'ps-1':(index%2!=0)}" v-if="!item.cupon.visible">              
                <cupons :color_bg="item.cupon.color_bg" :color_text="item.cupon.color_text"/>
              </div>
              <div class="col-12 text-center pt-2 p-0 m-0" style="bottom: -12px; position: relative;" v-else>              
                <cupons_code :color_bg="item.cupon.color_bg" :color_text="item.cupon.color_text"/>
              </div>


              <div class="col-12 text-center pt-1 p-0 m-0 d-flex px-1" style="justify-content: space-between;align-items: flex-end;">              
               <div class="">
                <span style="font-weight: 600;font-size: 10px;line-height: 12px;color: #999999;" >
                  Condiciones
                </span>
                <svg width="8" height="4" viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 0L4 4L7.5 0H0.5Z" fill="#999999"/>
                </svg>
               </div>
               <div class="">
               <img :src="oclock" alt="" class="mx-1 img-fluid" style="height: 10px;width:10px;margin-top: 1px;">
                <span style="justify-self: flex-end;font-weight: 400;font-size: 10px;line-height: 12px;color: #9b9b9b;">
                  <span class="me-1" v-if="item.cupon.agotado">Caducado</span>
                  <span class="me-1" v-else> {{item.cupon.fecha}} </span>
                  
                </span>
               </div>
              </div>


            </div>

          
          
          
          <!-- <span :class="{'offer-grid-item-img-discount':!item.oclock,'offer-grid-item-img-discount-oclock':item.oclock,}">-{{item.discount}}%</span>
          <span class="offer-grid-item-img-oclock" v-if="item.oclock">2d : 20h : 15s</span> -->
        </figure>
   </div>

      </template>
  </div>
    
</template>
<script>

import oclock from '../assets/oclock.svg';
import bg_white from '../assets/bg-white.svg';
import cupons from '../components/svg/cupons.vue';
import cupons_code from '../components/svg/cupons_code.vue';

export default {
  props: ["prodcuts"],
  components: {
    cupons,
    cupons_code  
  },
  data() {
    return { 
      oclock : oclock,
      bg_white : bg_white,
 
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
