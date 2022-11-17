import { createRouter, createWebHistory } from 'vue-router'

import Product from '../views/Product.vue';
import ProductCoupons from '../views/ProductCoupons.vue';
import RegistrationStepOne from '../views/RegistrationStepOne.vue';
import RegistrationStepTwo from '../views/RegistrationStepTwo.vue';
import RegistrationStepThree from '../views/RegistrationStepThree.vue';
import RegistrationStepFour from '../views/RegistrationStepFour.vue';
import RegistrationStepFive from '../views/RegistrationStepFive.vue';
import RegistrationStepSix from '../views/RegistrationStepSix.vue';
import Categories from '../views/Categories.vue';





import Raffles from '../views/Raffles.vue';
import Naming from '../views/Naming.vue';
import Brand from '../views/Brand.vue';
import TopProducts from '../views/TopProducts.vue';
import ProductOld from '../views/Product_info.vue';
import Profile from '../views/Profile.vue';



import Home from '../views/Home.vue';
import Offer from '../views/Offer.vue';
import Offers from '../views/Offers.vue';
import OfferConfirmation from '../views/OfferConfirmation.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/offers",
      name: "offers",
      component: Offers
    },
    {
      path: "/offer",
      name: "offer",
      component: Offer
    },
    {
      path: "/offer-confirmation",
      name: "offer-confirmation",
      component: OfferConfirmation
    },
    {
      path: "/registration-step-one",
      name: "registration-step-one",
      component: RegistrationStepOne
    },
    {
      path: "/registration-step-two",
      name: "registration-step-two",
      component: RegistrationStepTwo
    },
    {
      path: "/registration-step-three",
      name: "registration-step-three",
      component: RegistrationStepThree
    },
    {
      path: "/registration-step-four",
      name: "registration-step-four",
      component: RegistrationStepFour
    },
    {
      path: "/registration-step-five",
      name: "registration-step-five",
      component: RegistrationStepFive
    },
    {
      path: "/registration-step-six",
      name: "registration-step-six",
      component: RegistrationStepSix
    },
    {
      path: "/products/:id",
      name: "product",
      component: Product,
      props:true,
    },
    {
      path: "/products_cupons/:id",
      name: "product_coupons",
      component: ProductCoupons,
      props:true,
    },
    {
      path: "/categories",
      name: "categories",
      component: Categories
    },






    {
      path: "/products_old/:id",
      name: "products_old",
      component: ProductOld,
      props:true,
    },

    {
      path: "/raffles",
      name: "raffles",
      component: Raffles
    },
    {
      path: "/naming",
      name: "naming",
      component: Naming
    },
    {
      path: "/brands",
      name: "brand",
      component: Brand
    },
    {
      path: "/top-products",
      name: "top products",
      component: TopProducts
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile
    },
  ]
});

export default router;
