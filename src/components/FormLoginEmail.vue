<template>
  <div class="custom-form px-4">
  
    <h1>Regístrate con tu correo electrónico</h1>
    <form class="form">
      <CustomInput type="email" name="email" placeholder="Dirección de correo electrónico" />
      <CustomInput v-if="role === 'register'" type="text" name="nombre" placeholder="Alias" />
      <CustomInput type="password" name="password"
        :placeholder="(role === 'register') ? 'Contraceña (minimo 6 caracteres)' : 'Contraceña'" />
      <div v-if="role === 'register'" class="gender p-0">
        <p>
          ¿Cómo te gustaría que nos dirijamos a ti?
        </p>
        <ul class="gender-group p-0">
          <li>
            <input type="radio" name="gender" id="female"  :class="{'uncheck':genero!='female','check':genero=='female'}" value="female" v-model="genero">
            <label for="female" :class="{'text-dark':genero=='female'}">Mujer</label>
          </li>
          <li>
            <input type="radio" name="gender" id="male" :class="{'uncheck':genero!='male','check':genero=='male'}" value="male" v-model="genero">
            <label for="male" :class="{'text-dark':genero=='male'}">Hombre</label>
          </li>
          <li>
            <input type="radio" name="gender" id="nonBinary" :class="{'uncheck':genero!='nonBinary','check':genero=='nonBinary'}" value="nonBinary" v-model="genero">
            <label for="nonBinary" :class="{'text-dark':genero=='nonBinary'}">No binario</label>
          </li>
        </ul>
      </div>
      
       <!-- <PrimaryButton type="button" style="font-size: 14px;
    padding: 0px 6px;
    width: 100%;
    height: 50px;
    left: 166px;
    top: 664px;font-weight: 700;
    background: #000000;
    border-radius: 8px;
    color: #fff;
    border: none;
    margin: 0px;">
        {{role === 'register' ? 'Registrarse ahora' : 'Iniciar secion' }}
      </PrimaryButton>

  -->
    </form>
  </div>
  <!-- <div style="margin-top:500px"></div> -->
</template>

<script>
import ButtonToSocial from './ButtonToSocial.vue';
import CustomInput from './CustomInput.vue';
import PrimaryButton from './PrimaryButton.vue';

export default {
  components: {
    ButtonToSocial,
    CustomInput,
    PrimaryButton,
  },
  props: ['role'],
  data() {
    return {
      genero : ''
    }
  },
}
</script>
