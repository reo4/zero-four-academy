<template>
   <div class="-mx-6">
      <ul class="flex flex-wrap children:w-1/3 xl:children:w-1/2 md:children:w-full">
         <li class="mb-12 px-4" v-for="i in 6" :key="i">
            <div class="header">
               <img src="@/assets/welcome-img.png" class="img mx-auto">
            </div>
            <div class="body p-4">
               <div class="heading text-white text-2xl mb-2">Lorem ipsum is simply dummy text</div>
               <CourseDetails class="mb-4"></CourseDetails>
               <p
                  class="subheading text-lg"
               >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
               <div class="mt-2 -ml-2 text-white">
                  <button class="p-2">
                     <span class="mr-4">show all</span>
                     <i class="fa fa-arrow-right"></i>
                  </button>
               </div>
            </div>
         </li>
      </ul>
   </div>
</template>

<script>
import CourseDetails from "@/components/CourseDetails";
export default {
   components: {
      CourseDetails
   }
};
</script>


<style scoped>
.body {
   background-color: #1d1d1d;
}
</style>
