<template>

  <nav class="w-100 my-0"  style=" position:relative; background:#FFF; ">

          
           <swiper  
                :slidesPerView="0" 
                :simulateTouch="true"
                :spaceBetween="3" 
                class="nav_profiles ps-2 w-100  pe-2"
                style="gap:1px; position:relative;    "
                @swiper="onSwiper"
                @slideChange="onChangeSwiper" 
                :loop="true"
                :initialSlide="0"
                :roundLengths="true"
                :loopAdditionalSlides="6"
           >
         
            <swiper-slide 
                v-for="(items, i) in tabs" :key="i.id" 
                :class=" (((i === slide_count)) ? 'nuevo': '' )"
                :style="[(((i === slide_count)) ? 'background:'+ colores_icon[slide_count]+ '30;' : '' ),
                ((slide_count >= 0 ) ? `transition-duration: 0ms; transform: translate3d(${animation_valor[slide_count]}px, 0px, 0px);` : ''),
                ('border-radius: 15px;'),
              ]"
               :id='`swiper-slides`' 
                @click="onStyle(i), 
                changeView(i+1),
                animation_swiper(i)"
                @changeSlide="changeSlide(i)"
                >
          
             
            <div 
                 @click="positionTab(i)"
                 :id="`Tab-${i}`"
                 class="pe-2 py-2 pb-2  d-flex justify-content-center align-items-center "  
                 :class="[ (( (onbarra) && (active === slide_count)) ? 'activo' : ''),
                          (i == 0 ? 'ps-1 ' : 'ps-2 '), 
                         ]">

          <div class="" :id="`slider-${i}`"
               :class="(( (onbackground) && (relleno_on == i)) ? '' : '' )"
              
               >
          </div>

          <label class="" 
                :class="(( (onbackground) && (relleno_on == i)) ? 'relleno' : '' )"
                :for="items">
                <div 
                class="d-flex  w-100  justify-content-center align-items-center" 
                style="box-sizing:content-box;  border-radius: 15px; "
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

             </label>
                </div>
                
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
         default:false
       },
       slide_count:{
         type:Number,
         default:0
       },
       swiperview:{
         type:Number,
         default:0
       },
       bloquear_animation:{
         type:Boolean,
         default:false
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
      swiper:0,
      changeSwiper:null,
      active:0,
      relleno_on:0,
      num_slide:0,
      posejeX:0,
      posejeY:0,
      opacity: 30,
      animation_valor:['-0', '-0', '-0', '-227', '-277', '-397'],
      animation_valor_center:['-0', '-0', '-0', '-0', '0', '-0'],
      newColor:'',
      activaSlide:false,
      indiceColor:0,
      color_icon:['black','yellow'],
      colorgba:['rgba(255,189,99,0.3)']
    }
  },
  
  computed: {
    swiper() {
      return this.swiper; 
    }
  },
    methods: {
      transition(){
        if(this.slide_count >= 0){
           
        }
        
      },
  toSlide(i) {
       return this.swiper.slideTo(i), this.activaSlide = true, this.slide_count;
    },
      getRef(swiperInstance) {
        swiper.value = swiperInstance
      },
      next () {
        swiper.value.slideNext() // should work
      },
      onSwiper(swiper) 
      {
        this.swiper = swiper;
      },
      animation_swiper(i){
        const slides_wipper =  document.getElementById('swiper-slides')
      
      return this.swiper.slideTo(i), slides_wipper.style.transform=`translate3d(${this.animation_valor_center[i]}px, 0px, 0px) !important`;   
      },
      onChangeSwiper(changeSwiper){
        this.changeSwiper = changeSwiper;
      },
      
      animationSlide(indie, slide_count){
      return alert(indice + "" + slide_count)
      },

      changeSlide(dato)
      {
        this.toSlide(dato)
      },

      handleSlideTo() {
        this.swiper.slideTo(3);
      },

       ConvertiHexFondoColo(color, indice) {
        color = color.replace('#', '')
        let r = parseInt(color.substring(0, 2), 16)
        let g = parseInt(color.substring(2, 4), 16)
        let b = parseInt(color.substring(4, 6), 16)
        this.colorgba[indice] = 'rgba(' + r + ',' + g + ',' + b + ',' + this.opacity / 100 + ')'
        return this.newColor = this.colorgba[indice], this.indiceColor = indice
      },

      positionTab(n){
        const elem = document.getElementById('Tab-'+n);
        var posicion = elem.getBoundingClientRect();
        let entero = posicion.left;
        let numeroTranslateX = entero.toString();
        let regex=/(\d*.\d{0,0})/;
        const resultTranslateX = numeroTranslateX.match(regex)[0];
        this.posejeX = Number(resultTranslateX);
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

.swiper-wrapper{
 
}
#Tab-0{
   border-radius: 15px; 
}
.nuevo{
   border-radius: 15px !important; 
  transition: tramsform 0.4s cubic-bezier(.10, .10, .10, .84) !important;
  transition-timing-function: cubic-bezier(.10, .10, .10, .84) !important; 
}
.relleno{
  /* background:v-bind('colorgba[indiceColor]'); */
  border-radius: 15px;
  margin: 0.5px;
  position: relative;
  z-index: 1;
  cursor: pointer;
  transition: tramsform 0.4s cubic-bezier(.10, .10, .10, .84) !important;
  transition-timing-function: cubic-bezier(.10, .10, .10, .84) !important; 
}
.slider{
  position: absolute;
 
  height: 100%;
  width: 100%;
  background:v-bind('colorgba[indiceColor]');
transition: tramsform 0.4s cubic-bezier(.10, .10, .10, .84) !important;
  transition-timing-function: cubic-bezier(.10, .10, .10, .84) !important; 
  border-radius: 15px;
 
  z-index: 1;
}
input[type=radio]{
  display: none;
}
.activo{
    border-bottom: 2px solid #F4C90C;
    transform: translateX(v-bind('posejeX')'px');
/* ease (default) */
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
    .swiper-slide.swiper-slide-prev{
        transform: translateX(15%);
    }           
    .swiper-slide.swiper-slide-next{
        transform: translateX(-15%);
    }
</style>
