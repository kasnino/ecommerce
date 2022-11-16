<template>
  <section class="registration">
    <TopRegistration />
    <div class="btn-group" role="group" aria-label="button group" @click="clickHandler">
      <button type="button" role="register" ref="register" data-toggle="true" class="toggle">Cliente nuevo</button>
      <span style="color:transparent">x</span>
      <button type="button" role="login" ref="login" class="toggle">Iniciar sesión</button>
    </div>
    <FormLogin :role="role" @changeRole="changeRole" />
  </section>
</template>

<script>
import TopRegistration from '../components/TopRegistration.vue';
import FormLogin from '../components/FormLogin.vue';

export default {
  components: {
    TopRegistration,
    FormLogin,
  },
  methods: {
    changeRole(data) {
      console.log(data);
      this.role = data;
      // this.$refs.login.$el.click();
      if(data=='register'){
        const elem = this.$refs.register
            elem.click()
        }else{          
        const elem = this.$refs.login
            elem.click()
        }
        

    },
    clickHandler(e) {
      if (e.target.className !== "toggle") return;
      const buttons = Array.from(e.currentTarget.children);
      for (const button of buttons) {
        button.dataset.toggle = false
      }
      e.target.dataset.toggle = true;
      this.role = e.target.getAttribute('role');
    }
  },
  data() {
    return {
      role: 'register'
    }
  },
}
</script>
