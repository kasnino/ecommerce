<template>
    <section class="profile">
    <Navbar :show="true" :shadown="false"  name="" color="#FFFFFF" username="trajes de baño para mujer" height="60px" :isVerificate="false"/>
              <!-- Navigations tabs icono más texto -->
              <ProfileNav 
                class="profile_nav my-1"
                :tabs="name_tabs"
                :onbarra="false"
                :onbackground="true"
                :name_icono="name_iconos"
                :colores_icon="colores_icons"
                :style="{ position: showProfileNav ? 'fixed' : '' }"  />
               
             
              <div class="w-100 p-0 m-0 d-flex justify-content-around">
               <BrandTiendaTag :brands="brands" />
                      <FormTalla 
                      label_input="" 
                      name_buttom="Marca" 
                      :tallas="tallas"
                      :border_btn="false"
                      ></FormTalla>
             
                      <FormTalla 
                      label_input="" 
                      name_buttom="200 - 500 EUR" 
                      :tallas="precio"
                      :border_btn="false"
                      ></FormTalla>
       
                      <FormTalla 
                      label_input="" 
                      name_buttom="Tienda" 
                      :tallas="tienda"
                      :border_btn="false"
                      ></FormTalla>
                
              </div>
            
              <transition-group name="slide-up">
                <template v-if="view=='0'">
                   <SwiperHomeOfferts :prodcuts="products"/> 
                </template>
              </transition-group>
              <Menubar :showMenu="showMenu" />
    </section>
</template>
<script >

import { Swiper, SwiperSlide } from 'swiper/vue';
import BrandTiendaTag from '../components/BrandTienda/BrandTiendaTag.vue';
import scissors from '../assets/scissors.svg';
import Navbar from '../components/Navbar.vue';
import FormTalla from '../components/FormTalla.vue';
import Avatar from '../components/Avatar.vue';
import activos from '../assets/activos.svg';
import ProfileNav from '../components/ProfileNav.vue';
import Menubar from '../components/Menubar.vue';
import SwiperHomeOfferts from '../components/SwiperHomeOfferts.vue';
import SwiperCuponesOfferts from '../components/SwiperCuponesOfferts.vue';


import oferta7 from '../assets/images/short.webp';
import user from '../assets/user-plus.svg';
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
    BrandTiendaTag,
    Swiper,
    SwiperSlide,
    Navbar,
    Avatar,
    FormTalla,
    Menubar,
    ProfileNav,
    SwiperHomeOfferts,
    SwiperCuponesOfferts,
      },

        mounted() {
        window.addEventListener('scroll', this.scrollHandler);
      },
       destroyed() {
      window.removeEventListener('scroll', this.scrollHandler);
    },

      data()
      { 
        return { 
      tallas:[{
        name_form:'Talla',
        name:'UE',
        sizes : [
            { id:'1', nro:'34', available:true },
            { id:'2', nro:'35', available:true },
            { id:'3', nro:'37', available:true },
            { id:'4', nro:'38', available:true },
            { id:'5', nro:'39', available:true },
          ]
        },
      ],
      tienda:[{
        name_form:'Tienda',
        name:'Mango',
        sizes : [
            { id:'1', nro:'34', available:true },
            { id:'2', nro:'35', available:true },
            { id:'3', nro:'37', available:true },
            { id:'4', nro:'38', available:true },
            { id:'5', nro:'39', available:true },
          ]
        },
      ],
        precio:[{
        name_form:'Precio',
        name:'EUR',
        sizes : [
            { id:'1', nro:'34', available:true },
            { id:'2', nro:'35', available:true },
            { id:'3', nro:'37', available:true },
            { id:'4', nro:'38', available:true },
            { id:'5', nro:'39', available:true },
          ]
        },
      ],
        tienda_icon:['start','fire','diamante','start','fire','diamante'],
         brands: [
        {
          name: 'Ver agotadas',
          amount: '',
          img: '',
          index: 0,
          checking: true
        },
      ],
         showProfileNav: false,
         showMenu: true,
           views: 795,
          view: '0',
          logos_redes:['logo_youtube','logo_instagram','logo_twitter','logo_facebook','logo_tiktok'],
          name_tabs: ['Nuevo','Nuestra seleccion', 'Top Likes Hoy', 'Tu list', 'tab 4', 'tab 5' ],
          name_iconos: ['IconoCampana','IconoFire','IconoDiamante','IconoStart','IconoActivity','IconoDiamante'],
         colores_icons: ['#ffbd63', '#5bc6d6', '#ff8f8f', '#ffca9d', '#ffbd63', '#5bc6d6',],
         color_tab:'black',
          profile_info:"Hola, me encantan las zapatillas y los chollos,intentaré publicar mucho contenido de ofertas de zapatillas, asi que sígueme :).",
          products: [
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
          image: oferta5,
          image_width:'192.87px',
          image_height:'220px',
          date: '1 Febrero',
          colours : ['#b3ac9f','#296118'],
          oclock:false
        },{
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
                    agotado : false,
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
      const maxHeigth = 32 - 32;
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

      if (scrollPos > maxHeigth + 0) {
       
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