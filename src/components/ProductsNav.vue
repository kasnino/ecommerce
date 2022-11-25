<template>

<nav class="w-100 my-0"  style=" position:relative; background:#FFF;">
           <swiper  :slidesPerView="'auto'" :spaceBetween="3" 
           class="nav_profiles ps-2 w-100  pe-2 d-flex"
           style="gap:1px; "
           >
            <swiper-slide 
                  style="position:relative;    " 
                  class=" + ' d-flex gap-2  ps-2 pe-2'" > 
               <BrandTiendaTag :brands="brands" />
            </swiper-slide>

              <swiper-slide 
                  v-for="(item, index) in selection"
                  :key="index.id"
                  style="position:relative;    " 
                  class=" + 'd-flex gap-2  ps-2 pe-2'" > 
                  <span  v-for="(tipos, indice) in item.tipoSelect"
                        :key="indice.id">
               
                      <FormPrenda 
                              :name_buttom="tipos.name_form"
                              label_input="" 
                              :tallas="tipos"
                              :border_btn="false"
                              :index="index"
                              @SelectProductForm="SelectProductForm(tipos.name_form)"
                      ></FormPrenda>
                        </span>
              </swiper-slide>
           </swiper>
               </nav>
           
  <div v-if="ShowSelectiontienda == 'Tienda'" class="d-flex w-100 py-2 flex-column justify-content-end align-content-end">
        <span class="ms-2 ps-1" > {{ShowSelectiontienda}}  </span>
     <div class='wrapper mt-1 ps-1'>
                     <div style="text-align:left;    ">
			<span v-for='(tag, key) in precios_select' :key='key.id' 
                            :id='`boton_dia-${key}`'
                            @click="toggleDay(key)"
                            class="p-1 gap-1 rounded-3 "
                            style="
                            text-transform:initial;
                            opacity:1;
                            font-size:0.76rem;"
                      >
  
                       <button class="white p-1  ps-2 pe-2 m-1 rounded-3"
                       :class="[selectionItems[key] ? 'active_btn' : 'border']"
                       @click="itemsCount(key)"
                       >
                             {{ precios_select[key] }} </button>
                      </span>
                  </div>
                  </div>
    </div>
</template>

<script>
import { Swiper,  SwiperSlide } from 'swiper/vue';
import BrandTiendaTag from '../components/BrandTienda/BrandTiendaTag.vue';
import FormPrenda from '../components/FormPrenda.vue';
export default {
components: {
      FormPrenda,
      BrandTiendaTag,
      Swiper,
      SwiperSlide
      
},
data(){
return {
      selectionItems:[],
    ShowSelectiontienda: '',
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
 
      services_select:['Tienda1', 'Tipo1', 'Tienda1','Tienda1','Tienda1','Tienda1','Tienda1','Tienda1'],
      precios_select:['5€ - 250€', '1€ - 300@', '30€ - 500€','9€ - 999€','5€ - 25€']
}
},
methods: {
      itemsCount(data){
       return 
      },
      
      toggleDay(index) {
      // toggle the active class
       this.selectionItems[index] = !this.selectionItems[index]
       console.log(this.selectionItems)
     },

     SelectProductForm(data) {
      return this.ShowSelectiontienda = data
      },

     removeTag(index) {
      this.selectionItems = this.services_select.slice(index)
      console.log(this.selectionItems)
    }
}
}
</script>

<style lang="scss" scoped>
.active_btn{
      border: 2px solid #e8bf2e;
}
</style>