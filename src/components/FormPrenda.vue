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
    <div v-for="(select, tallaindex) in tallas" :key="tallaindex.id">
      <button
      v-for="(selecto, selectindex) in select" :key="selectindex.id"
        type="button"
        style="justify-content: space-between; align-items: center; font-size:0.79rem;" 
        class="p-0  d-flex d-flex btn_fromprenda "
        :class="[(( (isShow) && (active == index_prop)) ? 'active_btn' : 'border-btn'),
        ((expandir) ? 'dropdown-toggle' : '' )
        ]"
        ref="aqui"
        :aria-expanded="expandir"
        @click="SelectProductForm(selecto.name_form, index_prop), 
                toggleSelect(index_prop),
                (isShow = !isShow)"
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

    components: {
    ButtonToSocial,
    CustomInput,
    PrimaryButton,
  },


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

  
  methods: {
     SelectProductForm(name_btn, indice){
      this.$emit('selectProductForm', name_btn, indice);
    },
    marcar(data) {
      this.name_selected = data.nro;
      this.size_selected = data.id;
      this.$refs.aqui.click();
    },
     toggleSelect(dato) {
           this.active = dato
           
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
        index_prop:{
         type:Number,
         default:0
       },
        expandir:{
         type:Boolean,
         default:true
       }
    }
}
</script>
<style lang="scss" scoped>
.active_btn{
  border: 1px solid #e8bf2e7a;
  background:#FFFFFF; 
}
.border-btn{
   border: 1px solid #ebebeb;
    background:#FFFFFF;
    color:#6f7072;
}
.btn_products{
    background:#FFF;
}

.btn_fromprenda{
  border-radius: 2px;
  padding-top: 4px !important;
  padding-bottom: 4px !important;
  padding-left: 4px !important;
  padding-right: 4px !important;
  
}
</style>
