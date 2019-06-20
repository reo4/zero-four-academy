<template>
   <div class="wrapper text-white">
      <Header bottom-heading="our courses">
         <template slot="header-body">
            <div class="flex-center my-24">
               <span class="text-6xl font-light">one subscription for all courses</span>
               <span class="text-6xl mb-10">
                  <span class="line-through text-red">$1,550</span> only for $39,99
               </span>
               <span class="inline-block cursor-pointer">
                  <img src="@/assets/subscribe-btn.svg">
               </span>
               <span class="text-2xl font-light">you will save $1,509.92</span>
            </div>
         </template>
         <template
            slot="bottom-details"
         >Lorem ipsum is simply dummy text of the printing and typesetting industry</template>
      </Header>
      <div class="bg-grey-dark flex flex-col">
         <Slider></Slider>
         <div class="flex-center mb-24">
            <button class="btn bg-lactic">
               Subscribe Now
               <span class="ml-4">
                  <i class="fa fa-angle-right"></i>
               </span>
            </button>
         </div>
         <!-- <div class="divider mb-32"></div>
         <div class="flex-center mb-48">
            <div class="separator bg-green"></div>
            <span class="title">Benefits</span>
            <span
               class="subheading"
            >Lorem ipsum is simply dummy text of the printing and typesetting industry</span>
         </div>-->
         <!-- <div class="relative flex items-center justify-center mb-48">
            <div class="divider absolute"></div>
            <div class="flex items-center z-20">
               <a href="#" class="w-32 mr-10">
                  <img src="@/assets/benefits/1.svg">
               </a>
               <a href="#" class="w-40 mr-10">
                  <img src="@/assets/benefits/2.svg">
               </a>
               <a href="#" class="w-32 mr-10">
                  <img src="@/assets/benefits/3.svg">
               </a>
               <a href="#" class="w-32 mr-10">
                  <img src="@/assets/benefits/4.svg">
               </a>
            </div>
         </div>
         <div class="container">
            <div class="flex justify-between md:flex-wrap lg:flex-no-wrap">
               <div class="w-1/2 md:order-1 lg:order-none">
                  <span class="subtitle mt-80">Lorem ipsum is simply dummy text</span>
                  <span
                     class="subheading inline-block mt-5"
                  >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt totam debitis labore vero tenetur quas rerum nam distinctio repellendus, itaque eligendi praesentium, similique quia molestiae optio, autem quaerat aut architecto voluptatum suscipit at esse! Ullam dolorum quae aliquam! Nihil, tempora.</span>
                  <button class="btn bg-green mt-12">Subscribe to unlimited courses</button>
               </div>
               <img src="https://placeimg.com/480/320/any">
            </div>
         </div>-->
      </div>
   </div>
</template>

<script>
import Header from "@/components/Header";
import Slider from "@/components/Slider";
export default {
   components: {
      Header,
      Slider
   }
};
</script>


