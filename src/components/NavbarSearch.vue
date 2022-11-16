<template>
  <nav class=" " :class="{navbar: true, white: white,'shadow-sm':shadow}" style="min-height:40px">
    <div :class="{bg: true, show: show}" :style="style"></div>
    
      <router-link
      :to="route_to" class="router-link align-items-center d-flex" :class="{white: !show && white}">
        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 6.96165C0 7.22911 0.102262 7.45723 0.314651 7.66175L6.45034 13.6637C6.61554 13.8368 6.83579 13.9233 7.08751 13.9233C7.59882 13.9233 8 13.53 8 13.0108C8 12.7591 7.89774 12.531 7.72468 12.3579L2.19469 6.96165L7.72468 1.56539C7.89774 1.38446 8 1.15634 8 0.904621C8 0.393314 7.59882 0 7.08751 0C6.83579 0 6.61554 0.086529 6.45034 0.259587L0.314651 6.26155C0.102262 6.46608 0.00786627 6.6942 0 6.96165Z"
            :fill="white && !show ? 'white' : 'black'" />
        </svg>
       <span style="font-size: 12px;margin-left:8px;"> {{show_name_back}}</span>
    </router-link>
    <span class="navbar-title clip-text" v-if="show">{{ name }}</span>
     <div>
        <NavbarButton v-if="search">
          <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.5003 17.5L13.762 13.755L17.5003 17.5ZM15.8337 8.74996C15.8337 10.6286 15.0874 12.4303 13.759 13.7586C12.4306 15.087 10.6289 15.8333 8.75033 15.8333C6.87171 15.8333 5.07004 15.087 3.74165 13.7586C2.41327 12.4303 1.66699 10.6286 1.66699 8.74996C1.66699 6.87134 2.41327 5.06967 3.74165 3.74129C5.07004 2.4129 6.87171 1.66663 8.75033 1.66663C10.6289 1.66663 12.4306 2.4129 13.759 3.74129C15.0874 5.06967 15.8337 6.87134 15.8337 8.74996V8.74996Z" stroke="black" stroke-width="2" stroke-linecap="round"/>
</svg>

        </NavbarButton>
        <NavbarButton v-if="help">
          <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.5003 17.5L13.762 13.755L17.5003 17.5ZM15.8337 8.74996C15.8337 10.6286 15.0874 12.4303 13.759 13.7586C12.4306 15.087 10.6289 15.8333 8.75033 15.8333C6.87171 15.8333 5.07004 15.087 3.74165 13.7586C2.41327 12.4303 1.66699 10.6286 1.66699 8.74996C1.66699 6.87134 2.41327 5.06967 3.74165 3.74129C5.07004 2.4129 6.87171 1.66663 8.75033 1.66663C10.6289 1.66663 12.4306 2.4129 13.759 3.74129C15.0874 5.06967 15.8337 6.87134 15.8337 8.74996V8.74996Z" stroke="black" stroke-width="2" stroke-linecap="round"/>
</svg>

        </NavbarButton>
        
        </div>
  </nav>
</template>

<script>
import NavbarButton from './NavbarButton.vue'

export default {
  components: {
    NavbarButton,
  },
  props: ['secondary', 'show', 'name', 'white','route_to','search','shadow','help','show_name_back'],
};

</script>
