<template>
  <ul style="
    display: flex;
    padding: 0;
">
    <BrandTag v-for="brand in brands" :amount="brand.amount" :name="brand.name" :image="brand.img"></BrandTag>
  </ul>
</template>

<script>
import BrandTag from './BrandTag.vue'
export default {
  props: ['brands'],
  components: {
    BrandTag,
  }
}
</script>
