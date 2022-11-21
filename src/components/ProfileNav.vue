<template>
  <nav class="w-100" style=" position:relative; background:#FFF;">
           <swiper :slidesPerView="'auto'" :spaceBetween="3" class="nav_profiles ps-2 pe-2"
           style="gap:1px;"
           >
            <swiper-slide v-for="(items, i) in tabs" :key="i.id"  
            :class=" + ' d-flex gap-2 ps-2 pe-2'" @click="active = i">
                 <div 
                 class="pe-2 py-2 pb-2  d-flex justify-content-center align-items-center "  
                 :class="[active === i ? 'activo' : '' + 'gap-2',i === 0 ? 'ps-1' : 'ps-2 ']"
                 style="height:20px;box-sizing:content-box;  "
                 >
                <div 
                class="d-flex  w-100  justify-content-center align-items-center" 
                style="box-sizing:content-box; "
                >
        
                 <span  
                 :class=" (items != '') ? '' : 'w-100 '"
                 class="m-0 p-0" ><IconoTab :name="name_icon[i]" :color="active === i ? '#F4C90C' : 'black'" /></span>
                  <p v-if="items != ''" class=" fw-bold p-0 m-0 ms-1 pe-1 ps-1 text-capitalize" 
                     :style="`font-size:12px; color:#000;`">{{items}}</p>
             </div> 
                </div>
            </swiper-slide>
      </swiper>
  </nav>
</template>

<script>
import { Swiper,  SwiperSlide } from 'swiper/vue';
import IconoTab from '../components/svg/IconoTab.vue';
export default {
  props: ['tabs'],
  components: {
    Swiper,
    SwiperSlide,
    IconoTab
  },

 data() {
    return {
     color_icon:['black','yellow'],
     name_icon:['activity','fire','diamante','activity','fire','diamante'],
      active: 2,
    }

  },
    methods: {
    changeView(id){
      this.$emit('changeView', id);
    },
  },


}
</script>

<style scoped>

.activo{
    border-bottom: 2px solid #F4C90C;
}
</style>
