<script setup lang="ts">
  import site from '@/site'
  const { name, logo } = site
</script>
<template>
  <NuxtLink data-pg-name="Logo" class="flex items-center sm:flex-row" to="/">
    <div class="img-Logo"></div>
    <!-- <BaseIcon height="40" class="mt-2" :name="logo" /> -->
      <h6
      class="text-info-700 dark:text-info-200 font-extrabold font-serif ml-2 mt-4 text-2xl"
    >
      {{ name }}
    </h6>
  </NuxtLink>
</template>
<style scoped>
.img-Logo{
  background-image: url(../public/img/img-Logo.png);
   width: 9em;
   height: 6rem;
   background-size: cover;
}

</style>
