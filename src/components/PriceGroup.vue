<template>
  <div class="price-group">
    <div class="price-iva">
      <span class="price-iva-price">{{ discount }} €</span>
      <span class="iva">IVA incluido</span>
    </div>
    <div class="discount d-flex">
      <div class="price-discount  d-flex">{{ priceSet }} € -{{ discountPorcent }}%
      <div class="historical ms-1" style="font-size: 8px !important;">Mínimo histórico</div></div>
    </div>
  </div>
</template>


<script>
export default {
  props: ["price", "discountPorcent"],
  computed: {
    priceSet() {
      const noTruncarDecimales = {maximumFractionDigits: 20};
      var numero = this.price;
      return numero.toLocaleString('es', noTruncarDecimales);
    }, 
    discount() {      
      const noTruncarDecimales = {maximumFractionDigits: 20};      
      var numero = this.price - (this.price * (this.discountPorcent / 100));
      return numero.toLocaleString('es', noTruncarDecimales);
    }

  },
}
</script>
