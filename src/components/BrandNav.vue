<template>
  <nav class="brand-nav">
   <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
      <li class="nav-item" role="presentation" 
        v-for="(brand, i) in brands" :key="i" @click="changeView(i)">
        <button class="nav-link brand-nav-item w-100" 
        :class="{'active':i === active}" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">{{brand.text}}     <span v-if="brand.amount">({{ brand.amount }})</span> </button>
      </li>
        <!-- 
          <BrandNavItem v-for="(brand, i) in brands" :text="brand.text" :amount="brand.amount" :key="i"
          :active="i === active" /> 
        -->
    </ul>
  </nav>
</template>

<script>
import BrandNavItem from './BrandNavItem.vue'
export default {
  props: ['brands'],
  components: {
    BrandNavItem,
  },
  methods: {
    changeView(id){
      this.$emit('changeView', id);
    }
  },
  data() {
    return {
    
      active: 0,
    }
  },
}
</script>
