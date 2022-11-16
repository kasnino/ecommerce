<template>

  <section class="home">

      <SearchBar/>

      <HeadBand :data="{title:'TOP OFERTAS',categories:[{id:'as',name:'HASTA'}],discount:'12'}"/>

      <SwiperHome :slides="products"/>
      
      <HeadBandCategorias :data="{title:'CATEGORIAS',categories:[{id:'as',name:'cat 1'}],discount:'12'}"/>

      <GridCategories :categories="categories"/>

      <HeadBandOfertas :data="{title:'OFERTAS',categories:[{id:'as',name:'cat 1'}],discount:'12'}"/>

      <SwiperHomeOfferts :prodcuts="products_offers"/>

      <section class="raffles" style="margin-top:15px; background:#FFF">
        <img src="/src/assets/bell.svg" alt="" style="height: 25px;width:25px">
        <h1 class="raffles-title">Añade alerta de <strong>lo que estes buscando</strong> </h1>
        <p class="raffles-info" style="    text-align: center;">Recibe un aviso en tu e-mail cada vez que una
oferta que tenga tus palabras claves</p>
        
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Palabras claves..." aria-label="Palabras claves..." aria-describedby="basic-addon2">
          <div class="input-group-append">
            <span class="input-group-text" id="basic-addon2">Agregar</span>
          </div>
        </div>

      </section>

      <div class="card mb-3 mt-3 border-0">
        <div class="row mx-0 px-0 d-flex">
          <div class="col-6 mx-0 px-0 d-flex">
            <div class="card-body text-center">
              <p class="card-text small">Aprende como activar las alertas con este <strong> tutorial </strong></p>
              <button class="btn btn-block bg-black text-white">Ver Video</button>
            </div>
          </div>
          <div class="col-6 d-flex mx-0 px-0">
            <img src="/src/assets/video.png" style="height: 130px;width:190px" class="rounded-start" alt="...">
          </div>
        </div>
      </div>

 
  </section>

          <div style="margin-top:100px"></div>


    <Menubar :showMenu="true" />

</template>


<script>
import SearchBar from '../components/SearchBar.vue';
import HeadBand from '../components/HeadBand.vue';
import HeadBandCategorias from '../components/HeadBandCategorias.vue';
import HeadBandOfertas from '../components/HeadBandOfertas.vue';
import SwiperHome from '../components/SwiperHome.vue';
import GridCategories from '../components/GridCategories.vue';
import SwiperHomeOfferts from '../components/SwiperHomeOfferts.vue';
import Menubar from '../components/Menubar.vue';


import prod1 from '../assets/product_1.webp';
import prod2 from '../assets/product_2.webp';
import cat1 from '../assets/cate_1.webp';
import cat2 from '../assets/cate_2.webp';
import cat3 from '../assets/cate_3.webp';
import cat4 from '../assets/cate_4.webp';
import cat5 from '../assets/cate_5.webp';
import cat6 from '../assets/cate_6.webp';
import oferta1 from '../assets/prenda1.webp';
import oferta2 from '../assets/prenda2.webp';
import oferta3 from '../assets/prenda3.webp';
import oferta4 from '../assets/prenda4.webp';
import oferta5 from '../assets/prenda5.webp';
import oferta6 from '../assets/prenda6.webp';




 export default {
  components: {
    SearchBar,
    HeadBand,
    HeadBandCategorias,
    HeadBandOfertas,
    SwiperHome,
    GridCategories,
    SwiperHomeOfferts,
    Menubar,
  },
  data() {
    return {
      products : [{
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
      ],
      categories : [{
          name : 'Ropa',
          image: cat1,
          width:'48px',
          height:'58px',
        },{
          name : 'Zapatos',
          image: cat2,
          width:'48px',
          height:'58px',
        },{
          name : 'Deportes',
          image: cat3,
          width:'48px',
          height:'58px',
        },{
          name : 'Complementos',
          image: cat4,
          width:'26px',
          height:'46px',
        },{
          name : 'Marcas',
          image: cat5,
          width:'48px',
          height:'58px',
        },{
          name : 'Tiendas',
          image: cat6,
          width:'24px',
          height:'21.33px',
        }
      ],
      products_offers : [{
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
          name : "Camiseta 'Theo'",
          label_top : 'About You',
          label_top_bg : '#FFF',
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
          image: oferta2,
          image_width:'192.87px',
          image_height:'220px',
          date: '1 Febrero',
          colours : ['#000'],
          oclock:false
        },{
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
          image: oferta3,
          image_width:'192.87px',
          image_height:'220px',
          date: '1 Febrero',
          colours : ['#edebec','#4a4a4a'],
          oclock:false
        },{
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
          image: oferta4,
          image_width:'192.87px',
          image_height:'220px',
          date: '1 Febrero',
          colours : ['#dad8d9','#4a4a4a'],
          oclock:true
        },{
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
          image: oferta5,
          image_width:'192.87px',
          image_height:'220px',
          date: '1 Febrero',
          colours : ['#b3ac9f','#296118'],
          oclock:false
        },{
          name : "Camiseta 'Theo'",
          label_top : 'About You',
          label_top_bg : '#FFF',
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
          image: oferta6,
          image_width:'192.87px',
          image_height:'220px',
          date: '1 Febrero',
          colours : ['#000'],
          oclock:true
        }
      ],
    }
  },
}
</script>
