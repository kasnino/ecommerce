<template>
    <section class="profile">
    <Navbar :show="true"  name="" username="@daniellem418" height="60px" :isVerificate="true"/>
    <figure class="figure position-relative p-0 m-0">
        <img src="../assets/profile_fondo.png" class=" position-relative img-responsive "  height="140"  alt="" style="width:100%;">
        <img class="position-absolute bottom-0 top-50 ms-2 mt-3 start-0" width="97" height="97" src="../assets/user-profile.png" alt="">
        <div class="box_Infoprofile position-absolute bottom-0 mb-4 me-2 end-0 ">
           <div class="box-container_Infoprofile position-relative m-0 p-0 ">
          <p class="m-1 position-relative">{{profile_info}}

          </p>
            <span class="pestaña_box_Infoprofile position-absolute bottom-0  top-25   ">
            <img src="../assets/Polygon.png" width="14" height="12" alt="" >
          </span>
           </div>
          </div>
     </figure>


          <div class="social_redes danger p-0 m-0">
            <div class="row d-flex p-0 m-0 justify-content-end align-items-center ">
              <div class="col-7 d-flex justify-content-end p-3 gap-1 " style=" ">
                <img src="../assets/redes_sociales/logos_youtube-icon.svg" width="14" height="10"  alt="" >
                  <img src="../assets/redes_sociales/akar-icons_instagram-fill.svg" width="14" height="10"  alt="" >
                    <img src="../assets/redes_sociales/entypo-social_twitter-with-circle.svg" width="14" height="10"  alt="" >
                      <img src="../assets/redes_sociales/akar-icons_facebook-fill.svg" width="14" height="10"  alt="" >
                        <img src="../assets/redes_sociales/logos_tiktok-icon.svg" width="14" height="10"  alt="" >
              </div>
              <div class="col-5 d-flex justify-content-end  ">
              
                  <div class="col">
                    <img src="../assets/setting_user.png" width="37" height="37" alt="">
                  </div>
                  <div class="col">
                    Column
                  </div>
                
              </div>
            </div>
          </div>

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