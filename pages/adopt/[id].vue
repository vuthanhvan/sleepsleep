<script setup lang="ts">
definePageMeta({
  // layout: 'default',
  // name: 'blog',
  // alias: 'blog',
  title: 'Cửa hàng',
  description: 'Cửa hàng của chúng tôi!',
  hidden: true,
  navOrder: 2,
  type: 'primary',
  icon: 'i-mdi-home',
  // ogImage: 'images/ogImage.png', // url or local images inside public folder, for eg, ~/public/images/ogImage.png
})

const route = useRoute()
const { id: petId } = route.params

const { fetchPet } = await usePet(+petId)

const { id, name, breed, sex, size, image, code, location } = fetchPet()

useServerSeoMeta({
  description: () => name || '',
})

useHead({
  title: () => name || '',
})
</script>
<template>
  <div class="py-12">
    <div class="container mx-auto px-4 relative">
      <div class="container mx-auto pl-12 pr-8 pt-4 relative">
        <div class="px-8">
          <div class="flex flex-wrap lg:justify-between">
            <div class="py-4 text-center w-full lg:w-fit">
              <NuxtLink to="/adopt">
                <BaseButton><span>&lt;- Quay lại</span> </BaseButton>
              </NuxtLink>
            </div>
            <div class="text-center w-full lg:w-fit">
              <h3 class="capitalize">{{ name }}</h3>
              <h6 class="uppercase">Seri ID: {{ id }}</h6>
            </div>
            <div class="flex items-center justify-center py-4 space-x-4 text-center w-full lg:w-fit">
              <BaseIcon name="i-material-symbols-mark-email-unread-outline" height="28px"></BaseIcon>
              <NuxtLink to="https://www.facebook.com/">
                <BaseIcon name="i-logos-facebook" height="28px"></BaseIcon>
              </NuxtLink>
              <NuxtLink to="/adopt">
                <BaseIcon name="i-logos-shopee-icon" height="28px"></BaseIcon>
              </NuxtLink>
              <NuxtLink to="/adopt">
                <BaseIcon name="i-logos-facebook" height="28px"></BaseIcon>
              </NuxtLink>
            </div>
          </div>
          <div class="flex flex-wrap pt-8 w-full lg:flex-nowrap">
            <div class="flex flex-wrap justify-center text-center w-full lg:flex-nowrap lg:text-left">
              <div class="w-full">
                <NuxtImg :src="image" class="rounded-xl w-full" :alt="name" />
              </div>
              <div class="py-8 w-full sm:px-8">
                <ul>
                  <li class="mb-4">
                    <span class="font-semibold">Chất liệu:</span>
                    <span class="ml-2">{{ breed }}</span>
                  </li>
                  <li class="mb-4">
                    <span class="font-semibold">Size:</span>
                    <span class="ml-2">{{ size }}</span>
                  </li>
                  <li class="mb-4">
                    <span class="font-semibold">Gender:</span>
                    <span class="ml-2">{{ sex }}</span>
                  </li>
                  <li class="mb-4">
                    <span class="font-semibold"> Mã hàng:</span>
                    <span class="ml-2">{{ code }}</span>
                  </li>
                  <li class="flex items-center justify-center mb-4 lg:justify-start">
                    <BaseIcon name="i-material-symbols-add-location-alt-outline-rounded" height="28px"
                      class="-ml-1 font-semibold"></BaseIcon>
                    <span class="ml-2">{{ location }}</span>
                  </li>
                  <li class="flex items-center justify-center mt-4 lg:justify-start">
                    <BaseIcon name="i-healthicons-sexual-reproductive-health-outline" height="24px"
                      class="text-indigo-600"></BaseIcon>
                    <span class="ml-2 uppercase">Khách hàng có thể an tâm khi mua hàng</span>
                  </li>
                  <div class="text-start">
                    + Cam kết về chất lượng sản phẩm, Shop cam kết cả về CHẤT
                    LIỆU cũng như HÌNH ẢNH (đúng với những gì được nêu bật trong
                    phần mô tả sản phẩm).
                    <br />
                    + Giá thành thấp nhất thị trường và được bảo hành theo quy
                    định với từng sản phẩm, được đổi trả hàng lỗi trong vòng 7
                    ngày kể từ khi mua hàng.
                  </div>
                  <!-- <li class="mb-4">
                    <span class="font-semibold">Includes:</span>
                    <span class="ml-2">Vaccination</span>
                  </li> -->
                </ul>
              </div>
              <div
                class="max-w-m py-8 rounded-xl w-full sm:px-8 bg-blue-600 dark:bg-blue-200 text-white dark:text-blue-800">
                <ul class="text-start">
                  <li class="flex items-center justify-center lg:justify-start">
                    <BaseIcon name="i-material-symbols-check-box-outline" height="28px"></BaseIcon><span
                      class="inline-block ml-2">Mô tả</span>
                  </li>
                  <li class="flex items-center justify-center mt-4 lg:justify-start">
                    <BaseIcon name="i-twemoji-sparkling-heart" height="24px"></BaseIcon>
                    <span class="ml-2">THÔNG TIN SẢN PHẨM: </span>
                  </li>
                  <div>
                    - Tên sản phẩm: Áo thun Unisex form rộng tay lỡ nam nữ
                    <br />
                    - Xuất sứ: Việt Nam <br />
                    - Chất liệu: 35% Cotton, 60% Polyester, 5% Spandex <br />
                    - Vải thun co giãn, hình in sắc nét, chất vải thoáng mát,
                    không xù, không nhăn, không hút bụi bẩn
                  </div>
                  <li class="flex items-center justify-center mt-4 lg:justify-start">
                    <BaseIcon name="i-bx-bxs-microchip" height="24px" class="text-tertiary-600 dark:text-tertiary-200">
                    </BaseIcon>
                    <span class="ml-2">Đặc điểm nổi bật của áo thun tay lỡ Unisex form
                      rộng:</span>
                  </li>
                  <p>
                    - Là item không thể thiếu trong tủ đồ vì sự thoải mái, dễ
                    chịu, lại rất dễ phối đồ.
                    <br />
                    - Áo thun unisex thích hợp với cả nam và nữ. Mặc làm áo thun
                    cặp, áo nhóm rất phù hợp.
                    <br />
                    - Áo thun form rộng dễ dàng phối đồ, thời trang phong cách
                    Hàn Quốc.
                  </p>
                  <li class="flex items-center justify-center mt-4 lg:justify-start">
                    <BaseIcon name="i-twemoji-worm" height="24px"></BaseIcon>
                    <span class="ml-2">HƯỚNG DẪN GIẶT/ỦI ÁO THUN TAY LỠ</span>
                  </li>
                  <p>
                    - Không sử dụng hóa chất, tẩy trực tiếp lên sản phẩm, không
                    ngâm quá lâu trong dung dịch tẩy.
                    <br />
                    - Không sử dụng bàn chải khi giặt
                    <br />
                    - Giặt mặt trái, nhẹ tay, giặt xong phơi ngay, không ngâm
                    trong nước quá lâu.
                    <br />
                    - Áo trắng - áo màu nên chia ra giặt riêng, không giặt
                    chung.
                  </p>
                </ul>
              </div>
            </div>
          </div>
          <div class="mt-8 px-8 text-center lg:text-left">
            <p>
              <span class="font-boid">Để đặt hàng: </span>
              <span class="mx-1 text-blue-600 dark:text-blue-200">{{ name }} </span><span>hoặc tìm hiểu thêm, hãy
                liên lạc với chúng tôi tại </span><span class="mx-1 text-blue-600 dark:text-blue-200">{{ location
                }}.</span><span>Không cần phải đặt hẹn trước và bạn luôn được chào đón.</span>
            </p>
            <p class="mt-2">
              Ngoài ra, vui lòng liên hệ trực tiếp với đội ngũ
              {{ location }} của chúng tôi theo số
              <span class="text-blue-600 dark:text-blue-200">09 7132 0713</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
