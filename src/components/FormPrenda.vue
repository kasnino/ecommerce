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
        style="justify-content: space-between; align-items: center; font-size:0.79rem;" 
        class="rounded-2  btn_products  d-flex "
        :class="[((border_btn)? '' : ' p-1'),
        ( (active_on && (active == index)) ? 'active_btn p-0' : 'border')
        ]"
        ref="aqui"
        data-bs-auto-close="outside"
      
        @click="SelectProductForm(name_buttom),myFilter(index)"
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
      active_on:false,
      active:-1  
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
    },
     myFilter(i){
       if(!this.active_on){
        this.active_on = !this.active_on 
        this.active = i
       }
           
                
                
            
                        
       
       
        
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
         name_buttom:{
         type:String,
         default:'Seleccionar Talla'
       },
        border_btn:{
         type:Boolean,
         default:true
       },
        index:{
         type:String,
         default:0
       }
    }
}
</script>
<style lang="scss" scoped>
.active_btn{
      border: 2px solid #e8bf2e7a;
}

.btn_products{
    background:#FFF;
}
</style>
