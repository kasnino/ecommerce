<template>
<svg  viewBox="0 0 192 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="-0.5" width="191" height="31" transform="matrix(1 0 0 -1 0 31)" fill="#F3F3F3" stroke="black" stroke-dasharray="2 2"/>

  <foreignObject class="foreign_class" x="0" y="0" width="160" height="160">


  <div class="container_cupon--barra">
          <img :src="cuponcut" alt="" style="width: 14px;height: 14px;">
          <small class="cupon_footer" style="">
            EXTRADSCTO5
          </small>
          <img :src="cupongo" alt="" style="width: 14px;height: 14px;">
      </div>
  </foreignObject>
</svg>

</template>

<script>

import cuponcut from '../../assets/cupon_cut.svg';
import cupongo from '../../assets/cupon_go.svg';
import cupon2 from '../../assets/cupon2.svg';

export default {
  props: ['color_bg','color_text'],
  components: {
   },
  data() {
    return {
      cuponcut : cuponcut,
      cupongo : cupongo,
      cupon2 : cupon2,
    }
  },
}
</script>

<style lang="scss" scoped>


.foreign_class{
  width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container_cupon--barra{
  width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    align-content: center;
    height: 19%;
}

.conten_cupon{
height:35px;
border-radius: 0px;
background-size: 100%;
border: 1px dashed #000000;
background-repeat: no-repeat;
justify-content: space-around;
align-items: center;
background: #f3f3f3;
}

.cupon_footer{
  font-weight: 800;
  font-size:11px;
  color: #232323;
}
</style>