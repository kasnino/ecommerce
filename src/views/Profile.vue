<template>
    <section class="profile">
    <Navbar :show="true"  name="" username="@daniellem418" height="60px" :isVerificate="true"/>
    <figure class="figure position-relative p-0 m-0">
        <img src="../assets/profile/profile_fondo.png" class=" position-relative img-responsive "  
        height="140"  alt="" style="width:100%;">
        <Avatar/>
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
              <span v-for="(logo, index) in logos_redes" :key="index.id">
                 <img :src="getImageUrl(logo)" width="14" height="10"  alt="" >
              </span>
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
              <!-- Navigations tabs -->
              <div class="system_nav_profiles p-0 m-0">
                <ProfileNav 
                    :class="showProfileNav ? 'profile_nav' : ''"
                    :tabs="nav_profile" 
                    :list_iconos="name_icon"
                    :onbarra="true"
                    :name_icono="name_iconos"
                    :colores_icon="colores_icons"
                    :onbackground="false"
                    :style="{ position: showProfileNav ? 'fixed' : '' }"  />
              </div>
              
              <transition-group name="slide-up">
                <template v-if="view=='0'">
                   <SwiperHomeOfferts :prodcuts="products"/> 
                </template>
                <template v-if="view=='0'">
                   <SwiperCuponesOfferts :prodcuts="products_offers"/>
                </template>
              </transition-group>
              <Menubar :showMenu="showMenu" />
  </section>
</template>
<script >
import { Swiper, SwiperSlide } from 'swiper/vue';
import Navbar from '../components/Navbar.vue';
import Avatar from '../components/Avatar.vue';
import ProfileNav from '../components/ProfileNav.vue';
import Menubar from '../components/Menubar.vue';
import FireIcon from '../components/svg/fire.vue';
import SwiperHomeOfferts from '../components/SwiperHomeOfferts.vue';
import SwiperCuponesOfferts from '../components/SwiperCuponesOfferts.vue';

// assets
import oferta7 from '../assets/images/short.webp';
import oferta8 from '../assets/images/hansen.webp';
import oferta9 from '../assets/images/heekpek-bufandas.webp';
import oferta10 from '../assets/images/michael-kors.webp';
import logo3 from '../assets/logos/vans.svg';
import oferta1 from '../assets/prenda1.webp';
import oferta2 from '../assets/prenda2.webp';
import oferta3 from '../assets/prenda3.webp';
import oferta4 from '../assets/prenda4.webp';
import oferta5 from '../assets/prenda5.webp';
import oferta6 from '../assets/prenda6.webp';
import oferta11 from '../assets/images/levis-batwing.webp';
import oferta12 from '../assets/test_cinturon.webp';


