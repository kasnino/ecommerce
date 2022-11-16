<template>
  <section class="comments">
    <header class="d-flex align-items-center">
      <div class="small text-black" style="
      font-size: 14px;
      font-weight: 700;
      line-height: 17px;
      letter-spacing: 0em;
      text-align: left;
      ">
        Todos los comentarios
      </div>
    <button class="btn  p-1" style="font-size:10px;font-weight: 400;background:#F1F1F1;color:#898989;border-radius:0px">
      <img :src="orden" width="12" height="12" alt="align left icon"> Ordenar por: <span style="color:#40BDB6;font-weight: 600;"> Relevancia</span> 
      </button>
    </header>
     

    <div class="row py-4 d-flex justify-content-center">
      <div class="col-8">
        <div class="row mx-0 px-0 d-flex align-items-center">
           <div class="col-4 px-0"> <img :src="anterior" alt="" style="height:18px;width: 73px;"> </div> 
          <div class="col-4" style="font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 15px;">
            página 2
          </div>
          <div class="col-4 px-0"> <img :src="siguiente" alt="" style="height:18px;width: 73px;"> </div>
          
        </div>
      </div>
    </div>



    <div v-if="comments.length">
      <template v-for="(comment, i) in comments">
        <div>
          <comment :commentData="getCommentData(comment)" :key="i" />
        </div>
        
      </template>
    </div>
    <hr>

    <div class="row ms-1 me-3 py-3" id="seccion_comentario">
          <div class="col-2 py-2 px-0">
                        <ImgHexa :img="img" size="45px"></ImgHexa>  
  
           </div>
          <div
            class="col-10 px-0  py-2 small d-flex justify-content-start"
            style="color: #000; font-weight: 700; text-align: justify"
          >
           
            <textarea name="" id="" v-model="text_new_comments" @focus="changeComments(true)" @blur="changeComments(false)" class="new_comments" placeholder="Añade un comentario..." rows="3"  style="border: 1px solid #ced4da;
    resize: none;
    background: transparent;
    width: 100%;
    padding: 10px;
    border-radius: 10px;"></textarea>
               <Transition mode="slide-up">
            <div class=""  v-if="!new_comments && text_new_comments==''"  style="position: absolute;right: 35px;margin-top: 10px;">
              <img :src="link3" class="mx-1" alt="">
              <img :src="play" class="mx-1" alt="">
              <img :src="image" class="mx-1" alt="">
              <img :src="gif" class="mx-1" alt="">
            </div>
               </Transition>
          </div> 
          <div class="col-2 py-2 px-0">
                       
  
           </div>
          <div
            class="col-10 px-0  py-2 small d-flex justify-content-start"
            style="color: #000; font-weight: 700; text-align: justify"
          >
          <Transition mode="slide-up">
            <div class="d-flex w-100" style="justify-content: space-between;" v-if="new_comments || text_new_comments!=''">
              <div class="add-comments" style="transition: .135s ease;">
                <img :src="link3" class="mx-1" alt="">
                <img :src="play" class="mx-1" alt="">
                <img :src="image" class="mx-1" alt="">
                <img :src="gif" class="mx-1" alt="">
              </div>
              <div>     
                <svg width="23" height="23" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path  :fill="(text_new_comments.length>=2)?'#72beff':'#a8a8a8'" d="M1.8949 1.38647L12.4299 6.42497C12.5364 6.47582 12.6263 6.55577 12.6892 6.65558C12.7522 6.75539 12.7856 6.87097 12.7856 6.98897C12.7856 7.10697 12.7522 7.22256 12.6892 7.32237C12.6263 7.42218 12.5364 7.50213 12.4299 7.55297L1.8949 12.5915C1.7869 12.6432 1.66632 12.6628 1.54749 12.648C1.42867 12.6331 1.3166 12.5845 1.22464 12.5078C1.13267 12.4311 1.06467 12.3296 1.02873 12.2154C0.992787 12.1012 0.990418 11.979 1.0219 11.8635L2.0759 7.99947C2.0888 7.95212 2.11536 7.90961 2.15226 7.87724C2.18916 7.84488 2.23477 7.82409 2.2834 7.81747L7.3884 7.12397C7.40974 7.12094 7.42993 7.11244 7.44702 7.0993C7.4641 7.08615 7.4775 7.06882 7.4859 7.04897L7.4949 7.01797C7.49885 6.99006 7.49324 6.96163 7.47899 6.9373C7.46474 6.91298 7.44268 6.89418 7.4164 6.88397L7.3889 6.87647L2.2889 6.18297C2.24036 6.17626 2.19486 6.15544 2.15805 6.12308C2.12125 6.09072 2.09477 6.04826 2.0819 6.00097L1.0219 2.11497C0.99029 1.9994 0.992563 1.87719 1.02845 1.76287C1.06434 1.64856 1.13232 1.54697 1.22432 1.47021C1.31631 1.39344 1.42843 1.34474 1.54732 1.32989C1.66621 1.31504 1.78686 1.33469 1.8949 1.38647Z"/>
                </svg>
        
              </div>  
            </div>
          </Transition>
        </div>
        </div>

