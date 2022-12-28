<template>
      <nav class="w-100 my-0"  
           style=" position:relative; z-index:1000;">
       <swiper 
                :slidesPerView="'auto'" 
                :spaceBetween="3" 
                navigation
                class="nav_profiles  w-100 d-flex "
                style="gap:1px; position:relative; z-index:1000;    "
                 @slideChange="onSlideChange"
                 
             >
             
       
                
                     
                       
                                    <swiper-slide
                                     v-for="(item, index) in selection"
                                       :key="index.id"
                                     
                                        type="button"
                                        style="justify-content: space-between; align-items: center; font-size:0.79rem;" 
                                        class="rounded-2  d-flex d-flex "
                                        ref="aqui"
                                        :style="((k==1) ? 'margin-left:10%;' : 'background:red;' )"
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
                                   
                   
  <template v-slot:arrow-prev>
      <span>t</span>
    </template>
    <template v-slot:button-next>
      <span>d</span>
    </template>

      
       </swiper>
          </nav>
</template>
<script>
  // import Swiper core and required modules
import { Navigation} from 'swiper';
import BrandTiendaTag from '../components/BrandTienda/BrandTiendaTag.vue';
import FormPrenda from '../components/FormPrenda.vue';
import ShowSelectiontienda from '../components/ShowSelectiontienda.vue';
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
      ShowSelectiontienda,
    },
    methods: {
        onSwiper(swiper) {
        this.swiper = swiper;  
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
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
       onSwiper,
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