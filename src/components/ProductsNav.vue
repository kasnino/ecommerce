<template>
      <nav class="w-100 my-0"  
           style="position:relative; 
                  background:#FFF;"
           >
        <swiper 
           :slidesPerView="'auto'" 
           :spaceBetween="3" 
           class="nav_profiles ps-0 w-100  pe-2 d-flex"
           style="gap:1px;"
           >
                  <swiper-slide 
                  style="position:relative;" 
                  class=" + 'd-flex gap-2  ps-2 pe-2'" > 
                  <BrandTiendaTag 
                  :brands="brands" />
                  
                  </swiper-slide>

                  <swiper-slide 
                        v-for="(item, index) in selection"
                        :key="index.id"
                        style="position:relative;" 
                        class=" + 'd-flex gap-2  ps-2 pe-2'"> 
               <!-- Component show  lod inputs Select -->
                  <FormPrenda 
                        label_input="" 
                        :tallas="item"
                        :border_btn="false"
                        :index_prop="index"
                        @selectProductForm="SelectProductForm"
                  ></FormPrenda>
                   </swiper-slide>
         </swiper>
          </nav>
          <!-- Item Selection -->
          <ShowSelectiontienda
                  v-if="onShowSelect"
                  :idSelection="idSelection"
                  :ShowSelection="nombre_selection"
                  :datos_select="lista_Selection"/>

</template>

<script>
import { Swiper,  SwiperSlide } from 'swiper/vue';
import BrandTiendaTag from '../components/BrandTienda/BrandTiendaTag.vue';
import FormPrenda from '../components/FormPrenda.vue';
import ShowSelectiontienda from '../components/ShowSelectiontienda.vue';
export default {
components: {
      FormPrenda,
      BrandTiendaTag,
      Swiper,
      SwiperSlide,
      ShowSelectiontienda
},
data(){
return {
       nombre_selection:'',
       idSelection:0,
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
            name:'Mango',
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
            name_form:'Precio',
            name:'EUR',
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
            name_form:'10€ - 250€',
            name:'EUR',
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
            name_form:'Precio',
            name:'EUR',
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
            name_form:'Precio',
            name:'EUR',
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
     
}
},
methods: {
    
    chowSelect(tipo){
      this.$emit('chowSelect', tipo);
    },
     SelectProductForm(data, indice) {
      this.onShowSelect = true, 
      this.nombre_selection = data, 
      this.idSelection = indice;
     
      },
}
}
</script>

<style lang="scss" scoped>
.active_btn{
      border: 2px solid #e8bf2e;
}
</style>