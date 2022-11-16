<template>
  <section class="raffles">
    <h1 class="raffles-title">¿Quieres participar en sorteos?</h1>
    <p class="raffles-info">Usaremos esta información para intentar enviarteofertas adecuadas a tus tallas, y si te toca
      algún
      sorteo
      mandarle la caja sorpresa con prendas de tu talla.</p>
    <p class="raffles-optional">Es opcional si no quieres <br> participar <a class="raffles-optional-link"
        href="#">saltar
        este paso</a></p>
    <RafleForm></RafleForm>
  </section>
</template>

<script>
import RafleForm from '../components/RaffleForm.vue'
export default {
  components: {
    RafleForm,
  }
}
</script>
