<template>
  <nav class="" style=" position:relative; background:#FFF;">
           <swiper :slidesPerView="'auto'" :spaceBetween="2" class="nav_profiles ps-2 pe-2"
           style="gap:1px;"
           >
            <swiper-slide v-for="(items, i) in tabs" :key="i.id"  
            :class=" + 'd-flex gap-3 ps-2 pe-2'" @click="active = i">
                 <div   
                 :class="active === i ? 'activo' : '' + 'gap-3'"
                 style="height:20px;box-sizing:content-box; padding:10px 8px 8px 10px; margin-left:3px;"
                 >
                <div 
                class="d-flex  w-100" 
                style="box-sizing:content-box; paddind:10px;"
                >
        
                 <IconoTab :name="name_icon[i]" :color="active === i ? '#F4C90C' : 'black'" />
                  <p  class="fw-bold p-0 m-0 ms-1 pe-2 ps-0 text-capitalize" 
                     :style="`font-size:12px; color:#000;`">
                     {{items}}</p>
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
