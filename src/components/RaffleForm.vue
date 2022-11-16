<template>
  <form action="" class="raffles-form">
    <DropDown :date="true">
      ¿Qué dia es tu cumpleaños?
    </DropDown>
    <DropDown>
      ¿Qué talla de zapatillas usas?
    </DropDown>
    <DropDown>
      ¿Qué talla de camisetas usas?
    </DropDown>
    <DropDown>
      ¿QUé talla de pantalones usas?
    </DropDown>
    <DropDown :date="true">
      ¿Qué dia es tu cumpleaños?
    </DropDown>
    <button type="submit">
      Siguiente
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.3605 8L11.4805 9.88L17.5871 16L11.4805 22.12L13.3605 24L21.3605 16L13.3605 8Z" fill="white" />
      </svg>
    </button>
  </form>
</template>

<script>
import DropDown from '../components/DropDown.vue'
import CustomInput from '../components/CustomInput.vue'
export default {
  components: { DropDown, CustomInput }
}
</script>
