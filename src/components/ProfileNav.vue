<template>
  <nav class="w-100 my-0"  style=" position:relative; background:#FFF; transition: all 1000ms cubic-bezier(0.250, 0.100, 0.250, 1.000); /* ease (default) */

transition-timing-function: cubic-bezier(0.250, 0.100, 0.250, 1.000); /* ease (default) */">
           <swiper  :slidesPerView="'auto'" :spaceBetween="3" class="nav_profiles ps-2 w-100  pe-2"
           style="gap:1px; position:relative;    transition: transform 0.6s cubic-bezier(0.250, 0.100, 0.250, 1.000);"
           >
         
            <swiper-slide v-for="(items, i) in tabs" :key="i.id" 
            style="position:relative;    " 
            :class=" + ' d-flex gap-2  ps-2 pe-2'" @click="onStyle(i), changeView(i)">
           <transition name="fade">
                 <div 
                 @click="positionTab(i)"
                  :id="`Tab-${i}`"
                
                 class="pe-2 py-2 pb-2  d-flex justify-content-center align-items-center "  
                 :class="[ (( (onbarra) && (active === i)) ? 'activo' : ''),
                          (i == 0 ? 'ps-1 ' : 'ps-2 '), 
                          (( (onbackground) && (relleno_on == i)) ? 'relleno' : '' )
                         ]"
                 style="">
                <div 
                class="d-flex  w-100  justify-content-center align-items-center" 
                style="box-sizing:content-box; "
                >
                 <span  
                 :class=" (items != '') ? '' : 'w-100 '"
                 class="m-0 p-0 d-flex" >
                 <IconoTab 
                 class="d-flex"
                      :name_icono="name_icono[i]"
                      :colores="colores_icon[i]" 
                      :oncolor="active === i ? '#F4C90C' : 'black'" />
                 </span>
                  <small v-if="items != ''" class=" fw-bold p-0 m-0 ms-1 pe-1 ps-1 text-capitalize" 
                     :style="`font-size:12px; color:#000;`">{{items}}</small>
             </div> 
                </div>
                  </transition>
            </swiper-slide>
           
      </swiper>
  </nav>
</template>

<script>
import { Swiper,  SwiperSlide } from 'swiper/vue';
import { ref } from "vue";
import IconoTab from '../components/svg/IconoTab.vue';
export default {
  props:  {
         onbackground:{
         type:Boolean,
         default:false
       },
        onbarra:{
         type:Boolean,
         default:false
       },
        tabs:{
         type:Array,
         default:false
       },
       name_icono:{
         type:Array,
         default:false
       },
       colores_icon:{
         type:Array,
         defaul:false
       }
  },
  components: {
    Swiper,
    SwiperSlide,
    IconoTab
  },

setup(){
  const Tab = ref(null);
},
 data() {
    return {
     color_icon:['black','yellow'],
      active:0,
      relleno_on:0,
      posejeX:0,
      posejeY:0
       
    }
  },

 
    methods: {

      positionTab(n){
        const elem = document.getElementById('Tab-'+n);
        var posicion = elem.getBoundingClientRect();
         this.posejeX = posicion.left;
        
      },

      onStyle(i){
        if(this.onbarra)
        {   
          return this.active = i
        }
      else {
        if(this.onbackground)
        {
          return this.relleno_on = i
        }
      }
      },
    changeView(id){
      this.$emit('changeView', id);
    },
  },


}
</script>

<style scoped>
.relleno{
  background:#feeaba;
  border-radius: 15px;
  
}

.activo{
    border-bottom: 2px solid #F4C90C;
    transform: transitionX(auto);
    transition: transform 0.8s cubic-bezier(.10, .10, .10, .84) !important;
  transition-timing-function: cubic-bezier(.10, .10, .10, .84) !important; /* ease (default) */
}


.sliderr{
  position: absolute;
  height: 100%;
  width: 100%;
  background: #8e44ad;
  left: 0;
  top: 0;
  border-radius: 5px;

}

</style>
