<template>
   <div class="plan">
      <div class="head">
         <img class="icon" :src="require(`@/assets/plans/${icon}`)">
         <div class="content">
            <p class="title">{{title}}</p>
            <p class="description text-grey-light">{{description}}</p>
         </div>
      </div>
      <div class="body">
         <ul>
            <li v-for="(condition , i) in conditions" :key="i">
               <span>{{condition}}</span>
            </li>
         </ul>
      </div>
      <div class="action" v-if="price">
         <button class="btn btn-danger">{{$t('header.btn')}}</button>
         <span class="price-per-period">
            <span class="price">${{price}}</span>
            <span class="period">/{{$t('plans.per')}}</span>
         </span>
         <p class="tip text-grey-light">{{$t('header.save')}} {{saveAmount}}</p>
      </div>
      <div v-else class="p-12 pt-0 text-2xl text-white">
         <a href="#">{{$t('plans.contact')}}</a>
         <i class="fa fa-angle-right ml-2 align-middle"></i>
      </div>
   </div>
</template>

<script>
export default {
   props: ["icon", "title", "description", "conditions", "price", "saveAmount"]
};
</script>


<style scoped lang="scss">
.icon {
   max-height: 72px;
}
.plan {
   margin: 15px 20px;
   max-width: 550px;
   background-color: $grey;
   .head {
      display: flex;
      align-items: flex-end;
      padding: 2rem;
      border-bottom: 2px solid lighten(#292929, 10%);
      .content {
         margin-left: 1.5rem;
         .title {
            @extend .typo-2;
         }
         .description {
            @extend .typo-1-light;
         }
      }
   }
   .body {
      padding: 2rem;
      ul {
         padding-left: 20px;
         list-style-image: url("../assets/plans/dot.png");
         li {
            margin-bottom: 2rem;
            span {
               @extend .typo-1;
            }
         }
      }
   }
   .action {
      padding: 2rem;
      padding-top: 0;
      .btn {
         margin-right: 1rem;
      }
      .price-per-period {
         color: white;
         .price {
            font-size: 1rem;
            font-weight: bold;
         }
      }
      .tip {
         margin-top: 1rem;
      }
   }
}
</style>
