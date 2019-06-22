<template>
   <div id="courses">
      <Header bottom-heading="our courses">
         <template
            slot="bottom-details"
         >Lorem ipsum is simply dummy text of the printing and typesetting industry</template>
      </Header>
      <div class="bg-grey-dark px-6 xl:p-20">
         <Cards></Cards>
         <Offer hide-title add-line></Offer>
         <Cards></Cards>
         <Offer></Offer>
      </div>
      <Footer/>
   </div>
</template>
<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer.vue";
import Cards from "@/components/Cards.vue";
import Offer from "@/components/Offer";
export default {
   components: {
      Header,
      Footer,
      Cards,
      Offer
   }
};
</script>
