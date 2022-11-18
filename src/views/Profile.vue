<template>
    <section class="profile">
    <Navbar :show="true"  name="" username="@daniellem418" height="60px" :isVerificate="true"/>
    <figure class="figure position-relative p-0 m-0">
        <img src="../assets/profile/profile_fondo.png" class=" position-relative img-responsive "  height="140"  alt="" style="width:100%;">
        <img class="position-absolute bottom-0 top-50 ms-2 mt-3 start-0" width="97" height="97" 
        src="../assets/profile/user-profile.png" alt="">
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
              <div class="row  pt-0 m-0" >
                <div class="col-3 d-flex justify-content-start p-3 align-content-center align-items-center text-center" >
                  <img src="../assets/profile/activity.svg" class="m-0" alt="" style="width:15px; height:15px;" >
                  <p v-on:click="onTab(data)" class="fw-bold p-0 m-0 ms-1 text-uppercase" 
                     :style="`font-size:12px; color:${color_tab};`">
                     actividad</p>
                </div>
                <div class="col-7 d-flex p-0 m-0 justify-content-end align-content-center align-items-center text-left">
                  <!-- <img class="m-0 p-0" src="../assets/profile/fire.svg" alt="" 
                  :style="`width:15px; height:15px; font-size:12px; stroke:${color_tab ? '#000' : '#F4C90C'} !important, fill:${color_tab ? '#000' : '#F4C90C'} !important;`
                   "> -->
                   <FireIcon width="16" height="20" :color="color_tab"></FireIcon>
                  <p class="fw-bold p-0 ms-1 m-0  text-uppercase d-flex " 
                  v-on:click="onTab(data)"
                  
                  :style="`font-size:12px; color:${color_tab};`">892 chollos publicados</p>
                </div> 
                <div class="col-2 d-flex justify-content-center align-content-center align-items-center text-center" 
                style="border-bottom: 2px solid #F4C90C;">
                  <img src="../assets/profile/diamante.svg" class="ms-1" alt="" 
                  style="width:15px; height:15px; " >
                </div>
              </div>
            </div>

              <transition-group name="slide-up">
        <template v-if="view=='0'">
              <SwiperHomeOfferts :prodcuts="products"/>
        </template>
              </transition-group>
            <Menubar :showMenu="true" />
  </section>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Menubar from '../components/Menubar.vue';
import FireIcon from '../components/svg/fire.vue';
import SwiperHomeOfferts from '../components/SwiperHomeOfferts.vue';
import oferta1 from '../assets/image_1.png';
import oferta2 from '../assets/image_2.png';
import oferta3 from '../assets/image_3.png';
import oferta4 from '../assets/image_4.png';
import logo3 from '../assets/logos/vans.svg';
export default {
  components: {
    Navbar,
    Menubar,
    SwiperHomeOfferts,
    FireIcon
      },

      data()
      {
        return { 
          view: '0',
          color_tab:'black',
          profile_info:"Hola, me encantan las zapatillas y los chollos,intentaré publicar mucho contenido de ofertas de zapatillas, asi que sígueme :).",
          products: [{
                  is_cupon : false,
                  name : 'Black / Silver Metallic',
                  label_top : 'Amazon',
                  label_top_bg : '#FAE7CB',
                  label_top_color : '#E4B408',
                  cost_init : '78.50',
                  cost_end : '69.90',
                  discount : '15',
                  categories : [{
                    id : '112',
                    name : 'moda'
                  },{
                    id : '112',
                    name : 'sueters'
                  }],
                    cupon:{
                    visible : false,
                    name : '',
                    color_bg : '#232323',
                    color_text : '#FFFFFF',
                    agotado : true,
                    codigo : '',
                    fecha: ''
                  },
                  image: oferta1,
                  image_width:'192.87px',
                  image_height:'220px',
                  date: '1 Febrero',
                  oclock: false,
                  colours : ['#b3ac9f','#296118']
                },{
                  is_cupon : false,
                  name : 'Camiseta Theo',
                  label_top : 'About you',
                  label_top_bg : '#FFFFFF',
                  label_top_color : '#000000',
                  cost_init : '34.50',
                  cost_end : '29.90',
                  discount : '18',
                  categories : [{
                    id : '112',
                    name : 'moda'
                  },{
                    id : '112',
                    name : 'sueters'
                  }],
                    cupon:{
                    visible : false,
                    name : '',
                    color_bg : '#232323',
                    color_text : '#FFFFFF',
                    agotado : false,
                    codigo : '',
                    fecha: ''
                  },
                  image: oferta2,
                  image_width:'192.87px',
                  image_height:'220px',
                  date: '1 Febrero',
                   oclock: true,
                  colours : ['#F2F2F2','#171717']
                }, {
                  is_cupon : false,
                  name : 'Zapatillas bajas Enzo',
                  label_top : 'Deportes Outlet ',
                  label_top_bg : '#C5E8F8',
                  label_top_color : '#288ED8',
                  black_friday_top: 'black friday',
                  black_friday_color: '#FFFFFF',
                  black_friday: true,
                  cost_init : '98.50',
                  cost_end : '89.90',
                  discount : '18',
                  categories : [{
                    id : '112',
                    name : 'moda'
                  },{
                    id : '112',
                    name : 'sueters'
                  }],
                    cupon:{
                    visible : false,
                    name : '',
                    color_bg : '#232323',
                    color_text : '#FFFFFF',
                    agotado : false,
                    codigo : '',
                    fecha: ''
                  },
                  image: oferta3,
                  image_width:'192.87px',
                  image_height:'220px',
                  date: '1 Febrero',
                  colours : ['#EDEBEC','#4A4A4A']
                },{
                  is_cupon : false,
                  name : 'Chaqueta Christopher',
                  label_top : 'SHEIN',
                  label_top_bg : '#1D2E35',
                  label_top_color : '#FFFFFF',
                  cost_init : '88.50',
                  cost_end : '59.90',
                  discount : '25',
                  categories : [{
                    id : '112',
                    name : 'moda'
                  },{
                    id : '112',
                    name : 'sueters'
                  }],
                   cupon:{
                    visible : false,
                    name : '',
                    color_bg : '#232323',
                    color_text : '#FFFFFF',
                    agotado : false,
                    codigo : '',
                    fecha: ''
                  },
                  image: oferta4,
                  image_width:'192.87px',
                  image_height:'220px',
                  date: '1 Febrero',
                  colours : ['#EDEBEC','#4A4A4A']
                }
             ]          
          }
    },
     methods: {
        onTab(data){
          return this.color_tab = (data)?'black':'black';
        }
      }
}
</script>

<style>

</style>