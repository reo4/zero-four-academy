<template>
   <div class="container mt-20">
      <a href="#" class="block mx-auto text-right mb-8 mr-10">
         <span class="text-lg">show all</span>
      </a>
      <Slick ref="slick" :options="options">
         <a
            href="#"
            v-for="(slide , i) in slides"
            class="flex flex-col p-8 w-full lg:w-144 lg:mx-10"
            :class="[slide.cover]"
            :key="i"
         >
            <span class="text-2xl mt-80">Lorem ipsum is simply dummy text</span>
            <CourseDetails></CourseDetails>
         </a>
      </Slick>
      <div class="flex justify-center my-24">
         <div class="flex">
            <a href="#" class="text-grey-light mr-12" @click.prevent="next">
               <i class="fa fa-chevron-left fa-2x"></i>
            </a>
            <a href="#" class="text-grey-light" @click.prevent="prev">
               <i class="fa fa-chevron-right fa-2x"></i>
            </a>
         </div>
      </div>
   </div>
</template>



<script>
import CourseDetails from "@/components/CourseDetails";
import Slick from "vue-slick";
export default {
   components: {
      CourseDetails,
      Slick
   },
   data: () => ({
      slides: [
         { cover: "bg-cover-2" },
         { cover: "bg-cover-3" },
         { cover: "bg-cover-3" },
         { cover: "bg-cover-3" },
         { cover: "bg-cover-3" },
         { cover: "bg-cover-3" }
      ],
      options: {
         arrows: false,
         infinite: true,
         slidesToShow: 3,
         autoplay: false,
         slidesToScroll: 1,
         variableWidth: true,
         centerMode: true,
         responsive: [
            {
               breakpoint: 1024,
               settings: {
                  centerMode:false,
                  variableWidth: false,
                  slidesToScroll: 1,
                  slidesToShow: 1
               }
            }
         ]
      }
   }),
   methods: {
      next() {
         this.$refs.slick.next();
      },
      prev() {
         this.$refs.slick.prev();
      }
   }
};
</script>


<style lang="scss" scoped>
.bg-cover-2 {
   background: linear-gradient(
         to top,
         rgba(21, 21, 22, 0.95) 10%,
         rgba(0, 0, 0, 0) 100%
      ),
      url("../assets/books.jpg") center top;
}
.bg-cover-3 {
   background: linear-gradient(
         to top,
         rgba(21, 21, 22, 0.95) 10%,
         rgba(0, 0, 0, 0) 100%
      ),
      url("../assets/image2.jpeg") center top;
}
</style>