export default {
  components: {
    Swiper,
    SwiperSlide,
    Navbar,
    Avatar,
    Menubar,
    ProfileNav,
    SwiperHomeOfferts,
    SwiperCuponesOfferts,
    FireIcon
      },

    mounted() {
        window.addEventListener('scroll', this.scrollHandler);
    },
    destroyed() {
      window.removeEventListener('scroll', this.scrollHandler);
    },

    setup() {
        const getImageUrl = (name_logo) => {
        return new URL(`../assets/profile/redes_sociales/${name_logo}.svg`, import.meta.url).href
    }
  
  return { getImageUrl }
},
      data()
      { 
        return { 
        brands: [
        {
          text: 'hols'
        },
        {
          text: 'Chollos',
          amount: 312
        },
        {
          text: 'Cupones',
          amount: 123
        },
        {
          text: 'Opiniones',
          amount: 123
        },
      ],
         profile_icon:['activity','fire','diamante','activity','fire','diamante'],
         showProfileNav: false,
         showMenu: true,
          view: '0',
          logos_redes:['logo_youtube','logo_instagram','logo_twitter','logo_facebook','logo_tiktok'],
          nav_profile:['actividad','892 chollos publicados', '', 'tab 3', 'tab 4', 'tab 5' ],
          name_icon:['activity','fire','diamante','activity','fire','diamante'],
            name_iconos: ['IconoActivity','IconoFire','IconoDiamante','IconoStart','IconoActivity','IconoDiamante'],
         colores_icons: ['black', 'black', 'black', 'black', 'black', 'black'],
         
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
                    agotado : true,
                  },
                  image: oferta7,
                  image_width:'192.87px',
                  image_height:'220px',
                  date: '1 Febrero',
                  oclock: false,
                  colours : ['#b3ac9f','#296118']
                },{
                  is_cupon : false,
                  name : 'Camiseta Theo',
                  label_top : 'About you',
                  label_top_bg : '#D8D8D8',
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
                    agotado : false,
                  },
                  image: oferta8,
                  image_width:'192.87px',
                  image_height:'220px',
                  date: '1 Febrero',
                   oclock: false,
                  colours : ['#F2F2F2','#171717']
                },{
                     is_cupon : true,
                  name : "ENVÍO GRATIS",
                  label_top : 'About You',
                  label_top_bg : '#D8D8D8',
                  label_top_color : '#000',
                  cost_init : '250',
                  cost_end : '150',
                  discount : '35',
                  cupon:{
                    visible : true,
                    name : 'EXTRADSCTO5',
                    color_bg : '#1E4D68',
                    color_text : '#FFFFFF',
                    agotado : false,
                    codigo : '5237',
                    fecha: 'Desde 2 febrero'
                  },
                  categories : [{
                    id : '112',
                    name : 'moda'
                  },{
                    id : '112',
                    name : 'sueters'
                  }],
                  image: logo3,
                  image_width:'55px',
                  image_height:'40px',
                  date: '1 Febrero',
                  colours : ['#000'],
                  oclock:false
                }, 
                
                {
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
                    agotado : false,
                  },
                  image: oferta9,
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
                    agotado : false,
                  },
                  image: oferta10,
                  image_width:'192.87px',
                  image_height:'220px',
                  date: '1 Febrero',
                  colours : ['#EDEBEC','#4A4A4A']
                },
                {
          is_cupon : false,
          name : 'Black / Silver Metallic',
          label_top : 'Amazon',
          label_top_bg : '#FAE7CB',
          label_top_color : '#E4B408',
          cost_init : '250',
          cost_end : '150',
          discount : '35',
          categories : [{
            id : '112',
            name : 'moda'
          },{
            id : '112',
            name : 'sueters'
          }],
          cupon:{
            agotado : false,
          },
          image: oferta1,
          image_width:'192.87px',
          image_height:'220px',
          date: '1 Febrero',
          colours : ['#b3ac9f','#296118']
        },{
          is_cupon : false,
          name : "Camiseta 'Theo'",
          label_top : 'About You',
           label_top_bg : '#D8D8D8',
          label_top_color : '#000',
          cost_init : '250',
          cost_end : '150',
          discount : '35',
          categories : [{
            id : '112',
            name : 'moda'
          },{
            id : '112',
            name : 'sueters'
          }],
            cupon:{
            agotado : false,
          },
          image: oferta2,
          image_width:'192.87px',
          image_height:'220px',
          date: '1 Febrero',
          colours : ['#000'],
          oclock:false
        },{
            is_cupon : false,
          name : 'Zapatillas bajas Enzo',
          label_top : 'Deportes Outlet',
          label_top_bg : '#C5E8F8',
          label_top_color : '#288ED8',
          cost_init : '250',
          cost_end : '150',
          discount : '35',
          categories : [{
            id : '112',
            name : 'moda'
          },{
            id : '112',
            name : 'sueters'
          }],
            cupon:{
            agotado : false,
          },
          image: oferta3,
          image_width:'192.87px',
          image_height:'220px',
          date: '1 Febrero',
          colours : ['#edebec','#4a4a4a'],
          oclock:false
        },{
            is_cupon : false,
          name : "Chaqueta 'Christopher'",
          label_top : 'SHEIN',
          label_top_bg : '#1D2E35',
          label_top_color : '#FFF',
          cost_init : '250',
          cost_end : '150',
          discount : '35',
          categories : [{
            id : '112',
            name : 'moda'
          },{
            id : '112',
            name : 'sueters'
          }],
            cupon:{
            agotado : false,
          },
          image: oferta4,
          image_width:'192.87px',
          image_height:'220px',
          date: '1 Febrero',
          colours : ['#dad8d9','#4a4a4a'],
          oclock:false
        },{
            is_cupon : false,
          name : 'Black / Silver Metallic',
          label_top : 'Amazon',
          label_top_bg : '#FAE7CB',
          label_top_color : '#E4B408',
          cost_init : '250',
          cost_end : '150',
          discount : '35',
          categories : [{
            id : '112',
            name : 'moda'
          },{
            id : '112',
            name : 'sueters'
          }],
            cupon:{
            agotado : true,
          },
          image: oferta5,
          image_width:'192.87px',
          image_height:'220px',
          date: '1 Febrero',
          colours : ['#b3ac9f','#296118'],
          oclock:false
        },{
            is_cupon : false,
          name : "Camiseta 'Theo'",
          label_top : 'About You',
           label_top_bg : '#D8D8D8',
          label_top_color : '#000',
          cost_init : '250',
          cost_end : '150',
          discount : '35',
          categories : [{
            id : '112',
            name : 'moda'
          },{
            id : '112',
            name : 'sueters'
          }],
            cupon:{
            agotado : false,
          },
          image: oferta6,
          image_width:'192.87px',
          image_height:'220px',
          date: '1 Febrero',
          colours : ['#000'],
          oclock:false
        },
        {
            is_cupon : false,
          name : "Zapatilla 'Running'",
          label_top : 'About You',
          label_top_bg : '#D8D8D8',
          label_top_color : '#000',
          cost_init : '250',
          cost_end : '150',
          discount : '35',
          categories : [{
            id : '112',
            name : 'moda'
          },{
            id : '112',
            name : 'sueters'
          }],
            cupon:{
            agotado : false,
          },
          image: oferta11,
          image_width:'192.87px',
          image_height:'220px',
          date: '1 Febrero',
          colours : ['#000'],
          oclock:false
        },
          {
              is_cupon : false,
          name : "Cinturon 'Theo'",
          label_top : 'Amazon',
          label_top_bg : '#FAE7CB',
          label_top_color : '#E4B408',
          cost_init : '250',
          cost_end : '150',
          discount : '35',
          categories : [{
            id : '112',
            name : 'moda'
          },{
            id : '112',
            name : 'sueters'
          }],
            cupon:{
            agotado : false,
          },
          image: oferta12,
          image_width:'192.87px',
          image_height:'220px',
          date: '1 Febrero',
          colours : ['#000'],
          oclock:true
        }, {
          is_cupon : true,
          name : "-35% MENOS",
          label_top : 'Deportes Outlet',
         label_top_bg : '#D8D8D8',
          label_top_color : '#000',
          cost_init : '250',
          cost_end : '150',
          discount : '35',
          cupon:{
            visible : false,
            name : '',
            color_bg : '#232323',
            color_text : '#FFFFFF',
            agotado : true,
            codigo : '',
            fecha: ''
          },
          categories : [{
            id : '112',
            name : 'moda'
          },{
            id : '112',
            name : 'sueters'
          }],
          image: logo3,
          image_width:'55px',
          image_height:'40px',
          date: '1 Febrero',
          colours : ['#000'],
          oclock:false
        } 
             ],
      products_offers : [
        {
          is_cupon : true,
          name : "-35% MENOS",
          label_top : 'Deportes Outlet',
         label_top_bg : '#D8D8D8',
          label_top_color : '#000',
          cost_init : '250',
          cost_end : '150',
          discount : '35',
          cupon:{
            visible : false,
            name : '',
            color_bg : '#232323',
            color_text : '#FFFFFF',
            agotado : true,
            codigo : '',
            fecha: ''
          },
          categories : [{
            id : '112',
            name : 'moda'
          },{
            id : '112',
            name : 'sueters'
          }],
          image: logo3,
          image_width:'55px',
          image_height:'40px',
          date: '1 Febrero',
          colours : ['#000'],
          oclock:false
        } ,{
          is_cupon : true,
          name : "5€ DE DESCUENTO",
          label_top : 'Deportes Outlet',
         label_top_bg : '#D8D8D8',
          label_top_color : '#000',
          cost_init : '250',
          cost_end : '150',
          discount : '35',
          cupon:{
            visible : true,
            name : 'EXTRADSCTO5',
            color_bg : '#F3F3F3',
            color_text : '#FFFFFF',
            agotado : true,
            codigo : '',
            fecha: ''
          },
          categories : [{
            id : '112',
            name : 'moda'
          },{
            id : '112',
            name : 'sueters'
          }],
          image: logo3,
          image_width:'55px',
          image_height:'40px',
          date: '1 Febrero',
          colours : ['#000'],
          oclock:false
        }, {
          is_cupon : true,
          name : "5€ DE DESCUENTO",
          label_top : 'Deportes Outlet',
          label_top_bg : '#C5E8F8',
          label_top_color : '#288ED8',
          cost_init : '250',
          cost_end : '150',
          discount : '35',
          cupon:{
            visible : false,
            name : '',
            color_bg : '#1E4D68',
            color_text : '#FFFFFF',
            agotado : false,
            codigo : '5237',
            fecha: 'Hace 2 horas'
          },
          categories : [{
            id : '112',
            name : 'moda'
          },{
            id : '112',
            name : 'sueters'
          }],
          image: logo3,
          image_width:'55px',
          image_height:'40px',
          date: '1 Febrero',
          colours : ['#000'],
          oclock:false
        },{
          is_cupon : true,
          name : "ENVÍO GRATIS",
          label_top : 'About You',
          label_top_bg : '#D8D8D8',
          label_top_color : '#000',
          cost_init : '250',
          cost_end : '150',
          discount : '35',
          cupon:{
            visible : true,
            name : 'EXTRADSCTO5',
            color_bg : '#1E4D68',
            color_text : '#FFFFFF',
            agotado : false,
            codigo : '5237',
            fecha: 'Desde 2 febrero'
          },
          categories : [{
            id : '112',
            name : 'moda'
          },{
            id : '112',
            name : 'sueters'
          }],
          image: logo3,
          image_width:'55px',
          image_height:'40px',
          date: '1 Febrero',
          colours : ['#000'],
          oclock:false
        },
        {
          is_cupon : false,
          name : 'Black / Silver Metallic',
          label_top : 'Amazon',
          label_top_bg : '#FAE7CB',
          label_top_color : '#E4B408',
          cost_init : '250',
          cost_end : '150',
          discount : '35',
          categories : [{
            id : '112',
            name : 'moda'
          },{
            id : '112',
            name : 'sueters'
          }],
          image: oferta1,
          image_width:'192.87px',
          image_height:'220px',
          date: '1 Febrero',
          colours : ['#b3ac9f','#296118']
        },{
          is_cupon : true,
          name : "5€ DE DESCUENTO",
          label_top : 'Deportes Outlet',
          label_top_bg : '#C5E8F8',
          label_top_color : '#288ED8',
          cost_init : '250',
          cost_end : '150',
          discount : '35',
          cupon:{
            visible : false,
            name : '',
            color_bg : '#232323',
            color_text : '#FFFFFF',
            agotado : false,
            codigo : '5237',
            fecha: 'Hace 2 horas'
          },
          categories : [{
            id : '112',
            name : 'moda'
          },{
            id : '112',
            name : 'sueters'
          }],
          image: logo3,
          image_width:'55px',
          image_height:'40px',
          date: '1 Febrero',
          colours : ['#000'],
          oclock:false
        }
      ],          
          }
    },

     methods: {
        onTab(data){
          return this.color_tab = (data)?'black':'black';
        },
            scrollHandler() {
      this.lastKnownScrollPosition = window.scrollY;

      if (!this.ticking) {
        window.requestAnimationFrame(() => {
          this.calculateOffset(this.lastKnownScrollPosition);
          this.ticking = false;
        });
        this.ticking = true;
        }
      },
          calculateOffset(scrollPos) {
      const width = window.innerWidth / 2 / 2;
      const maxHeigth = 180 - 32;
      if (scrollPos > 0 && scrollPos < maxHeigth) {
        this.yPos = scrollPos;
        this.xPos = scrollPos * width / maxHeigth;
        this.scale = 1 - scrollPos * 0.5 / maxHeigth;
        this.shadow = true
      } else if (scrollPos === 0) {
        this.yPos = 0;
        this.xPos = 0;
        this.scale = 1;
      } else {
        this.yPos = maxHeigth;
        this.xPos = maxHeigth * width / maxHeigth;
        this.scale = 1 - maxHeigth * 0.5 / maxHeigth;
        this.shadow = false;
      }

      if (scrollPos > maxHeigth) {
        this.showNav = true
      } else {
        this.showNav = false;
      }

      if (scrollPos > maxHeigth + 74) {
        this.showProfileNav = true;
      } else {
        this.showProfileNav = false;
      }
    }
      }
}
</script>

<style lang="scss" scoped>

.profile_nav{

  z-index: 10;
  top:53px !important;
  background:#FFF;
   transition: all 0.1s linear 0.2s;
   border-top: 1px solid #EDEDED;
}

</style>