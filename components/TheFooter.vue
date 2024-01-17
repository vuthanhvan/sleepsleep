<!-- FOOTER -->
<script setup lang="ts">
//...
</script>
<template>
  <footer class="pt-12">
    <div class="container mx-auto px-8">
      <div class="flex flex-wrap relative">
        <div
          class="-mx-4 flex flex-col flex-wrap  text-center pl-4 pr-8 py-4 md:flex-col md:flex-nowrap -mt-4 lg:items-start ">
          <NuxtLink class="-ml-6" to="/">
            <div to="/" class="font-serif inline-flex text-center  text-3xl">
               <div class="img-Logo"></div>
              <h6 class="font-serif inline-flex items-center text-3xl text-gray-900 dark:text-info-600 font-bold font-serif ml-2 mt-4">
                Ngủ Ngon nhé!
              </h6>
            </div>
          </NuxtLink>
          <p class="mt-2 text-center font-medium dark:text-gray-800 w-full  lg:text-left">
            Câu chuyện về giấc ngủ mang đến cho bạn những câu chuyện mới êm dịu trước khi đi ngủ mỗi tuần.
          </p>
           <div class="inline-flex mt-6 space-x-3">
              <div class="flex flex-wrap space-x-4">
                <NuxtLink
                  href="https://www.facebook.com/"
                  aria-label="facebook"
                  external
                  target="_blank"
                >
                  <BaseIcon
                    name="i-logos-facebook"
                    class="text-2xl"
                    width="28px"
                  ></BaseIcon>
                </NuxtLink>
                <NuxtLink
                  href="https://twitter.com/"
                  aria-label="twitter"
                  external
                  target="_blank"
                >
                  <BaseIcon
                    name="i-logos-twitter"
                    class="text-2xl"
                    width="28px"
                  ></BaseIcon>
                </NuxtLink>
                <NuxtLink
                  href="https://www.youtube.com/"
                  aria-label="youtube"
                  external
                  target="_blank"
                >
                  <BaseIcon
                    name="i-logos-youtube-icon"
                    class="text-2xl"
                    width="28px"
                  ></BaseIcon>
                </NuxtLink>
              </div>
            </div>
          <div class="my-6 text-center font-bold dark:text-gray-900">
            <NuxtLink to="/">+84 971-320-713</NuxtLink>
            <br />
            <NuxtLink to="/">yumevu259@gmail.com</NuxtLink>
          </div>
        </div>
        <div class="flex flex-col items-center p-4 w-full sm:w-1/2 md:flex-1 md:w-1/3 lg:items-start ml-20">
          <h2 class="font-bold text-info-600 dark:text-info-900 text-xl">
            General
          </h2>
          <ul class="text-center lg:mt-2 lg:text-left">
            <li class="mb-4">
              <NuxtLink to="/aboutus#contact" class="font-medium hover:text-info-900 dark:text-gray-900"> Liên hệ</NuxtLink>
            </li>
            <li class="mb-4">
              <NuxtLink to="/privacy-policy" class="font-medium hover:text-info-900 dark:text-gray-900">Điều khoản & Chính sách</NuxtLink>
            </li>
            <li class="mb-4">
              <NuxtLink to="/" class="font-medium hover:text-info-900 dark:text-gray-900">Thông tin Website</NuxtLink>
            </li>
            <li class="mb-4">
              <NuxtLink to="/quick-start" class="font-medium hover:text-info-900 dark:text-gray-900">Donate</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="flex flex-col sm:w-full md:items-end">
          <hr class="mb-4 opacity-25" />
          <p class="py-1 text-sm sm:text-center dark:text-gray-900">
            &copy; Built and designed by Yume a.k.a NA. Copyright © 2023 All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
<style scoped>
footer{
   background-color: #dbeafe;
}

.img-Logo{
  background-image: url(../public/img/img-Logo.png);
   width: 4em;
   height: 5rem;
   background-size: cover;
}
</style>
