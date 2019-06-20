<template>
   <div id="description">
      <Header badge-color="red" bottom-heading="subscribe, What you will get" heading-size="small">
         <template
            slot="bottom-details"
         >Lorem ipsum is simply dummy text of the printing and typesetting industry</template>
      </Header>
      <div class="plans-wrapper flex bg-grey-dark px-4 py-10">
         <Plan v-for="(plan , i) in plans" v-bind="plan" :key="i"></Plan>
      </div>
      <Footer></Footer>
   </div>
</template>

<script>
import Header from "@/components/Header";
import Plan from "@/components/Plan";
import conditions from "@/helpers/conditions";
import Footer from "@/components/Footer";
export default {
   components: {
      Header,
      Plan,
      Footer
   },
   data: () => ({
      plans: [
         {
            icon: "individual.png",
            title: "Individual",
            description: "Lorem ipsum dolor sit.",
            conditions,
            price: "39.99",
            saveAmount: "1,509.92"
         },
         {
            icon: "enterprise.png",
            title: "Enterprise",
            description: "Lorem ipsum dolor sit amet.",
            conditions
         }
      ]
   })
};
</script>

<style lang="scss" scoped>
.plans-wrapper {
   display: flex;
   justify-content: center;
   @media (max-width: 1280px) {
      flex-direction: column;
      align-items: center;
      .plan {
         max-width: 720px;
      }
   }
}
</style>
