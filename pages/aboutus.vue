<script setup lang="ts">
definePageMeta({
  // layout: 'default',
  // name: 'volunteer',
  // alias: 'volunteer',
  title: 'Về chúng tôi',
  description: `Don't Miss Out – Stay in the Know, Subscribe Today!`,
  navOrder: '6',
  type: 'secondary',
  icon: 'i-mdi-home',
  // ogImage: 'images/ogImage.png', // url or local images inside public folder, for eg, ~/public/images/ogImage.png
})
</script>
<template>
  <div class="pb-12 text-center mt-5 ">
    <div class="container mx-auto px-4">
      <div class="-mx-4 flex flex-wrap">
        <div class="mx-auto px-4 rounded-2xl w-full lg:w-8/12">
          <div class="px-6 py-12 rounded-lg tertiary-card">
            <h2 class="font-bold leading-tight mb-5 text-3xl">
              VỀ CHÚNG TÔI
            </h2>
            <p class="mb-4">
              Câu chuyện về giấc ngủ mang đến cho bạn những câu chuyện mới êm dịu trước khi đi ngủ mỗi tuần. Mỗi câu
              chuyện có độ dài phù hợp và an toàn cho trẻ em ở mọi lứa tuổi.
            </p>
            <div class="mb-2 flex justify-center">
              <img decoding="async" src="https://i.pinimg.com/originals/8e/f7/99/8ef79988294afe31f147f906af474fe0.gif"
                alt="we love bedtime stories" width="200" class="align-center size-medium wp-image-491">
            </div>
            <!-- 
            <div class="flex"> 900
              <div class="bg-primary-900 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-gray-900 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-red-900 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-yellow-900 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-green-900 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-blue-900 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-indigo-900 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-purple-900 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-pink-900 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-secondary-900 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-tertiary-900 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-neutral-900 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-success-900 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-warning-900 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-error-900 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-info-900 dark:text-primary-100 w-2 h-2 p-10 "></div>
            </div>
            <div class="flex">800
              <div class="bg-primary-800 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-gray-800 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-red-800 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-yellow-800 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-green-800 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-blue-800 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-indigo-800 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-purple-800 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-pink-800 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-secondary-800 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-tertiary-800 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-neutral-800 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-success-800 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-warning-800 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-error-800 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-info-800 dark:text-primary-100 w-2 h-2 p-10 "></div>
            </div>
            <div class="flex">700
              <div class="bg-primary-700 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-gray-700 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-red-700 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-yellow-700 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-green-700 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-blue-700 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-indigo-700 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-purple-700 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-pink-700 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-secondary-700 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-tertiary-700 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-neutral-700 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-success-700 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-warning-700 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-error-700 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-info-700 dark:text-primary-100 w-2 h-2 p-10 "></div>
            </div>

             <div class="flex">600
                  <div class="bg-primary-600 dark:text-primary-100 w-2 h-2 p-10 "></div>
                  <div class="bg-gray-600 dark:text-primary-100 w-2 h-2 p-10 "></div>
                  <div class="bg-red-600 dark:text-primary-100 w-2 h-2 p-10 "></div>
                  <div class="bg-yellow-600 dark:text-primary-100 w-2 h-2 p-10 "></div>
                  <div class="bg-green-600 dark:text-primary-100 w-2 h-2 p-10 "></div>
                  <div class="bg-blue-600 dark:text-primary-100 w-2 h-2 p-10 "></div>
                  <div class="bg-indigo-600 dark:text-primary-100 w-2 h-2 p-10 "></div>
                  <div class="bg-purple-600 dark:text-primary-100 w-2 h-2 p-10 "></div>
                  <div class="bg-pink-600 dark:text-primary-100 w-2 h-2 p-10 "></div>
                  <div class="bg-secondary-600 dark:text-primary-100 w-2 h-2 p-10 "></div>
                  <div class="bg-tertiary-600 dark:text-primary-100 w-2 h-2 p-10 "></div>
                  <div class="bg-neutral-600 dark:text-primary-100 w-2 h-2 p-10 "></div>
                  <div class="bg-success-600 dark:text-primary-100 w-2 h-2 p-10 "></div>
                  <div class="bg-warning-600 dark:text-primary-100 w-2 h-2 p-10 "></div>
                  <div class="bg-error-600 dark:text-primary-100 w-2 h-2 p-10 "></div>
                  <div class="bg-info-600 dark:text-primary-100 w-2 h-2 p-10 "></div>
                </div>
            <div class="flex">500
              <div class="bg-primary-500 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-gray-500 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-red-500 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-yellow-500 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-green-500 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-blue-500 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-indigo-500 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-purple-500 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-pink-500 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-secondary-500 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-tertiary-500 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-neutral-500 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-success-500 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-warning-500 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-error-500 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-info-500 dark:text-primary-100 w-2 h-2 p-10 "></div>
            </div>

            <div class="flex">300
              <div class="bg-primary-300 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-gray-300 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-red-300 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-yellow-300 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-green-300 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-blue-300 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-indigo-300 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-purple-300 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-pink-300 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-secondary-300 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-tertiary-300 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-neutral-300 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-success-300 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-warning-300 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-error-300 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-info-300 dark:text-primary-100 w-2 h-2 p-10 "></div>
            </div>

            <div class="flex">100
              <div class="bg-primary-100 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-gray-100 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-red-100 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-yellow-100 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-green-100 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-blue-100 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-indigo-100 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-purple-100 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-pink-100 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-secondary-100 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-tertiary-100 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-neutral-100 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-success-100 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-warning-100 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-error-100 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-info-100 dark:text-primary-100 w-2 h-2 p-10 "></div>
            </div>

            <div class="flex">50
              <div class="bg-primary-50 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-gray-50 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-red-50 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-yellow-50 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-green-50 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-blue-50 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-indigo-50 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-purple-50 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-pink-50 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-secondary-50 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-tertiary-50 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-neutral-50 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-success-50 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-warning-50 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-error-50 dark:text-primary-100 w-2 h-2 p-10 "></div>
              <div class="bg-info-50 dark:text-primary-100 w-2 h-2 p-10 "></div>
            </div>  -->


            <div class="flex flex-col p-4 w-full">
              <div class="-mx-2 flex flex-wrap lg:mt-2">
                <div class="w-1/2 sm:w-4/12">
                  <div class="mb-4 flex justify-center absolute">
                    <img decoding="async"
                      src="https://sleeptightstories.org/wp-content/uploads/2021/09/star1-976x1024.png"
                      alt="we love bedtime stories" width="50" class=" align-center size-medium wp-image-491">
                  </div>
                  <div
                    class="block hover:opacity-75 overflow-hidden rounded-xl mx-5 mb-5 p-8 border-solid border-2 font-medium dark:font-bold dark:text-blue-700 "
                    style="background-color: #cadcf6;">
                    Podcast Giúp trẻ em trên toàn thế giới trở nên bình tĩnh và thư giãn trước khi đi ngủ và bất cứ lúc
                    nào. Được tạo ra dành cho trẻ em nhưng phù hợp với mọi lứa tuổi, Ngủ Ngon nhé! giúp cho thời gian đi
                    ngủ trở nên chất lượng hơn bằng cách giúp những tâm trí bận rộn trở nên bình tĩnh, tập trung và thư
                    giãn.
                  </div>
                </div>
                <div class=" w-1/2 sm:w-4/12">
                  <div class="mb-4 flex justify-center absolute">
                    <img decoding="async"
                      src="https://sleeptightstories.org/wp-content/uploads/2021/09/star2-1024x951.png"
                      alt="we love bedtime stories" width="50" class=" align-center size-medium wp-image-491">
                  </div>
                  <div
                    class="block hover:opacity-75 overflow-hidden rounded-xl mx-5 mb-5 p-8 border-solid border-2 font-medium dark:font-bold dark:text-blue-600 "
                    style="background-color: #cadcf6;">
                    Chuẩn bị để chìm vào giấc ngủ một cách bình tĩnh bằng cách lắng nghe sự kết hợp giữa các kỹ thuật
                    thư giãn, âm thanh thiên nhiên êm dịu, âm nhạc êm dịu và những câu chuyện khơi dậy giấc mơ trước khi
                    đi ngủ.
                  </div>
                </div>
                <div class=" w-1/2 sm:w-4/12">
                  <div class="mb-4 flex justify-center absolute">
                    <img decoding="async"
                      src="https://sleeptightstories.org/wp-content/uploads/2021/09/star3-1024x926.png"
                      alt="we love bedtime stories" width="50" class=" align-center size-medium wp-image-491">
                  </div>
                  <div
                    class="block hover:opacity-75 overflow-hidden rounded-xl mx-5 mb-5 p-8 border-solid border-2 font-medium dark:font-bold dark:text-blue-700"
                    style="background-color: #cadcf6;">
                    Những podcast là cách kết hợp các kỹ thuật thư giãn, những câu chuyện kể trước khi đi ngủ, những âm
                    thanh thiên nhiên êm dịu và âm nhạc êm dịu để giúp trẻ có giấc ngủ sâu và yên tĩnh.
                  </div>
                </div>
                <div class=" w-1/2 sm:w-4/12">
                  <div class="mb-4 flex justify-center absolute">
                    <img decoding="async"
                      src="https://sleeptightstories.org/wp-content/uploads/2021/09/star1-976x1024.png"
                      alt="we love bedtime stories" width="50" class=" align-center size-medium wp-image-491">
                  </div>
                  <div
                    class="block hover:opacity-75 overflow-hidden rounded-xl mx-5 mb-5 p-8 border-solid border-2 font-medium dark:font-bold dark:text-blue-700"
                    style="background-color: #cadcf6;">
                    Blog còn chia sẻ các mẹo , bí quyết, những tip hay giúp bạn có một giấc ngủ hoàn hảo, và khỏe khoắn.
                    Đừng bỏ lỡ để thêm kiến thức về giấc ngủ cho mình và người thân nha.
                  </div>
                </div>
                <div class=" w-1/2 sm:w-4/12">
                  <div class="mb-4 flex justify-center absolute">
                    <img decoding="async"
                      src="https://sleeptightstories.org/wp-content/uploads/2021/09/star2-1024x951.png"
                      alt="we love bedtime stories" width="50" class=" align-center size-medium wp-image-491">
                  </div>
                  <div
                    class="block hover:opacity-75 overflow-hidden rounded-xl mx-5 mb-5 p-8 border-solid border-2 font-medium dark:font-bold dark:text-blue-700"
                    style="background-color: #cadcf6;">
                    Chúng tôi còn có 1 trang bán hàng giành riêng cho những thính giả yêu thích các con chữ, icon độc
                    đáo,..
                    Mong được mọi người đón nhận và ủng hộ cho chúng tôi.
                  </div>
                </div>
                <div class=" w-1/2 sm:w-4/12">
                  <div class="mb-4 flex justify-center absolute">
                    <img decoding="async"
                      src="https://sleeptightstories.org/wp-content/uploads/2021/09/star3-1024x926.png"
                      alt="we love bedtime stories" width="50" class=" align-center size-medium wp-image-491">
                  </div>
                  <div
                    class="block hover:opacity-75 overflow-hidden rounded-xl mx-5 mb-5 p-8 border-solid border-2 font-medium dark:font-bold dark:text-blue-700"
                    style="background-color: #cadcf6;">
                    Những podcast là cách kết hợp các kỹ thuật thư giãn, những câu chuyện kể trước khi đi ngủ, những âm
                    thanh thiên nhiên êm dịu và âm nhạc êm dịu để giúp trẻ có giấc ngủ sâu và yên tĩnh.
                  </div>
                </div>
              </div>
            </div>
            <div class="mb-4 flex justify-center">
              <img decoding="async" src="https://i.pinimg.com/originals/81/23/0a/81230a8131094cf3bcc2996cb605f44f.gif"
                alt="we love bedtime stories" width="200" class="align-center size-medium wp-image-491">
            </div>

            <div
              class="-mx-4 flex flex-col flex-wrap mb-10 text-center pl-4 pr-8 py-4 md:flex-col md:flex-nowrap -mt-4 lg:items-start ">
              <NuxtLink class="-ml-6" to="/">
                <div to="/" class="font-serif inline-flex text-center  text-3xl">
                  <div class="mb-4 flex justify-center">
                    <img decoding="async"
                      src="https://sleeptightstories.org/wp-content/uploads/2021/09/wand@2-792x1024.png"
                      alt="we love bedtime stories" width="50" class="align-center size-medium wp-image-491">
                  </div>
                  <h6 class="font-serif inline-flex items-center text-3xl">
                    Nguồn gốc
                  </h6>
                </div>
              </NuxtLink>
              <p class="mt-2 text-center w-full lg:text-left">
                Câu chuyện về giấc ngủ mang đến cho bạn những câu chuyện mới êm dịu trước khi đi ngủ mỗi tuần.
              </p>
              <br><br>
              <p class="text-left ">
                Kể từ khi chúng tôi bắt đầu sản xuất Câu chuyện về giấc ngủ, podcast của chúng tôi đã được trẻ em và gia
                đình các em trên toàn thế giới tải xuống hàng triệu lần.
              </p>
              <!-- <div class="my-6 text-center">
            <NuxtLink to="/">+1 234 567-890</NuxtLink>
            <br />
            <NuxtLink to="/">hello@fantico.com</NuxtLink>
          </div> -->
            </div>
            <div
              class="-mx-4 flex flex-col flex-wrap  mb-5 text-center pl-4 pr-8 py-4 md:flex-col md:flex-nowrap -mt-4 lg:items-start ">
              <div class="font-serif inline-flex text-center  text-3xl">
                <!-- <div class="mb-4 flex justify-center pr-5">
                  <img decoding="async" src="https://i.pinimg.com/564x/4c/68/84/4c688440a794843e9686d9fb28c3ded2.jpg"
                    alt="we love bedtime stories" width="50" class="align-center size-medium wp-image-491">
                </div> -->
                <h6 class="font-serif inline-flex items-center text-3xl">
                  Nghe ở đâu:
                </h6>
              </div>
              <div class="font-serif text-center flex justify-center items-center ml-10 mt-2">
                <img decoding="async" src="https://i.pinimg.com/564x/72/53/65/725365f36bddbe637485c855196d46a8.jpg"
                  alt="we love bedtime stories" width="40" class="aligncenter size-medium wp-image-491 mr-5">
                <p>Google Podcast : </p>
                <span style="color: red;"><a href="/"> Podcast</a></span>
              </div>
              <div class="font-serif text-center flex justify-center items-center ml-10 mt-2">
                <div><img decoding="async" src="https://i.pinimg.com/564x/d7/10/76/d7107640d19ed8a381a6ddc97ce61295.jpg"
                    alt="we love bedtime stories" width="40" class="aligncenter size-medium wp-image-491 mr-5"></div>
                <div class="flex">
                  <p> Podcast của Apple : </p>
                  <span style="color: red;"><a href="/"> Podcast</a></span>
                </div>
              </div>
              <div class="font-serif text-center flex justify-center items-center ml-10 mt-2">
                <img decoding="async" src="https://i.pinimg.com/564x/25/01/8e/25018ee61e5d1c6061075443a5460be6.jpg"
                  alt="we love bedtime stories" width="40" class="aligncenter size-medium wp-image-491 mr-5">
                <p> Spotify: : </p>
                <span style="color: red;"><a href="/"> Podcast</a></span>
              </div>
            </div>
            <div
              class="-mx-4 flex flex-col flex-wrap  mb-10 text-center pl-4 pr-8 py-4 md:flex-col md:flex-nowrap -mt-4 lg:items-start ">
              <div class="font-serif inline-flex text-center pb-5  text-3xl">
                <div class="mb-4 flex justify-center pr-5">
                  <img decoding="async" src="https://i.pinimg.com/564x/d5/41/96/d54196892ac39b9da5e34a9f0ffa428c.jpg"
                    alt="we love bedtime stories" width="50" class="align-center size-medium wp-image-491">
                </div>
                <h6 class="font-serif inline-flex items-center text-3xl">
                  Lịch phát hành :
                </h6>
              </div>
              <p>Chúng tôi xuất bản tập mới vào thứ Ba và thứ Năm hàng tuần lúc 9 giờ sáng (UTC -3).</p>
            </div>
            <div class="mb-4 flex justify-center">
              <img decoding="async" src="https://i.pinimg.com/originals/4f/48/8c/4f488c09dbabd854b7209a39bfbbb363.gif"
                alt="we love bedtime stories" width="150" class="align-center size-medium wp-image-491">
            </div>
            <div
              class="-mx-4 flex flex-col flex-wrap  mb-10 text-center pl-4 pr-8 py-4 md:flex-col md:flex-nowrap -mt-4 lg:items-start  ">
              <div class="font-serif inline-flex text-center  text-3xl">
                <div class="mb-4 flex justify-center pr-5">
                  <img decoding="async" src="https://i.pinimg.com/originals/4f/48/8c/4f488c09dbabd854b7209a39bfbbb363.gif"
                    alt="we love bedtime stories" width="50" class="align-center size-medium wp-image-491">
                </div>
                <h6 class="font-serif inline-flex items-center text-3xl">
                  Mạng xã hội :
                </h6>
              </div>
              <div class="font-serif text-center flex justify-center items-center ml-10 mt-2">
                <img decoding="async" src="https://i.pinimg.com/564x/41/fc/e1/41fce16c62e3121a8ccbdff8d1d35f84.jpg"
                  alt="we love bedtime stories" width="40" class="aligncenter size-medium wp-image-491 mr-5">
                <NuxtLink href="https://www.instagram.com/" aria-label="facebook" external target="_blank">
                  <p>Instagram </p>
                </NuxtLink>
              </div>
              <div class="font-serif text-center flex justify-center items-center ml-10 mt-2">
                <div><img decoding="async" src="https://i.pinimg.com/564x/88/6b/f8/886bf8d2d6b311ecfef255b71e399905.jpg"
                    alt="we love bedtime stories" width="40" class="aligncenter size-medium wp-image-491 mr-5"></div>
                <div class="flex">
                  <NuxtLink href="https://www.facebook.com/" aria-label="facebook" external target="_blank">
                    <p>Twitter </p>
                  </NuxtLink>
                </div>
              </div>
              <div class="font-serif text-center flex justify-center items-center ml-10 mt-2">
                <img decoding="async" src="https://i.pinimg.com/736x/34/55/8c/34558ce934c4031196bb5e6b2b4b2903.jpg"
                  alt="we love bedtime stories" width="40" class="aligncenter size-medium wp-image-491 mr-5">
                <NuxtLink href="https://www.facebook.com/" aria-label="facebook" external target="_blank">
                    <p>Facebook </p>
                  </NuxtLink>
              </div>
              <div class="font-serif text-center flex justify-center items-center ml-10 mt-2">
                <img decoding="async" src="https://i.pinimg.com/564x/bd/ae/7f/bdae7f9bda4b5de974be8383d1b5aeb7.jpg"
                  alt="we love bedtime stories" width="40" class="aligncenter size-medium wp-image-491 mr-5">
                <NuxtLink href="https://www.pinterest.com/" aria-label="facebook" external target="_blank">
                    <p>Pinterest </p>
                  </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



    <div id="contact" 
      class="pt-14 pb-12 text-center bg-info-100 dark:bg-blue-500 text-blue-900 dark:text-blue-100">
      <div class="container mx-auto px-4">
        <div class="-mx-4 flex flex-wrap">
          <div class="mx-auto px-4 rounded-2xl w-full lg:w-8/12">
            <div>
              <div class="m-10 flex justify-center">
                <img decoding="async" src="https://media2.giphy.com/media/qaffEmiXKvhsD11NiG/giphy.gif"
                  alt="we love bedtime stories" width="200" class="align-center size-medium wp-image-491">
              </div>
              <div
                class="block hover:opacity-75 overflow-hidden rounded-xl  m-10 p-8 border-solid border-2 dark:text-primary-950"
                style="background-color: #E9F1E3 ;">
                <p class="dark:text-primary-950">
                  Chào các bạn! Chúng tôi đang nỗ lực viết và biên tập những câu chuyện mới và chúng tôi
                  rất mong nhận
                  được ý kiến đóng góp của bạn. Nếu bạn có ý tưởng câu chuyện, câu chuyện hay nhân vật nào
                  muốn chia sẻ,
                  vui lòng gửi email cho chúng tôi qua liên kết hoặc biểu mẫu bên dưới. Sau đó, những điều
                  này có thể trở
                  thành câu chuyện trước khi đi ngủ tiếp theo của bạn! Và bạn sẽ nhận được tín dụng trong
                  một chương
                  trình!
                </p>
              </div>
            </div>
            <div class="px-6 py-12 rounded-lg tertiary-card">
              <h2 class="font-bold leading-tight mb-5 text-3xl">
                Liên hệ với chúng tôi
              </h2>
              <p class="mb-8">
                Để có bộ phương tiện truyền thông, ý tưởng cộng tác hoặc chỉ đơn giản là liên hệ và chào
                hỏi, vui lòng
                sử
                dụng địa chỉ email bên dưới.
              </p>
              <form class="mx-auto sm:w-9/12 xl:w-8/12" action="https://www.getdrip.com/forms/243852739/submissions"
                method="post" target="_blank" rel="noopener" data-drip-embedded-form="243852739">
                <div class="flex items-center overflow-hidden p-2 rounded-3xl">
                  <label for="emailfield" class="sr-only">Email address:</label>
                  <input id="emailfield" class="border-0 flex-1 outline-none px-5 py-2 rounded-3xl w-full"
                    placeholder="email@example.com" type="email" required name="fields[email]" />
                  <BaseButton type="submit" class="ml-2" variant="soft" size="md">
                    Đăng ký
                  </BaseButton>
                </div>
              </form>
            </div>
            <div class=" flex justify-start">
              <p> hello@sleeptight.media
              </p>
            </div>
            <div class=" flex justify-start">
              <p> https://sleeptight.media</p>
            </div>
            <div class="flex justify-end">
              <p>Cập nhật ngày 20 tháng 12 năm 2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="my-24 flex justify-center">
        <img decoding="async" src="https://sleeptightstories.org/wp-content/uploads/2020/06/shootingstar.png"
          alt="we love bedtime stories" width="150" class="aligncenter size-medium wp-image-491">
      </div>
      <h5 class="font-bold text-center font-serif mt-1 text-blue-00 dark:text-blue-200  m-12">
        Các nền tảng nghe Podcast:
      </h5>
      <div class="flex justify-center">
        <div class="inline-block m-2">
          <a title="Listen to Sleep Tight Stories on Apple Podcasts" href="https://podcasts.apple.com/">
            <img decoding="async" src="https://sleeptightrelax.com/cms/wp-content/uploads/2020/03/Apple_Podcasts.png"
              alt="Listen to Sleep Tight Stories on Apple Podcasts" width="225"></a>
        </div>
        <div class="inline-block m-2">
          <a title="Listen to Sleep Tight Stories on Google Podcasts"
            href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy9iYjk2NmIxMC9wb2RjYXN0L3Jzcw?sa=X&ved=0CAMQ9sEGahgKEwiIyrLnu6KDAxUAAAAAHQAAAAAQtAc">
            <img decoding="async"
              src="https://sleeptightrelax.com/cms/wp-content/uploads/2020/03/google_podcasts_badge@8x.png"
              alt="Listen to Sleep Tight Stories on Google Podcasts" width="225"></a>
        </div>
        <div class="inline-block m-2">
          <a title="Listen to Sleep Tight Stories on Spotify"
            href="https://open.spotify.com/playlist/1daVgwA7S2ycuDyO00HMl5?si=13107eb37a2944b3">
            <img decoding="async" class="b"
              src="https://sleeptightrelax.com/cms/wp-content/uploads/2020/03/spotify-podcast-badge-blk-wht-660x160-1.png"
              alt="Listen to Sleep Tight Stories on Spotify" width="225"></a>
        </div>
      </div>
      <p class="font-bold text-center font-serif m-10 mx-48">
        Nghe những câu chuyện để bạn đi vào giấc ngủ.Để biết thêm những câu chuyện trước khi đi ngủ và hơn thế
        nữa.
      </p>
    </div>
    <div class="mt-24 mb-20">
      <h3 class="text-center font-serif mb-12 mt-1  m-32">
        Kết nối với chúng tôi
      </h3>
      <div class="mt-6 space-x-3 ">
        <div class="flex justify-center text-center flex-wrap space-x-4">
          <NuxtLink href="https://www.facebook.com/vuedesigner" aria-label="facebook" external target="_blank">
            <BaseIcon name="i-logos-facebook" class="text-2xl" width="40px"></BaseIcon>
          </NuxtLink>
          <NuxtLink href="https://twitter.com/vuedesigner" aria-label="twitter" external target="_blank">
            <BaseIcon name="i-logos-twitter" class="text-2xl" width="40px"></BaseIcon>
          </NuxtLink>
          <NuxtLink href="https://www.youtube.com/@vuedesigner" aria-label="youtube" external target="_blank">
            <BaseIcon name="i-logos-youtube-icon" class="text-2xl" width="40px"></BaseIcon>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
