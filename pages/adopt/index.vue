<!-- CỬA HÀNG -->
<script setup>
  definePageMeta({
    // layout: 'default',
    // name: 'blog',
    // alias: 'blog',
    title: 'Cửa hàng',
    description: 'Cửa hàng của chúng tôi!',
    navOrder: 2,
    type: 'primary',
    icon: 'i-mdi-home',
    // ogImage: 'images/ogImage.png', // url or local images inside public folder, for eg, ~/public/images/ogImage.png
  })
</script>
<template>
  <div
    class="py-12 text-blue-900 dark:text-blue-100  bg-blue-100 dark:bg-blue-300"
  >
    <div class="flex flex-col items-center">
      <div class="px-4 text-center w-full lg:w-7/12">
        <h6 class="uppercase dark:text-gray-700">Cửa hàng</h6>
        <h3 class="capitalize dark:text-gray-700">Cửa hàng của chúng tôi</h3>
        <p class="mb-4 dark:text-blue-900">
         Những thiết kế và các icon của trang web làm nên thương hiệu của chúng tôi.
        </p>
      </div>
    </div>
    <div class="-mt-4 mx-auto pt-8 px-4 relative">
      <div class="-mx-4 flex flex-wrap items-center justify-center mb-4">
        <PetList />
      </div>
    </div>
  </div>
</template>
