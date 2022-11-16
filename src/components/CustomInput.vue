<template>
  <div class="custom-input">
    <label :class="{focused: isFocused || value}" :for="name">{{placeholder}}</label>
    <input :type="type" :name="name" :id="name" :value="value" @focusin="() => this.isFocused = true"
      @focusout="() => this.isFocused = false" @change="inputHandler" placeholder=" ">
    <button v-if="value || isFocused" class="close-button" type="button" @click="() => this.value = ''">
      <img :src="close" alt="">
    </button>
  </div>
</template>

<script>
import close from '../assets/close.svg';

export default {
  props: ['name', 'placeholder', 'type'],
  data() {
    return {
      isFocused: false,
      value: '',
      close: close,

    }
  },
  methods: {
    inputHandler(e) {
      const input = e.currentTarget.value;
      this.$emit('update', input);
      this.value = input;
    }
  },
}
</script>
