import { NavHamburger } from '../.nuxt/components';
<!-- HOME CỬA HÀNG -->
<script setup lang="ts">
  const { somePets: pets } = await usePets()
</script>
<template>
  <div class="bg-blue-100 dark:bg-blue-300">
    <div class="pb-24 pt-12">
      <div class="container mx-auto px-4 relative">
        <div
          class="-mx-4 flex flex-col flex-wrap items-center justify-center mb-4"
        >
          <div class="px-4 text-center w-full">
            <h6 class="text-blue-100 dark:text-blue-700 uppercase">
              Adopt A Pet
            </h6>
            <h3 class="capitalize dark:text-gray-700">Cửa hàng</h3>
            <p class="mb-4 dark:text-gray-700">
              Cửa hàng nhỏ của chúng tôi, các bạn hãy tham quan cửa hàng của chúng tôi.
            </p>
          </div>
          <div class="px-4 text-center w-full">
            <BaseButton size="xl" to="/adopt" color="blue"
              ><span>Xem thêm ></span>
            </BaseButton>
          </div>
        </div>
        <div class="flex flex-wrap -mx-4 justify-center">
          <PetCard
            v-for="(pet, index) in pets"
            :key="index"
            v-bind="pet"
          ></PetCard>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
