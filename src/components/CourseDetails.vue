<template>
   <span class="flex items-center text-md children:text-grey-light children:mr-2" :class="[{'justify-center' : center}]">
      <span>50 hrs 10 mins</span>
      <span>5,850 views</span>
      <span class="children:mr-1">
         <i class="fa fa-star"></i>
         <i class="fa fa-star"></i>
         <i class="fa fa-star"></i>
         <i class="fa fa-star"></i>
         <i class="fa fa-star-o"></i>
      </span>
      <span>4.0 (84)</span>
   </span>
</template>

<script>
   export default {
      props: {
         center : Boolean
      }
   }
</script>