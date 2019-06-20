<template>
   <div class="bg-cover-1 text-white">
      <div class="container pt-10 mb-56">
         <div class="flex justify-between items-center mb-20">
            <img class="w-32" src="@/assets/logo.png">
            <div>
               <a href="#" class="pr-2 mr-2 border-r-2 border-white">
                  <span>العربية</span>
               </a>
               <a href="#">
                  <span>English</span>
               </a>
            </div>
         </div>
         <slot name="header-body"></slot>
      </div>
      <div class="header__bottom flex-center pb-20">
         <span class="separator mb-3" :class="'bg-'+badgeColor"></span>
         <span :class="'bottom_heading-' + headingSize">{{bottomHeading}}</span>
         <span class="subheading mt-6">
            <slot name="bottom-details"></slot>
         </span>
      </div>
   </div>
</template>
<script>
export default {
   props: {
      badgeColor: {
         default: "lactic"
      },
      bottomHeading: {
         type: String
      },
      headingSize: {
         default: "large"
      }
   }
};
</script>


<style>
.bg-cover-1 {
   background-image: radial-gradient(
         rgba(12, 12, 12, 0.65),
         rgba(0, 0, 0, 0.98)
      ),
      url(../assets/welcome-img.png);
}
.header__bottom {
   background: linear-gradient(#00000000, #151516);
}
.bottom_heading-large {
   @apply text-6xl;
}
.bottom_heading-small {
   @apply text-5xl;
}
</style>
