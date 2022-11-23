<template>
    <li class=" d-flex w-100 "
  
    :class="{'align-items-end justify-content-center':(index%2==0),'justify-content-center':(index%2!=0)}" 
          style="">
        <div class="d-flex align-items-center "
        :class="{'justify-content-center  ':(index%2==0),'justify-content-center':(index%2!=0)}">
     
          <img v-if="image != ''" :src="image" alt="tag" style="width:15px">
            <span style="" 
              :class="{'text_brand--left fw-bold ':(index%2==0),'':(index%2!=0)}" 
              class="d-flex m-1 fs-6 ">      
            {{ amount }} {{ name }}
          </span>
    
        <div v-if="checking" class="mt-1 form-check form-switch" >
          <input class="form-check-input" type="checkbox" id="flexSwitchCheckCheckedDisabled" checked >
          <label class="form-check-label"   for="flexSwitchCheckCheckedDisabled"></label>
        </div>     
</div>


  </li>
  <div class="vr"></div>
</template>

<script>
export default {
  props: ['amount', 'name', 'image', 'checking', 'index'],
  data(){
    return{
    
    }
  }
}

</script>
<style lang="scss" scoped>

.form-check-input:checked {
    background-color: #26ecc5 !important;
    border-color: #0d6efd !important;
}

.text_brand--left{
      font-size: 0.8rem !important;
}
</style>