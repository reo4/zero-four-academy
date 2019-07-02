<template>
   <div class="container">
      <div class="flex-center py-24 text-white">
         <div class="separator bg-green-offer mb-8" v-if="!hideTitle"></div>
         <p class="text-6xl mb-8" v-if="!hideTitle">Get the Offer</p>
         <p class="text-2xl font-light text-grey-light mb-16" v-if="!hideTitle">Lorem ipsum is simply dummy text of the printing and typesetting industry</p>
         <p class="text-6xl mb-10" v-if="!hidePrice">
            <span class="line-through text-red">$1,550</span> only for $39,99<span class="text-lg">/ month</span>
         </p>
         <div class="relative flex items-center justify-center w-full mb-8">
            <div class="divider absolute w-full" v-if="addLine"></div>
            <a href="#" class="z-20">
               <img src="@/assets/btns/offer-btn.svg">
            </a>
         </div>
         <p class="text-2xl font-light text-grey-700">you will save $1,509.92</p>
      </div>
   </div>
</template>

<script>
export default {
   props: {
      hidePrice: Boolean,
      hideTitle: Boolean,
      addLine: Boolean
   }
};
</script>
