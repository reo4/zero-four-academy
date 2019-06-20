<template>
   <div class="flex-center border-t border-grey-balanced py-24 children:mb-10 text-white">
      <div class="separator bg-green-offer"></div>
      <p class="text-6xl">Get the Offer</p>
      <p
         class="text-2xl font-light text-grey-light"
      >Lorem ipsum is simply dummy text of the printing and typesetting industry</p>
      <p class="text-6xl mb-10" v-if="showPrice">
         <span class="line-through text-red">$1,550</span> only for $39,99
      </p>
      <a href="#">
         <img src="@/assets/btns/offer-btn.svg">
      </a>
      <p class="text-2xl font-light text-grey-700">you will save $1,509.92</p>
   </div>
</template>

<script>
export default {
   props: {
      showPrice: {
         default: true
      }
   }
};
</script>
