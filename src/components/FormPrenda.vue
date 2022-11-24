<template>
  <div class="form-group d-flex justify-content-center align-items-center">
    <label
      for=""
      style="
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
      "
      >{{ label_input }}</label
    >
    <div >
      <button
        type="button"
        style="justify-content: space-between; align-items: center"
        class="btn dropdown-toggle d-flex border border-warning"
        :class="border_btn ? 'btn-outline-secondary' : 'border ps-1 pe-1'"
        ref="aqui"
        data-bs-auto-close="outside"
         @click="SelectProductForm(index)"
      >
      <small>
   {{(size_selected==0) ? name_buttom : name_selected}} 
      </small>
    
      </button>

    </div>

 
  </div>

   
</template>

<script>
import ButtonToSocial from "./ButtonToSocial.vue";
import CustomInput from "./CustomInput.vue";
import PrimaryButton from "./PrimaryButton.vue";

import notification from "../assets/notification.svg";
export default {
  data() {
    return {
      notification: notification,
      size_selected: 0,
      name_selected: 0,
      visible: true,
    };
  },
  components: {
    ButtonToSocial,
    CustomInput,
    PrimaryButton,
  },
  
  methods: {
     SelectProductForm(id){
      this.$emit('selectProductForm', id);
    },
    marcar(data) {
      this.name_selected = data.nro;
      this.size_selected = data.id;
      this.$refs.aqui.click();
    }
  },
  
  mounted() {
    // console.log("🚀 ~ file: FormTalla.vue ~ line 207 ~ mounted ~ tallas", this.tallas)
  },

    props:  {
        tallas:{
        type:Array,
        default:false
       },
        label_input:{
        type:String,
        default:false
       },
         role:{
         type:String,
         default:false
       },
         name_buttom:{
         type:String,
         default:'Seleccionar Talla'
       },
        border_btn:{
         type:Boolean,
         default:true
       }
    }
}
</script>
