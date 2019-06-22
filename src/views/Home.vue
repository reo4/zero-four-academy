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
         <div class="divider mb-32"></div>
         <SectionTitle color="green" title="Benefits"></SectionTitle>
         <div class="relative flex items-center justify-center mb-40">
            <div class="divider absolute"></div>
            <div class="flex items-center z-20">
               <a href="#" class="w-20 lg:w-32 mr-5 lg:mr-20">
                  <img src="@/assets/benefits/1.svg">
               </a>
               <a href="#" class="w-24 lg:w-40 mr-5 lg:mr-20">
                  <img src="@/assets/benefits/2.svg">
               </a>
               <a href="#" class="w-20 lg:w-32 mr-5 lg:mr-20">
                  <img src="@/assets/benefits/3.svg">
               </a>
               <a href="#" class="w-20 lg:w-32 mr-5 lg:mr-20">
                  <img src="@/assets/benefits/4.svg">
               </a>
            </div>
         </div>
         <div class="container">
            <Slick :options="options">
               <div v-for="i in 6" class="flex items-center justify-between flex-col xl:flex-row mb-10 px-10 xl:items-start">
                  <div class="flex flex-col order-1 xl:order-none xl:w-1/2">
                     <span class="text-2xl font-bold">Lorem ipsum is simply dummy text</span>
                     <span class="subheading font-normal inline-block mt-5 leading-loose">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt totam debitis labore vero tenetur quas rerum nam distinctio repellendus, itaque eligendi praesentium, similique quia molestiae optio, autem quaerat aut architecto voluptatum suscipit at esse! Ullam dolorum quae aliquam! Nihil, tempora.</span>
                     <button class="btn bg-green py-2 mt-12 text-2xl font-bold xl:self-start">Subscribe to unlimited courses</button>
                  </div>
                  <img src="https://placeimg.com/480/320/any" class="mb-20 xl:mb-0">
               </div>
            </Slick>
         </div>
         <div class="divider my-32"></div>
         <SectionTitle color="purple" title="Simple & Fun"></SectionTitle> 
         <div class="container mb-32">
            <div class="flex items-center justify-between flex-col xl:flex-row mb-10 px-10 xl:items-start">
               <div class="xl:w-1/2 mr-20">
                  <Video></Video>
               </div>
               <div class="flex flex-col xl:w-1/2">
                  <span class="text-2xl font-bold">Lorem ipsum is simply dummy text</span>
                  <span class="subheading font-normal inline-block mt-5 leading-loose">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt totam debitis labore vero tenetur quas rerum nam distinctio repellendus, itaque eligendi praesentium, similique quia molestiae optio, autem quaerat aut architecto voluptatum suscipit at esse! Ullam dolorum quae aliquam! Nihil, tempora.</span>
                  <button class="btn bg-purple py-2 mt-12 text-2xl font-bold xl:self-start">Subscribe to unlimited courses</button>
               </div>
            </div>
         </div>
         <Offer hidePrice></Offer>
         <Footer></Footer>
      </div>
   </div>
</template>

<script>
   import Slick from "vue-slick";
   import Header from "@/components/Header";
   import Slider from "@/components/Slider";
   import SectionTitle from "@/components/SectionTitle";
   import Video from "@/components/Video";
   import Offer from "@/components/Offer";
   import Footer from "@/components/Footer";
   export default {
      components: {
         Header,
         Slider,
         Slick,
         SectionTitle,
         Video,
         Offer,
         Footer
      },
      data: () => ({
         options: {
            dots: true,
            autoplay: true,
            infinity: true,
            arrows: false,
         }
      })
   };
</script>


