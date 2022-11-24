<template>
         <div class="w-100 p-0 m-0 d-flex border border-primary justify-content-around ">
               <BrandTiendaTag :brands="brands" />
                      <FormPrenda 
                      label_input="" 
                      name_buttom="Marca" 
                      :tallas="tallas"
                      :border_btn="false"
                      @SelectProductForm="SelectProductForm('hola')"
                      ></FormPrenda>
             
                      <FormPrenda 
                      label_input="" 
                      name_buttom="200 - 500 EUR" 
                      :tallas="precio"
                      :border_btn="false"
                      ></FormPrenda>
       
                      <FormPrenda
                      label_input="" 
                      name_buttom="Tienda" 
                      :tallas="tienda"
                      :border_btn="false"
                      ></Formprenda>
                
              </div>
  <div class="d-flex w-100 py-2 border border-primary flex-column">
        <span>Categorias</span>
   <button
        type="button"
        style=""
        class="btn w-auto "
        :class="border_btn ? 'btn-outline-secondary' : 'border ps-1 pe-1'"
        ref="aqui"
        data-bs-auto-close="outside"
       
      >
      <small>
   nuevo
      </small>
    
      </button>
    </div>
</template>

<script>
import BrandTiendaTag from '../components/BrandTienda/BrandTiendaTag.vue';
import FormPrenda from '../components/FormPrenda.vue';
export default {
components: {
        FormPrenda,
      BrandTiendaTag
},
data(){
return {
    ShowSelectiontienda: false,
          brands: [
        {
          name: 'Ver agotadas',
          amount: '',
          img: '',
          index: 0,
          checking: true
        },
      ],
}
},
methods: {
     SelectProductForm(data) {
           return this.ShowSelectiontienda = true
        
      },
}
}
</script>

<style>

</style>