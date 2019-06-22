<template>
   <span class="flex items-center text-md" :class="[{'justify-center' : center}]">
      <span class="text-grey-light mr-2">50 hrs 10 mins</span>
      <span class="text-grey-light mr-2">5,850 views</span>
      <span class="text-grey-light mr-2">
         <i class="fa fa-star mr-1"></i>
         <i class="fa fa-star mr-1"></i>
         <i class="fa fa-star mr-1"></i>
         <i class="fa fa-star mr-1"></i>
         <i class="fa fa-star-o mr-1"></i>
      </span>
      <span class="text-grey-light mr-2">4.0 (84)</span>
   </span>
</template>

<script>
   export default {
      props: {
         center : Boolean
      }
   }
</script>