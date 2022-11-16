<template>
  <section class="brands">
    <Navbar :show="showNav" :white="true" />
    <figure :style=" {transform: `translate(${xPos}px, -${yPos}px) scale(${scale})`, 'box-shadow' : shadow ? ''
    : 'none' }" class="brand-pic">
      <img src="../assets/amazone.png" alt="amazone">
    </figure>
    <header class="brands-top">
      <figure>
        <img src="../assets/brand-bg.png" alt="Brand Background">
      </figure>
      <div class="button-group">
        <span class="rating">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13.631 5.11934C13.5891 4.99592 13.512 4.88747 13.4092 4.80738C13.3063 4.72729 13.1823 4.67908 13.0524 4.66868L9.25169 4.36668L7.60703 0.72601C7.55465 0.608751 7.46945 0.509157 7.36172 0.439248C7.25399 0.369339 7.12833 0.332102 6.99991 0.332031C6.87148 0.331961 6.74578 0.36906 6.63798 0.438851C6.53017 0.508642 6.44487 0.608142 6.39236 0.725343L4.74769 4.36668L0.947025 4.66868C0.819329 4.67879 0.697251 4.72548 0.595395 4.80316C0.49354 4.88084 0.416221 4.98622 0.372687 5.1067C0.329154 5.22717 0.321251 5.35763 0.349922 5.48248C0.378593 5.60733 0.442626 5.72127 0.534359 5.81068L3.34303 8.54868L2.34969 12.85C2.31953 12.9802 2.3292 13.1165 2.37744 13.2411C2.42568 13.3657 2.51027 13.473 2.62023 13.549C2.73019 13.6249 2.86044 13.6661 2.99408 13.6671C3.12772 13.6681 3.25859 13.629 3.36969 13.5547L6.99969 11.1347L10.6297 13.5547C10.7432 13.6301 10.8772 13.6689 11.0134 13.6659C11.1497 13.6629 11.2818 13.6183 11.392 13.538C11.5021 13.4577 11.585 13.3456 11.6295 13.2167C11.6741 13.0879 11.6781 12.9485 11.641 12.8173L10.4217 8.55068L13.4457 5.82934C13.6437 5.65068 13.7164 5.37201 13.631 5.11934Z"
              fill="#51AB6A" />
          </svg>
          {{ rating }}
        </span>
        <NavbarButton :white="true" :shadow="true"><img src="../assets/arrow-up-right.svg" alt="arrow up">
        </NavbarButton>
        <NavbarButton :white="true" :shadow="true"><img src="../assets/upload.svg" alt="upload"></NavbarButton>
      </div>
    </header>
    <BrandHeader :style="{ paddingBottom: showBrandNav ? `${16 + 39}px` : '' }" :views="views" :brandName="brandName" />
    <BrandNav :style="{ position: showBrandNav ? 'fixed' : '' }" />
    <BrandRatings />
    <Review rating="10" title="El servicio postventa es pésimo" text="El servicio postventa es pésimo!!! Llevo más de
un mes para hacer una devolución y aqui sigo
esperando" :replies="
[
  {
    title: 'Reply from Groupon España',
    text: 'Lamentamos leer la mala experiencia que has tenido con nostros. Nuestro equipo está revisando tu caso y poniendose al contacto contigo. En las próximas 48hs solucionaremos el problema.',
    date: 'Hace 2 dias'
  }
]
" />
    <Review rating="5" title="PEDIDO" text="Realicé un pedido de 3 gafas de sol y solo enviaron 2.
No hay manera de ponerse al contacto con la
la empresa ni con groupon solo me remite a ella.
No se responsabiliza por nada. Ya pasó más de
un mes y no tengo respuesta." />
    <BrandRate />
    <Review rating="2" title="PEDIDO" text="Realicé un pedido de 3 gafas de sol y solo enviaron 2.
No hay manera de ponerse al contacto con la
la empresa ni con groupon solo me remite a ella.
No se responsabiliza por nada. Ya pasó más de
un mes y no tengo respuesta." />
    <BrandPagination />
    <BrandRate :secondary="true" />
  </section>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import NavbarButton from '../components/NavbarButton.vue';
import BrandHeader from '../components/BrandHeader.vue';
import BrandNav from '../components/BrandNav.vue';
import BrandRatings from '../components/BrandRatings.vue';
import BrandRate from '../components/BrandRate.vue';
import BrandPagination from '../components/BrandPagination.vue';
import Review from '../components/Review.vue';
import img from '../assets/registration-bg.png';
export default {
  components: {
    Navbar,
    NavbarButton,
    BrandHeader,
    BrandNav,
    BrandRatings,
    BrandRate,
    Review,
    BrandPagination,
  },
  mounted() {
    window.addEventListener('scroll', this.scrollHandler);
  },
  destroyed() {
    window.removeEventListener('scroll', this.scrollHandler);
  },
  methods: {
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
        this.showBrandNav = true;
      } else {
        this.showBrandNav = false;
      }
    }
  },
  data() {
    return {
      rating: 9.2,
      brandName: 'Tienda Amazone',
      lastKnownScrollPosition: null,
      views: 795,
      img,
      ticking: false,
      yPos: 0,
      xPos: 0,
      scale: 1,
      shadow: true,
      showNav: false,
      showBrandNav: false,
    }
  },
}
</script>
