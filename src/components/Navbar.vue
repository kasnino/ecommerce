<template>
  <nav :class="{navbar: true, white: white,'shadow':shadown}" class="" 
  :style="'align-items: center;height:'+height+';'+'background:'+color+';'">
    <div :class="{bg: true, show: show}" :style="style"></div>
    <button :class="{white: !show && white}" class="" style="width: 54px; ">
      <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0 6.96165C0 7.22911 0.102262 7.45723 0.314651 7.66175L6.45034 13.6637C6.61554 13.8368 6.83579 13.9233 7.08751 13.9233C7.59882 13.9233 8 13.53 8 13.0108C8 12.7591 7.89774 12.531 7.72468 12.3579L2.19469 6.96165L7.72468 1.56539C7.89774 1.38446 8 1.15634 8 0.904621C8 0.393314 7.59882 0 7.08751 0C6.83579 0 6.61554 0.086529 6.45034 0.259587L0.314651 6.26155C0.102262 6.46608 0.00786627 6.6942 0 6.96165Z"
          :fill="white && !show ? 'white' : 'black'" />
      </svg>
      <span style="font-size:12px;">Atrás</span>
      <!-- Atras -->
    </button>

        <span style="" 
          class="navbar-title clip-text d-flex align-items-center text-center">
          <div class="d-flex justify-content-center align-items-center " 
          v-if="show && !showLogo"> {{ name }} 
          </div> 

          <div class="d-flex justify-content-center text-lowercase 
                      fw-bold align-items-center" 
            v-if="show && !showLogo && !name"> {{ username }} 
            <!-- User verification -->
            <span v-if="isVerificate" >
            <img class="ms-1" width="18" height="18" src="../assets/profile/Verificate.svg" 
            alt="verificate_user">
            </span>
        </div> 

        <div class="" v-if="show && showLogo"> 
          <img :src="imgLogo" alt="" class="rounded-circle" 
          style="max-width:50px;max-height:50px;"> </div> 
      </span>

    <div>
      <div style=""  class="gap-1 d-flex mx-2 ">
         <NavbarButton v-if="alertIcon" class=" justify-content-center">
        <span> <svg width="19" height="19" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.134 10C16.715 15.375 19 17 19 17H1C1 17 4 14.867 4 7.4C4 5.703 4.632 4.075 5.757 2.875C6.883 1.675 8.41 1 10 1C10.337 1 10.672 1.03 11 1.09M11.73 20C11.5544 20.3033 11.3021 20.5552 10.9985 20.7302C10.6948 20.9053 10.3505 20.9974 10 20.9974C9.6495 20.9974 9.30517 20.9053 9.00152 20.7302C8.69788 20.5552 8.44561 20.3033 8.27 20M17 7C17.7956 7 18.5587 6.68393 19.1213 6.12132C19.6839 5.55871 20 4.79565 20 4C20 3.20435 19.6839 2.44129 19.1213 1.87868C18.5587 1.31607 17.7956 1 17 1C16.2044 1 15.4413 1.31607 14.8787 1.87868C14.3161 2.44129 14 3.20435 14 4C14 4.79565 14.3161 5.55871 14.8787 6.12132C15.4413 6.68393 16.2044 7 17 7Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

          </span>
         </NavbarButton>
            <NavbarButton v-if="searchIcon"  class=" justify-content-center">
             <span><svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.5003 17.5L13.762 13.755L17.5003 17.5ZM15.8337 8.74996C15.8337 10.6286 15.0874 12.4303 13.759 13.7586C12.4306 15.087 10.6289 15.8333 8.75033 15.8333C6.87171 15.8333 5.07004 15.087 3.74165 13.7586C2.41327 12.4303 1.66699 10.6286 1.66699 8.74996C1.66699 6.87134 2.41327 5.06967 3.74165 3.74129C5.07004 2.4129 6.87171 1.66663 8.75033 1.66663C10.6289 1.66663 12.4306 2.4129 13.759 3.74129C15.0874 5.06967 15.8337 6.87134 15.8337 8.74996V8.74996Z" stroke="black" stroke-width="2" stroke-linecap="round"/>
          </svg>

          </span>
            </NavbarButton>
      </div>
      <div class=""  v-if="show && showLogo && accion=='comprar'">
       <button type="button" class="" style="display: inline-block;margin-top:5px;font-size: 12px; padding: 0px 6px; height: 35px; left: 166px; background: rgb(0, 0, 0); border-radius: 8px; color: rgb(255, 255, 255); margin: 0px;"> 
        <img :src="link" alt="" style="width:16px; height:16px">
        Comprar </button>
      </div>
     <ul v-if="!show" class="p-0 m-0">
      <li>
        <NavbarButton v-if="button_right=='liked'" class=" justify-content-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M19 13.9999V16.9999H22V18.9999H18.999L19 21.9999H17L16.999 18.9999H14V16.9999H17V13.9999H19ZM20.243 4.75694C21.3261 5.84008 21.9539 7.29643 21.9978 8.82754C22.0417 10.3586 21.4983 11.8486 20.479 12.9919L19.059 11.5739C20.39 10.0499 20.32 7.65994 18.827 6.16994C18.1043 5.44873 17.1331 5.03114 16.1124 5.0027C15.0918 4.97425 14.0989 5.3371 13.337 6.01694L12.002 7.21494L10.666 6.01794C9.90409 5.33661 8.91015 4.97291 7.8884 5.00155C6.86664 5.03019 5.89464 5.44899 5.17205 6.17194C4.4563 6.88764 4.03851 7.84808 4.00288 8.85964C3.96725 9.8712 4.31643 10.8587 4.98005 11.6229L13.412 20.0689L12 21.4849L3.52005 12.9929C2.4993 11.8489 1.95525 10.3575 1.99958 8.82492C2.04391 7.29235 2.67327 5.83489 3.75844 4.75177C4.84361 3.66865 6.30225 3.04205 7.83491 3.00061C9.36756 2.95917 10.8579 3.50604 12 4.52894C13.1426 3.50614 14.6335 2.95981 16.1664 3.00221C17.6993 3.04462 19.1578 3.67254 20.242 4.75694H20.243Z"
              :fill="white && !show ? 'white' : 'black'" />
          </svg>
        </NavbarButton>
        <NavbarButton v-if="button_right=='saved'" class=" justify-content-center">
          <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path :stroke="white && !show ? 'white' : 'black'"   d="M15 19L8 14L1 19V3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H13C13.5304 1 14.0391 1.21071 14.4142 1.58579C14.7893 1.96086 15 2.46957 15 3V19Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </NavbarButton>
      </li> 
    </ul>
    </div>

  </nav>
</template>

<script>
import NavbarButton from './NavbarButton.vue'

import link from "../assets/link.svg";
export default {
  data() {
    return {
      link: link
    }
  },
  components: {
    NavbarButton,
  },
  props: ['secondary', 'show', 'name', 'alertIcon', 'searchIcon', 'shadown', 'white','showLogo','imgLogo','accion','button_right','height', 'style', 'isVerificate', 'username', 'color'],
};

</script>
