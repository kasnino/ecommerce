<template>
    <section class="profile">
    <Navbar :show="true"  name="" username="@daniellem418" height="60px" :isVerificate="true"/>
    <figure class="figure position-relative p-0 m-0">
        <img src="../assets/profile_fondo.png" class="figure-img position-relative img-responsive "  height="140"  alt="" style="width:100%;">
        <img class="position-absolute bottom-0 top-50 ms-2 mt-2 start-0" width="97" height="97" src="../assets/user-profile.png" alt="">
        <div class="box_Infoprofile position-absolute bottom-0 mb-4 me-2 end-0 "><p class="m-2 position-relative">{{profile_info}}
          <span class="pestaña_box_Infoprofile position-absolute bottom-0 start-0  translate-middle top-50   ">kokoi</span>
          </p></div>
        
     </figure>
    <div style="margin-top:500px"></div>
    <Menubar :showMenu="true" />
  </section>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Menubar from '../components/Menubar.vue';
export default {
  components: {
    Navbar,
    Menubar
      },

      data(){
        return{  
        profile_info:'Hola, me encantan las zapatillas y los chollos,intentaré publicar mucho contenido de ofertas de zapatillas, asi que sígueme :).'
      }
      }

      
}
</script>

<style>

</style>