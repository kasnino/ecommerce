<template>
    <section class="profile">
    <Navbar :show="true"  name="" username="@daniellem418" height="60px" :isVerificate="true"/>
    <figure class="figure position-relative p-0 m-0">
        <img src="../assets/profile/profile_fondo.png" class=" position-relative img-responsive "  height="140"  alt="" style="width:100%;">
        <img class="position-absolute bottom-0 top-50 ms-2 mt-3 start-0" width="97" height="97" src="../assets/profile/user-profile.png" alt="">
        <div class="box_Infoprofile position-absolute bottom-0 mb-4 me-2 end-0 ">
           <div class="box-container_Infoprofile position-relative m-0 p-0 ">
          <p class="m-1 position-relative" v-html="profile_info">
          </p>
            <span class="pestaña_box_Infoprofile position-absolute bottom-0  top-25   ">
            <img src="../assets/profile/Polygon.png" width="14" height="12" alt="" >
          </span>
           </div>
          </div>
     </figure>


  <div class="container-profile d-flex flex-column justify-content-between">
          <div class="social_redes  p-0 m-0" >
            <div class="row d-flex p-0 m-0 justify-content-end align-items-center " >
              <div class="col-7 d-flex justify-content-end align-items-end p-3 pe-0 gap-2 " >
                <img src="../assets/profile/redes_sociales/logos_youtube-icon.svg" width="14" height="10"  alt="" >
                  <img src="../assets/profile/redes_sociales/akar-icons_instagram-fill.svg" width="14" height="10"  alt="" >
                    <img src="../assets/profile/redes_sociales/entypo-social_twitter-with-circle.svg" width="14" height="10"  alt="" >
                      <img src="../assets/profile/redes_sociales/akar-icons_facebook-fill.svg" width="14" height="10"  alt="" >
                        <img src="../assets/profile/redes_sociales/logos_tiktok-icon.svg" width="14" height="10"  alt="" >
              </div>
                  <div class="col-5 d-flex justify-content-end  ">
                      <div class="col d-flex justify-content-end">
                          <button  class="btn-circle btn btn-md" width="37" height="37">
                          <img src="../assets/profile/redes_sociales/charm_menu.svg" alt="send"></button>
                      </div>
                      <div class="col ms-1">
                        <button class="btn btn-dark d-flex pe-2 pt-1 pb-1 ps-2 justify-content-center align-content-center align-items-center gap-1 border-none rounded-5" style=" text-size:15px !important; color:#FFF;">
                          <img src="../assets/profile/redes_sociales/campana.svg" alt="send">
                          <span class="p-0 m-0" style="font-size:15px;">Seguir</span></button>
                      </div>
                  </div>
            </div>
          </div>
          
          <!-- followers and followindg -->
            <div class="system_followers  p-0 m-0" >
              <div class="row gap-4 ms-1 p-0 m-0">
                <div class="col-2 d-flex flex-column">
                  <span class="fw-bold">8.126</span>
                  <p class="text-followers">seguidores</p>
                </div>
                 <div class="col-2 ms-2 d-flex flex-column">
                  <span class="fw-bold">18</span>
                  <p class="text-followers">siguiendo</p>
                </div>
                 <div class="col-2  ms-2 d-flex flex-column">
                  <span class="fw-bold">1764</span>
                  <p class="text-followers">gracias</p>
                </div>
              </div>
            </div>

  </div>

          <!-- Navigations selections -->
            <div class="system_nav_profiles  p-0 m-0" >
              <div class="row   pt-0 m-0" >
                <div class="col-3 d-flex justify-content-start p-3 align-content-center align-items-center text-center" >
                  <img src="../assets/profile/activity.svg" class="m-0" alt="" style="width:15px; height:15px;" >
                  <p class="fw-bold p-0 m-0 ms-1 text-uppercase" style="font-size:12px;">actividad</p>
                </div>
                <div class="col-7 d-flex p-0 m-0 justify-content-end align-content-center align-items-center text-left">
                  <img class="m-0 p-0" src="../assets/profile/fire.svg" alt="" style="width:15px; height:15px;" >
                  <p class="fw-bold p-0 ms-1 m-0  text-uppercase d-flex " style="font-size:12px;">892 chollos publicados</p>
                </div> 
                <div class="col-2 d-flex justify-content-center align-content-center align-items-center text-center" style="border-bottom: 2px solid #F4C90C;">
                  <img src="../assets/profile/diamante.svg" class="ms-1" alt="" style="width:15px; height:15px; " >
                </div>
              </div>
            </div>
              <SwiperHome :slides="products"/>
              <SwiperHome :slides="products"/>
    <!-- <div style="margin-top:500px"></div> -->
    <Menubar :showMenu="true" />
  </section>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Menubar from '../components/Menubar.vue';
import SwiperHome from '../components/SwiperHome.vue';

import prod1 from '../assets/product_1.webp';
import prod2 from '../assets/product_2.webp';
export default {
  components: {
    Navbar,
    Menubar,
    SwiperHome
      },

      data()
      {
        return { 
          profile_info:"Hola, me encantan las zapatillas y los chollos,intentaré publicar mucho contenido de ofertas de zapatillas, asi que sígueme :).",
          products: [{
                name : 'JACKET SILVER',
                label_top : 'Amazon',
                label_top_bg : '#FAE7CB',
                label_top_color : '#E4B408',
                cost_init : '250',
                cost_end : '150',
                discount : '35',
                categories : [{
                  id : '112',
                  name : 'Black'
                },{
                  id : '112',
                  name : 'Silver Metallic'
                }],
                image: prod1,
                date: '1 Febrero'
                },{
                name : 'TIRO TKJKT VIP',
                label_top : 'ABOUT YOU',
                label_top_bg : '#FFF',
                label_top_color : '#000',
                cost_init : '35',
                cost_end : '30',
                discount : '10',
                categories : [{
                  id : '112', 
                  name : 'Legend Ink'
                }],
                image: prod2,
                date: '2 Febrero'
                }
             ]          
          }
    }
}
</script>

<style>

</style>