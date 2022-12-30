<template class="d-flex">
  <!-- Iconos agrupados, usados para los navegations tabs -->

          <component :is="name_icono" :color="colores"></component>
    
</template>

<script>
import IconoFire from './fire.vue';
import IconoStart from './start.vue';
import IconoDiamante from './diamante.vue';
import IconoActivity from './activity.vue';
import IconoCampana from './campana.vue';
import IconoComment from './commentario.vue';
export default {
    props:  {
        name_icono:{
        type:String,
        default:false
       },
         colores:{
         type:String,
         default: 'black'
       },
         oncolor:{
         type:String,
         default:'black'
       }
    },
       components: {
         IconoFire,
         IconoStart,
         IconoDiamante,
         IconoActivity,
         IconoCampana,
         IconoComment
       },
       data(){
         return {
         
         }
       }

}
</script>

<style>

</style>