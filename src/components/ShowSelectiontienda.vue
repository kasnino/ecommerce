<template>
    <div 
    class="d-flex w-100 py-2 flex-column justify-content-end align-content-end">
     <div class='wrapper mt-1 ps-1'>
          <span class="ms-2 ps-1"  > {{ShowSelection}}  </span>
        <div style="text-align:left; ">
			<span 
            v-for='(tag, key) in datos_select[idSelection].select' :key='key.id' 
                            :id='`boton_dia-${key}`'
                            @click="toggleDay(key)"
                            class="p-1 gap-1 rounded-3 "
                            style="
                            text-transform:initial;
                            opacity:1;
                            font-size:0.76rem;"
                        >

                       <button class="btn_show-select p-1  ps-2 pe-2 "
                       :class="[selectionItems[key] ? 'active_btn' : 'border']"
                       @click="itemsCount(key)"
                       >
                 
                      {{ datos_select[idSelection].select[key] }} </button>
                      </span>
                  </div>
                  </div>
           </div>
</template>

<script>
export default {
  props:  {
         datos_select:{
         type:Array,
         default:false
       },
         ShowSelection:{
         type:String,
         default:false
       },
       idSelection:{
          type:Number,
          default:false
       }
  },

  data(){
      return{
         selectionItems:[],
      }
  },

  methods: {
       toggleDay(index) {
       // toggle the active class
       this.selectionItems[index] = !this.selectionItems[index]
      
     },
     resetSelect(){

     },
     itemsCount(data){
       return 
      },
      
     removeTag(index) {
    //   this.selectionItems = this.services_select.slice(index)
    //   console.log(this.selectionItems)
    }
  }
}
</script>

<style lang="scss" scoped>
.active_btn{
      border: 1px solid #e8bf2e;
}

.btn_show-select{
  background: #FFF;
  border-radius: 3px;
  margin: 2px;
}
</style>