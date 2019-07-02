<template>
   <div class="wrapper text-white">
      <Header :bottom-heading="$t('courses.title')">
         <template slot="header-body">
            <div class="flex-center my-24">
               <span class="text-6xl font-light">{{$t('header.title')}}</span>
               <span class="text-6xl mb-10">
                  <span class="line-through text-red">$1,550</span> {{$t('header.price')}} $39,99
               </span>
               <span class="inline-block cursor-pointer">
                  <img src="@/assets/subscribe-btn.png">
               </span>
               <span class="text-2xl font-light">{{$t('header.save')}} $1,509.92</span>
            </div>
         </template>
         <template
         slot="bottom-details"
         >{{$t('courses.description')}}</template>
      </Header>
      <div class="bg-grey-dark flex flex-col">
         <Slider></Slider>
         <div class="flex-center mb-24">
            <button class="btn bg-lactic">
               {{$t('header.btn')}}
            </button>
         </div>
         <div class="divider mb-32"></div>
         <SectionTitle color="green" :title="$t('benefits.title')"></SectionTitle>
         <div class="relative flex items-center justify-center mb-40">
            <div class="divider absolute"></div>
            <div class="flex items-center z-20">
               <a href="#" class="w-20 lg:w-32 mr-5 lg:mr-20" @click.prevent="currentTab = 1" :class="{'lg:w-40':currentTab === 1}">
                  <img src="@/assets/benefits/1.svg">
               </a>
               <a href="#" class="w-24 lg:w-32 mr-5 lg:mr-20" @click.prevent="currentTab = 2" :class="{'lg:w-40':currentTab === 2}">
                  <img src="@/assets/benefits/2.svg">
               </a>
               <a href="#" class="w-20 lg:w-32 mr-5 lg:mr-20" @click.prevent="currentTab = 3" :class="{'lg:w-40':currentTab === 3}"> 
                  <img src="@/assets/benefits/3.svg">
               </a>
               <a href="#" class="w-20 lg:w-32 mr-5 lg:mr-20" @click.prevent="currentTab = 4" :class="{'lg:w-40':currentTab === 4}">
                  <img src="@/assets/benefits/4.svg">
               </a>
            </div>
         </div>
         <div class="container" v-for="tab in $t('benefits.tabs')" v-if="tab.key === currentTab">
            <Slick ref="slick" :options="options" @init="toggleRtl">
               <div v-for="i in 6" class="flex items-center justify-between flex-col xl:flex-row mb-10 px-10 xl:items-start">
                  <div class="flex flex-col order-1 xl:order-none xl:w-1/2">
                     <span class="text-2xl font-bold">{{tab.title}}</span>
                     <span class="subheading font-normal inline-block mt-5 leading-loose">{{tab.description}}</span>
                     <button class="btn bg-green py-2 mt-12 text-2xl font-bold xl:self-start">{{$t('benefits.button')}}</button>
                  </div>
                  <img src="https://placeimg.com/480/320/any" class="mb-20 xl:mb-0">
               </div>
            </Slick>
         </div>
         <div class="divider my-32"></div>
         <SectionTitle color="purple" :title="$t('simple.title')"></SectionTitle> 
         <div class="container mb-32">
            <div class="flex items-center justify-between flex-col xl:flex-row mb-10 px-10 xl:items-start">
               <div class="xl:w-1/2 mr-20 mb-20 xl:mb-0">
                  <Video></Video>
               </div>
               <div class="flex flex-col xl:w-1/2">
                  <span class="text-2xl font-bold">{{$t('simple.video.title')}}</span>
                  <span class="subheading font-normal inline-block mt-5 leading-loose">{{$t('simple.video.description')}}</span>
                  <button class="btn bg-purple py-2 mt-12 text-2xl font-bold xl:self-start">{{$t('simple.button')}}</button>
               </div>
            </div>
         </div>
         <div class="divider my-32"></div>
         <SectionTitle color="red-light" :title="$t('bubbles.title')"></SectionTitle>
         <div class="bg-cover-3 flex-center">
            <div class="flex justify-center flex-wrap">
               <div class="up-down-animation up-down-animation-2 ml-40 relative flex items-center justify-center">
                  <img src="@/assets/bubbles/green-light.svg" width="400">
                  <div class="absolute flex flex-col">
                     <span class="text-4xl font-bold">2.5M</span>
                     <span class="text-xl">{{$t('bubbles.list.1')}}</span>
                  </div>
               </div>
               <div class="up-down-animation up-down-animation-3 ml-32 relative flex items-center justify-center">
                  <img  src="@/assets/bubbles/blue.svg" width="400">
                  <div class="absolute flex flex-col">
                     <span class="text-4xl font-bold">200k</span>
                     <span class="text-xl">{{$t('bubbles.list.2')}}</span>
                  </div>
               </div>
               <div class="up-down-animation up-down-animation-1 ml-24 relative flex items-center justify-center">
                  <img src="@/assets/bubbles/green-dark.svg" width="360">
                  <div class="absolute flex flex-col">
                     <span class="text-2xl font-bold">5</span>
                     <span>{{$t('bubbles.list.3')}}</span>
                  </div>
               </div>
            </div>
            <div class="flex justify-center flex-wrap">
               <div class="up-down-animation up-down-animation-4 mr-24 relative flex items-center justify-center">
                  <img src="@/assets/bubbles/purple.svg" width="400">
                  <div class="absolute flex flex-col">
                     <span class="text-4xl font-bold">50k</span>
                     <span class="text-xl">{{$t('bubbles.list.4')}}</span>
                  </div>
               </div>
               <div class="up-down-animation up-down-animation-1 mr-32 relative flex items-center justify-center">
                  <img src="@/assets/bubbles/red.svg" width="400">
                  <div class="absolute flex flex-col">
                     <span class="text-4xl font-bold">10k</span>
                     <span class="text-xl">{{$t('bubbles.list.5')}}</span>
                  </div>
               </div>
               <div class="up-down-animation up-down-animation-5 mr-40 relative flex items-center justify-center">
                  <img src="@/assets/bubbles/orange.svg" width="400" >
                  <div class="absolute flex flex-col">
                     <span class="text-4xl font-bold">5</span>
                     <span class="text-xl">{{$t('bubbles.list.6')}}</span>
                  </div>
               </div>
            </div>
            <span class="inline-block cursor-pointer mt-32">
               <img src="@/assets/subscribe-btn.png">
            </span>
         </div>         
         <div class="divider my-32"></div>
         <SectionTitle title="Reviews" color="orange"></SectionTitle>
         <div class="container mt-16">
            <div class="flex flex-col lg:flex-row">
               <Review></Review>
               <Review></Review>
               <Review></Review>
            </div>
         </div>
         <div class="divider mt-32"></div>
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
   import Review from "@/components/Review";
   import Footer from "@/components/Footer";
   export default {
      components: {
         Header,
         Slider,
         Slick,
         SectionTitle,
         Video,
         Offer,
         Footer,
         Review
      },
      data: () => ({
         options: {
            dots: true,
            autoplay: true,
            infinity: true,
            arrows: false,
         },
         currentTab: 1
      }),
      updated(){
         this.$refs.slick.forEach( i => {
           i.reSlick() 
         })
      },
      methods: {
         toggleRtl(event , slick){
            this.$i18n.locale === 'ar' ? slick.options.rtl = true : slick.options.rtl = false
         }
      }
   };
</script>


<style scoped>
   .bg-cover-3 {
      background-image: url('../assets/bubbles/background.svg');
      background-position: center;
      background-repeat: no-repeat;
      background-size: auto;
   }
   @media (max-width: 1280px) {
      .bg-cover-3{
         background-size: cover;
      }
      
   }
</style>