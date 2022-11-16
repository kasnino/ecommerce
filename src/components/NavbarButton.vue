<template>
  <button :class="{
    'navbar-button': true,
    white: white,
    shadow: shadow,
  }">
    <slot />
  </button>
</template>

<script>
export default {
  props: ['white', 'shadow', 'rating'],
}
</script>
