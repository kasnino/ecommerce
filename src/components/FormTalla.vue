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
    <div class="dropdown">
      <button
        type="button"
        style="justify-content: space-between; align-items: center"
        class="btn dropdown-toggle d-flex "
        :class="border_btn ? 'btn-outline-secondary' : 'border ps-1 pe-1'"
        ref="aqui"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        data-bs-auto-close="outside"
      >
      <small>
   {{(size_selected==0) ? name_buttom : name_selected}} 
      </small>
    
      </button>
      <div class="dropdown-menu w-100" ref="dropdownMenu" v-if="visible">
        <div class="row">
          <div class="col">
            <ul class="nav nav-tabs w-100" id="myTab" role="tablist">
              <li
                class="nav-item w-100 d-flex justify-content-center"
                role="presentation"
                   v-for="(item, index) in tallas" :key="index"
              >
                <button
                  class="nav-link"
                  :class="{'active':index==0}"
                  :id="item.name+'-tab'"
                  :data-bs-target="'#'+item.name+'-tab-pane'"
                  :aria-controls="item.name+'-tab-pane'"
                  data-bs-toggle="tab"
                  type="button"
                  role="tab"
                  aria-selected="true"
                >
                  <small>{{item.name_form}} {{item.name}}</small>
                </button>
              </li>
                          </ul>

            <div class="tab-content" id="myTabContent">
              <div
                class="tab-pane fade ps-3 pe-3"
                :class="{' show active':index==0}"
                style="height: 200px; margin-top: 0.5rem; overflow: auto"
                :id="item.name+'-tab-pane'"
                role="tabpanel"
                :aria-labelledby="item.name+'-tab'"
                tabindex="0"
                 v-for="(item, index) in tallas" :key="index"
              >
                 <table class="table table-borderless table-hover">
                  <tbody>
                    <tr v-for="(size, index) in item.sizes" :key="index" @click="marcar(size)">
                      <td
                        scope="row"
                        width="20%"
                        style="text-align: center; vertical-align: middle"
                      >
                        <div class="gender p-0 m-0">
                          <ul class="gender-group p-0 m-0">
                            <li>
                              <input
                                type="radio"
                                name="gender"
                                id="female"
                                :value="size.id"
                                 v-model="size_selected"
                              />
                            </li>
                          </ul>
                        </div>
                      </td>
                      <td
                        width="40%"
                        style="text-align: left; vertical-align: middle"
                      >
                        {{size.nro}}
                      </td>
                    </tr>
                    <tr class="text-muted">
                      <td scope="row" width="20%">
                        <div class="gender p-0">
                          <ul class="gender-group p-0">
                            <li>
                              <input
                                type="radio"
                                name="gender"
                                id="female"
                                value="female"
                                disabled
                              />
                            </li>
                          </ul>
                        </div>
                      </td>
                      <td width="40%" class="tachado">36</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
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
