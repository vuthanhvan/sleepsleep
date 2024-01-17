<!-- HOME MAIN INFOR -->
<script setup lang="ts">
// const props = defineProps({
// 	name: {
// 		type: String,
// 		default: 'StatsSection',
// 	},
// })
</script>
<template>
  <section>
    <div class="container mx-auto px-4 py-12 relative">
      <div class="-mx-4 flex flex-wrap items-center">
        <div class="p-4 w-full lg:w-2/5">
          <!-- <img
            src="https://images.unsplash.com/photo-1561438774-1790fe271b8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDkyMnwwfDF8c2VhcmNofDEyfHxoYXBweSUyMGRvZ3xlbnwwfHx8fDE2ODMyOTgzOTc&ixlib=rb-4.0.3&q=80&w=1080"
            class="mb-6 rounded-3xl w-full"
            alt="Stats"
          /> -->
          <NuxtImg src="https://sleeptightstories.org/wp-content/uploads/2023/03/pod-pitch-story.002.jpeg"
            class="mb-6 rounded-3xl w-full" alt="Stats" />
        </div>
        <div class="lg:w-6/12 mx-auto p-4 w-full">
          <h6 class="font-bold mb-2 text-blue-600 dark:text-blue-200 uppercase">
            Khách hàng
          </h6>
          <h3 class="capitalize mb-6">Sự yêu thích của mọi người với chúng tôi</h3>
          <p>
            Trong khi chúng tôi tạo ra những câu chuyện của mình cho các gia đình có trẻ nhỏ từ 5-12 tuổi, người lớn và
            giáo viên cũng nhận xét về niềm vui mà việc nghe những câu chuyện này mang lại. Và nó ru họ vào giấc ngủ như
            thế nào.
          </p>
          <div class="-mx-4 flex flex-wrap items-center">
            <div class="px-4 py-6 w-1/2">
              <h2 class="mb-2">800+</h2>
              <p>Truy cập Web trong tháng</p>
            </div>
            <div class="px-4 py-6 w-1/2">
              <h2 class="mb-2">1000+</h2>
              <p>Số lượt nghe </p>
            </div>
            <div class="px-4 py-6 w-1/2">
              <h2 class="mb-2">12000+</h2>
              <p>Lượt yêu thích</p>
            </div>
            <div class="px-4 py-6 w-1/2">
              <h2 class="mb-2">10K+</h2>
              <p></p>
            </div>
          </div>
        </div>

      </div>
      
    </div>
  </section>
</template>
<style scoped></style>
