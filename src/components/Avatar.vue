<template>
   <div class="content_avatar">
<div class="hexagone">
     <img style="width:97px; height:97px;" src="../assets/profile/user-profile.png" alt="">
    </div> 
</div>

<svg style="visibility: hidden; position: absolute;" width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1">
  <defs>
        <filter id="round">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />    
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
            <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
        </filter>
    </defs>
</svg>




</template>

<script>
export default {

}
</script>




<style lang="scss" scoped>

div[class] {
 display: inline-block;
    width: 97px;
    color: blanchedalmond;
    margin: 20px;
    filter: url(#round);
    height: 97px;
    object-fit: contain;
    background-size: contain;
    position: absolute;
    left: -16px;
  
}

.hexagone img{
    width: 100%;
    height: 100%;
    position: absolute;
    top: -5px;
    left: 0px;
    right: 0;
    object-fit: cover;
    background-size: contain;
     clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
}
.hexagone::before {
    
   content:"";
   display:block;
   padding-top:86.6%;
   background:currentColor;
   position: relative;
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
}


.container_cupon--arra{
    width:100%;
    height: 100%;
    background:red;
}
polygon{
border-radius: 35px;
  padding: 20px; 
  width: 200px;
  height: 150px; 
   stroke-linejoin: round; 
}

.svg-graphic {
  stroke-linejoin: round;
  border-radius: 20px;
}

.foreign_class{
    width: 100%;
    height: 100%;
    background:red;
}

.hexa {
  position:relative;
  --s:200px;
  width: 200px;
  height:calc(0.866*var(--s));
}
.hexa {
  width: 97px;
  height: 97px;
  position: relative;
  display: inline-block;
  inset:0;
  color:aliceblue;
  filter: url('#goo');
    object-fit: cover;
    background-size: contain; 
}




.hexa img{
      object-fit: cover;
    background-size: contain; 
}

.hexa div { 
  content: "";
  position:absolute;
  inset:0;
 
  background:#000;
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
}



.content_avatar{
    position: absolute;
    bottom: -48px;
    left:5px;
     

}




</style>