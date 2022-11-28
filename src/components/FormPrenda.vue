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
    <div v-for="(select, z) in tallas" :key="z.id">
      <button
      v-for="(selecto, k) in select" :key="k.id"
      
        type="button"
        style="justify-content: space-between; align-items: center; font-size:0.79rem;" 
        class="rounded-2  dropdown-toggle d-flex d-flex "
        :class="[((border_btn)? '' : ' p-1'),
        (( (isShow) && (active === k)) ? 'active_btn' : 'border-btn'),
        ]"
        ref="aqui"
        aria-expanded="true"
        @click="SelectProductForm(selecto.name_form, index),toggleSelect(k),(isShow = !isShow)"
      >
      <small>
          {{ selecto.name_form}} 
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
      active_on:false,
      active:0,
      selectionItems:[],  
      contadorOn:0,
      isShow:false
    };
  },
  components: {
    ButtonToSocial,
    CustomInput,
    PrimaryButton,
  },
  
  methods: {
     SelectProductForm(name_btn, indice){
      this.$emit('selectProductForm', name_btn, indice);
    },
    marcar(data) {
      this.name_selected = data.nro;
      this.size_selected = data.id;
      this.$refs.aqui.click();
    },
     toggleSelect(index) {
       // toggle the active class
         if(this.isShow)
        {   
          return this.active = index
        }
      
     },
  },
  
  mounted() {
    // console.log("🚀 ~ file: FormTalla.vue ~ line 207 ~ mounted ~ tallas", this.tallas)
  },

    props:  {
        tallas:{
        type:Object,
        default:false
       },
        label_input:{
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
       },
        index:{
         type:Number,
         default:0
       }
    }
}
</script>
<style lang="scss" scoped>
.active_btn{
  border: 2px solid #e8bf2e7a;
}
.border-btn{
   border: 2px solid #dedede;
}

.btn_products{
    background:#FFF;
}
</style>
