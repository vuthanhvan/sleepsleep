<!-- HOME BLOG -->
<script setup lang="ts">
const callToActions = [
  {
    img: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    action: 'Cửa hàng',
    to: '/adopt',
  },
  {
    img: 'https://images.unsplash.com/photo-1528747045269-390fe33c19f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    action: 'Về chúng tôi',
    to: '/aboutus',
  },
  {
    img: 'https://images.unsplash.com/photo-1564177611049-76e2933c6017?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    action: 'Cho trẻ nhỏ',
    to: '/story',
  },
]

</script>
<template>
  <section class="container mx-auto px-4 py-12">
    <div>
      <div class="mb-4 flex justify-center">
        <img decoding="async" src="https://sleeptightstories.org/wp-content/uploads/2021/09/rainbow-1024x408.png"
          alt="we love bedtime stories" width="150" class="aligncenter size-medium wp-image-491">
      </div>
      <h6 class="text-blue-600 dark:text-blue-200 text-center uppercase">
        Theo dõi chúng tôi
      </h6>
      <h3 class="capitalize mt-3 text-center mx-24">
        Giúp bạn có một giấc ngủ khỏe khoắn.
      </h3>
      <p class="mt-4 text-center">
        Đừng bỏ lỡ để thêm kiến thức về giấc ngủ cho mình và người thân nha.
      </p>
    </div>
    <div class="-mx-4 flex flex-wrap justify-center mt-12  ">
      <CallToActionCard v-for="(callToAction, index) in callToActions" :key="index" :action="callToAction.action"
        :img="callToAction.img" :to="callToAction.to" />
    </div>
  </section>
</template>
<style scoped></style>
