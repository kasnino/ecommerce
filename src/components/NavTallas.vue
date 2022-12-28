<template>
      <nav class="w-100 my-0"  
           style="position:relative; z-index:99;">
       <swiper 
                :slidesPerView="'auto'" 
                :spaceBetween="3" 
                class="nav_profiles  w-100 d-flex "
                style="gap:1px; position:relative; z-index:99;"
                @slideChange="onSlideChange"
                @swiper="onSwiper"    
             >
                       
                                    <swiper-slide
                                     v-for="(item, index) in selection"
                                       :key="index.id"
                                        type="button"
                                        style="justify-content: space-between; align-items: center; font-size:0.79rem;" 
                                        class="rounded-2  d-flex d-flex "
                                        ref="aqui"
                                        :style="((k==1) ? 'margin-left:10%;' : '' )"
                                    >
                        <div 
                        v-for="(select, z) in item" :key="z.id"
                        style="position:relative; " 
                        class="d-flex  pe-2"> 

                           <div   class="d-flex  pe-2"  v-for="(talla, k) in select" :key="k.id">

                                    <button class="d-flex p-0 mx-1 border-btn"  
                                    v-for="(numtalla, ke) in talla.sizes" :key="ke.id" >
                                       <div class="d-flex m-0 p-0"
                                       :class="[
                                       (( (isShow) && (active === ke)) ? 'active_btn' : 'border-btn')]"
                                        @click="SelectProductForm(talla.name, ke),toggleSelect(ke),(isShow = !isShow)" 
                                       > 
                                          <span>{{ talla.name}}</span>
                                          <span class="mx-1">{{numtalla.nro}}</span>
                                       </div>
                                    </button>
                           </div>
                      </div>
                                    </swiper-slide>
     
       </swiper>
          <div class="navigation-absolute">
              <div class="d-flex direction_arrows">
                  <button class="btn_arrow" @click="prev">
      <svg width="8" height="14" viewBox="0 0 8 14" fill="#000" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0 6.96165C0 7.22911 0.102262 7.45723 0.314651 7.66175L6.45034 13.6637C6.61554 13.8368 6.83579 13.9233 7.08751 13.9233C7.59882 13.9233 8 13.53 8 13.0108C8 12.7591 7.89774 12.531 7.72468 12.3579L2.19469 6.96165L7.72468 1.56539C7.89774 1.38446 8 1.15634 8 0.904621C8 0.393314 7.59882 0 7.08751 0C6.83579 0 6.61554 0.086529 6.45034 0.259587L0.314651 6.26155C0.102262 6.46608 0.00786627 6.6942 0 6.96165Z"
          fill="#000000" />
      </svg>
                  </button>
                  <button class="btn_arrow" @click="next">
       <svg width="8" height="14" class="arrow_right" viewBox="0 0 8 14" fill="#000" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0 6.96165C0 7.22911 0.102262 7.45723 0.314651 7.66175L6.45034 13.6637C6.61554 13.8368 6.83579 13.9233 7.08751 13.9233C7.59882 13.9233 8 13.53 8 13.0108C8 12.7591 7.89774 12.531 7.72468 12.3579L2.19469 6.96165L7.72468 1.56539C7.89774 1.38446 8 1.15634 8 0.904621C8 0.393314 7.59882 0 7.08751 0C6.83579 0 6.61554 0.086529 6.45034 0.259587L0.314651 6.26155C0.102262 6.46608 0.00786627 6.6942 0 6.96165Z"
          fill="#000000" />
      </svg>
                  </button>
              </div>
          </div>
          </nav>
      
</template>
<script>
  // import Swiper core and required modules
import { Navigation} from 'swiper';
import BrandTiendaTag from '../components/BrandTienda/BrandTiendaTag.vue';
import FormPrenda from '../components/FormPrenda.vue';
import ShowSelectiontienda from '../components/ShowSelectiontienda.vue';
import VueAwesomeSwiper from 'vue-awesome-swiper'

