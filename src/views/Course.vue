<template>
   <div class="bg-grey-dark text-white">
      <Header
         badge-color="red"
         bottom-heading="Lorem Ipsum is simply dummy text"
         heading-size="small"
      >
         <template slot="bottom-details">
            <CourseDetails center></CourseDetails>
         </template>
      </Header>
      <div class="container mt-20">
         <div class="flex flex-col">
            <div class="mb-20">
               <p class="text-4xl mb-5">Description</p>
               <p
                  class="subheading"
               >Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, alias vel repellendus error enim illo repellat eum? Molestias libero sapiente ab ipsum voluptatem voluptatum rerum, laudantium suscipit atque repellat praesentium temporibus? Debitis eos aperiam atque enim fugiat, nam beatae aspernatur consequuntur voluptas accusantium assumenda sed quidem rem! Suscipit, cupiditate ratione.</p>
            </div>
            <div class="mb-5">
               <p class="text-4xl mb-10">Content</p>
               <ul>
                  <li v-for="(chapter , i) in chapters" class="mb-10" :key="i">
                     <a
                        href="#"
                        class="flex items-center bg-grey-normal text-grey-balanced px-8 py-4 xl:pr-24"
                        :class="chapter.opened ? 'text-2xl' : ['text-lg' , 'text-grey-800']"
                        @click.prevent="open(chapter)"
                     >
                        <i class="fa mr-5 text-lg" :class="chapter.opened ? 'fa-minus': 'fa-plus' "></i>
                        <span class="mr-auto text-lg xl:text-xl">{{chapter.title}}</span>
                        <i class="fa fa-circle text-2xs"></i>
                        <span class="ml-3 text-base xl:text-lg">{{chapter.period}}</span>
                     </a>
                     <ul v-if="chapter.opened">
                        <li v-for="i in 6" :key="i" :class="{'mt-5' : i === 1}">
                           <a
                              href="#"
                              class="flex items-center text-grey-600 p-8 pl-16 xl:pr-24 py-4 border-b border-grey-500"
                           >
                              <i class="fa fa-play-circle fa-lg mr-3"></i>
                              <span
                                 class="mr-auto text-base xl:text-lg"
                              >introduce of leadership and responsabilities</span>
                              <i class="fa fa-circle text-2xs"></i>
                              <span class="ml-3 text-base xl:text-lg">10mins</span>
                           </a>
                        </li>
                     </ul>
                  </li>
               </ul>
            </div>
         </div>
         <div class="divider w-full mt-32"></div>
         <Offer></Offer>
      </div>
      <Footer></Footer>
   </div>
</template>



<script>
import Header from "@/components/Header";
import CourseDetails from "@/components/CourseDetails";
import Offer from "@/components/Offer";
import Footer from "@/components/Footer";
export default {
   components: {
      Header,
      CourseDetails,
      Offer,
      Footer
   },
   data: () => ({
      chapters: [
         {
            title: "Section 1 - leadership and responsabilities",
            period: "2hrs 10mins",
            opened: true
         },
         {
            title: "Section 1 - leadership and responsabilities",
            period: "2hrs 10mins",
            opened: false
         },
         {
            title: "Section 1 - leadership and responsabilities",
            period: "2hrs 10mins",
            opened: false
         },
         {
            title: "Section 1 - leadership and responsabilities",
            period: "2hrs 10mins",
            opened: false
         },
         {
            title: "Section 1 - leadership and responsabilities",
            period: "2hrs 10mins",
            opened: false
         },
         {
            title: "Section 1 - leadership and responsabilities",
            period: "2hrs 10mins",
            opened: false
         }
      ]
   }),
   methods: {
      open(chapter) {
         this.chapters.forEach(i => (i.opened = false));
         chapter.opened = true;
      }
   }
};
</script>