<!-- 
.menubar nav {
    background-color: #000;
    transition: .35s ease;
    transform: translateY(100%);
} -->

 

 
    <div class="row mx-1 me-3 pt-3" >
          <div class="col-12 py-2" style="font-weight: 500;
font-size: 12px;
color: #8C8C8C;
line-height: 15px;">
           Tú estás en
          </div> 
        </div>
    <div class="row mx-1 d-flex justif-content-center bg-white rounded">
          <div class="col-12 py-2 d-flex     align-items-center" style="font-weight: 500;
font-size: 12px;
color: #000000;
line-height: 15px;"> 
  
           <img :src="home" alt="" style="width:16px:height:16px">
  <span class=" mx-1">Ropa unisex y básicos</span>
           <img :src="chevron_right_black" alt="" style="width:5px:height:9px">
  <span class=" mx-1">Hoddies</span>
           <img :src="chevron_right_black" alt="" style="width:5px:height:9px">
  <span class=" mx-1">Essencials</span>
          </div> 
        </div>
        
                  <!-- <div style="margin-top:150px" v-if="new_comments"></div> -->

 
  </section>
</template>

<script>
import Comment from "./Comment.vue";
import img from "../assets/shipper.png";
import orden from "../assets/orden.svg";
import button_comments from "../assets/button-comments.svg";
import siguiente from "../assets/siguiente.svg";
import home from "../assets/home.svg";
import chevron_right_black from "../assets/chevron-right-black.svg";
import anterior from "../assets/anterior.svg";
import PrimaryButton from "./PrimaryButton.vue";
import ImgHexa from '../components/ImgHexa.vue';

import link3 from "../assets/link3.svg";
import play from "../assets/play.svg";
import image from "../assets/image.svg";
import gif from "../assets/gif.svg";
import send_black from "../assets/send_black.svg";

export default {
  components: {
    Comment,
    PrimaryButton,
    ImgHexa
  },
  methods: {
    changeComments(status) {
      this.new_comments = status; 
      this.$emit('menuTyping', !status);
      if(status==true){
       var element = document.getElementById("seccion_comentario");
        var top = element.offsetTop;
        window.scrollTo(0, top);
      }
    },
    getCommentData(comment, subComment = false) {
      delete comment.comments;
      comment.subComment = subComment;
      return comment;
    },
  },
  props: ["amountOfComments", "comments", "img"],
  data() {
    return {
      new_comments : false,
      text_new_comments : '',
      img: img,
      button_comments: button_comments,
      chevron_right_black: chevron_right_black,
      orden: orden,
      home: home,
      siguiente: siguiente,
      anterior: anterior,
      link3:link3,
      play:play,
      image:image,
      gif:gif,
      send_black:send_black,
      comments: [
        {
          name: 'Leo',
          comment: 'comment',
          subHeader: "Chollazo",
          img,
          date: "2 dias",
          likeCounter: "1",
          subComments: [
            {
              name: 'Leo2',
              comment: 'Another comment',
              subHeader: "Chollazo",
              img,
              date: "2 dias",
              likeCounter: "1",
            }
          ]
        },
      ],
      img
    }
  }, 
}
</script>
<style>

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
.new_comments:focus{
border: 1px solid #ced4da !important;
outline:1px solid #e4e4e4;
}
</style>