import 'swiper/swiper-bundle.css'
  // Import Swiper Vue.js components
  import "swiper/swiper-bundle.css";
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/navigation';

  // Import Swiper styles
  export default {
    components: {
      FormPrenda,
      BrandTiendaTag,
      Swiper,
      SwiperSlide,
      VueAwesomeSwiper,
      ShowSelectiontienda,
    },
    methods: {
   onSwiper(swiper) 
      {
        console.log("Entro");
        this.swiper = swiper;
      },

      prev() {
        this.swiper.slidePrev()
      },
      next() {
        this.swiper.slideNext()
      },
      
   
     onSlideChange() {
      console.log("slide change");
    },
    chowSelect(tipo){
      this.$emit('chowSelect', tipo);
    },
       toggleSelect(index) {
       // toggle the active class
         if(this.isShow)
        {   
          return this.active = index
        }  
     },
     SelectProductForm(data, indice) {
      return this.onShowSelect = true, this.nombre_selection = data, this.idSelection = indice;
      },
},
    setup() {
      const onSwiper = (swiper) => {
         this.swiper = swiper;
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
         swiperOptionA: {
            navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
         },
       onSlideChange,
       modules: [Navigation],
       swiper:null,
       isShow:true,
       nombre_selection:'',
       idSelection:0,
       active:0,
       onShowSelect:false,
       brands: [
        {
          name: 'Ver agotadas',
          amount: '',
          img: '',
          index: 0,
          checking: true
        },
      ],
      selection:[
            {
            tipoSelect:[{
            name_form:'Talla',
            name:'UE',
            sizes : [
                  { id:'1', nro:'34', available:true },
                  { id:'2', nro:'35', available:true },
                  { id:'3', nro:'37', available:true },
                  { id:'4', nro:'38', available:true },
                  { id:'5', nro:'39', available:true },
            ]
            },
            ],
                  },
                  {
            tipoSelect:[{
            name_form:'Tienda',
            name:'EU',
            sizes : [
                  { id:'1', nro:'34', available:true },
                  { id:'2', nro:'35', available:true },
                  { id:'3', nro:'37', available:true },
                  { id:'4', nro:'38', available:true },
                  { id:'5', nro:'39', available:true },
            ]
            },
            ],
                  },
                    {
            tipoSelect:[{
            name_form:'Tienda',
            name:'EU',
            sizes : [
                  { id:'1', nro:'34', available:true },
                  { id:'2', nro:'35', available:true },
                  { id:'3', nro:'37', available:true },
                  { id:'4', nro:'38', available:true },
                  { id:'5', nro:'39', available:true },
            ]
            },
            ],
                  },
                 
      ],

      lista_Selection:[
      {
            select:['Tienda1', 'Tipo1', 'Tienda1','Tienda1','Tienda1','Tienda1','Tienda1','Tienda1'],
      },{ 
             select:['talla1','talla1','talla1','talla1','talla1','talla2'],
      },{  
             select:['5€ - 250€', '1€ - 300@', '30€ - 500€','9€ - 999€','5€ - 25€'],
      },
       {
             select:['5€ - 250€', '1€ - 300@', '30€ - 500€','9€ - 999€','5€ - 25€'],
      },{ 
             select:['talla1','talla1','talla1','talla1','talla1','talla2'],
      },{  
             select:['5€ - 250€', '1€ - 300@', '30€ - 500€','9€ - 999€','5€ - 25€'],
      }
      ],
      };
    },
  };
</script>


<style lang="scss" scoped>

.arrow_right{
  transform: rotate(180Deg);
}
.btn_arrow{
  padding: 2px;
  border:#858484;
  width:25px;
  border-radius: 50%;
  background:#f7f4f8;
}

.navigation-absolute{
  position: absolute;
  top:0px;
  z-index:100;
}

.direction-arrows{
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.active_btn{
      border: 1px solid #e8bf2e;
}
.swiper-button-disabled{
    display:none;   
}
.active_btn{
  border: 1px solid #e8bf2e7a;
}
.border-btn{
   border: 1px solid #dedede;
}
.btn_products{
    background:#FFF;
}
</style>