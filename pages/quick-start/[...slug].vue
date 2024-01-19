<!-- HỖ TRỢ -->
<script setup lang="ts">
import site from '@/site'
const { github } = site

definePageMeta({
  // layout: 'default',
  name: 'quick-start',
  // alias: '[...slug]',
  title: 'Hỗ trợ chúng tôi',
  description: `Hỗ trợ chúng tôi trong quá trình theo dõi!`,
  navOrder: '3',
  type: 'secondary',
  icon: 'i-mdi-home',
  // ogImage: 'images/ogImage.png', // url or local images inside public folder, for eg, ~/public/images/ogImage.png
})

const slug =
  useRoute().params.slug.toString().replace(/,/g, '/') ||
  useRoute().name.toString().replace(/,/g, '/')

useServerSeoMeta({
  description: () => slug || '',
})
</script>
<template>
  <div>
    <TheHeader>
      <div>
        <div class="flex items-center">
          <h2 class="text-5xl font-semibold">Hỗ Trợ Truyện Ngủ Ngon</h2>
        </div>
        <div class="flex items-center mt-4">
          <h6> Được tạo ra bởi nhóm chúng tôi, sứ mệnh của chúng tôi là mang lại một chút niềm vui
            <br>
            và thói quen về thời gian ngủ của bạn,
            giúp loại bỏ những khó khăn mà các gia đình thường gặp phải khi đi ngủ.
          </h6>
        </div>
        <slot />
      </div>
    </TheHeader>

    <section class="container mx-auto">
      <div class="px-10 w-full">
        <p class="mt-2 text-center w-full lg:text-left">
          Chúng tôi làm điều này bằng cách cung cấp trải nghiệm lắng nghe yên tĩnh và hấp dẫn mà trẻ em mong đợi. Chúng
          tôi viết những câu chuyện, âm nhạc và âm thanh thân thiện với trẻ em nguyên bản và được lựa chọn cẩn thận nhằm
          thúc đẩy sự tò mò, sáng tạo và khơi dậy trí tưởng tượng của người nghe trẻ đồng thời giúp các em dễ dàng chìm
          vào giấc ngủ.
        </p>
        <br><br>
        <p class="text-left font-semibold">
          Bạn có thể hỗ trợ việc tiếp tục sản xuất chương trình của chúng tôi theo những cách sau:
        </p>

        <div
          class="-mx-4 flex flex-col flex-wrap mb-10 mt-14 text-center pr-8 py-4 md:flex-col md:flex-nowrap  lg:items-start ">
          <h5 class="leading-5">❤️ Hỗ trợ một lần
          </h5>
          <p class="text-start my-5">Dịch vụ cũng như nội dung, tính năng và chức năng ban đầu của Dịch vụ
            đang và sẽ vẫn là tài
            sản độc quyền của Câu chuyện về giấc ngủ và những người cấp phép của nó.</p>


          <div class="font-serif text-center flex justify-center items-center ml-10 mt-2">
            <img decoding="async" src="https://i.pinimg.com/564x/1f/0e/8a/1f0e8ad4283478c9de9aaf793048eab9.jpg"
              alt="we love bedtime stories" width="250" class="aligncenter size-medium wp-image-491 mr-5">


            <div
              class="block hover:opacity-75 overflow-hidden rounded-xl  m-10 p-8 border-solid border-2 dark:text-blue-950 bg-blue-300">
              <div class="dark:text-blue-950 text-start">
                <!-- <p class="text-start my-5">SỐ TK: <span style="color: #F59194;">9971320713</span></p>
                <p class="text-start my-5">Ngân hàng: <span style="color: #F59194;">Vietcombank</span></p>
                <p class="text-start my-5">Chủ TK: <span style="color: #F59194;">Vũ Thị Thanh Vân</span></p>
                <p class="text-start my-5">Ghi chú: <span style="color: #F59194;">Hỗ trợ Ngủ Ngon</span></p> -->
              

              <table class="table-auto">
                <tbody>
                  <tr>
                    <td>SỐ TÀI KHOẢN :</td>
                    <td>9971320713</td>
                  </tr>
                  <tr>
                    <td>NGÂN HÀNG :</td>
                    <td>VIETCOMBANK</td>
                  </tr>
                  <tr>
                    <td>CHỦ TÀI KHOẢN : </td>
                    <td>VŨ THỊ THANH VÂN</td>
                  </tr>
                   <tr>
                      <td>Ghi chú: </td>
                      <td>Hỗ trợ Ngủ Ngon</td>
                    </tr>
                </tbody>
              </table>
              </div>
            </div>

            <!--                                 
            <h5 class="leading-5" style="color: #F59194;"><a href="/"> Bernice and Bobby go to a movie
                🐻
              </a></h5> -->



          </div>
          <p class="text-start my-5">Và những hỗ trợ các bạn cho trang Web mình sẽ bỏ ra 50% hỗ trợ cho chương trình Nuôi
            em trên vùng cao. Mong rằng chúng mình cũng như các bạn góp một phần công sức cho những tấm lá chưa được trọn
            vẹn. </p>
        </div>

        <div
          class="-mx-4 flex flex-col flex-wrap mb-10 mt-14 text-center pr-8 py-4 md:flex-col md:flex-nowrap  lg:items-start ">
          <h5 class="leading-5">❤️ Lời chúc mừng sinh nhật
          </h5>
          <p class="text-start my-5">Những lời cảm ơn và lời chúc sinh nhật là một cách chúng tôi gửi lời cảm ơn đến những
            người đăng ký Premium hoặc những người ủng hộ. Nếu bạn không quan tâm đến lợi ích của tư cách thành viên
            Premium, bạn có thể mua lời chúc sinh nhật bên dưới.</p>
          <div>

          </div>
          <p class="text-start my-5">Sứ mệnh của chúng tôi là mang lại niềm vui nho nhỏ cho gia đình bạn trong giờ ngủ và
            mang lại nụ cười trên khuôn mặt trẻ thơ. Nếu bạn không thể hỗ trợ tài chính cho chúng tôi, vui lòng vẫn liên
            hệ và chúng tôi sẽ sẵn lòng gửi lời cảm ơn hoặc lời chúc sinh nhật đến con bạn. Cảm ơn bạn nhiều.</p>
        </div>


        <div
          class="-mx-4 flex flex-col flex-wrap mb-10 mt-14 text-center pr-8 py-4 md:flex-col md:flex-nowrap  lg:items-start ">
          <h5 class="leading-5">❤️ Đăng ký Sleep Tight Premium
          </h5>
          <p class="text-start my-5">Đăng ký Premium để không chỉ hỗ trợ chương trình của chúng tôi mà còn có quyền truy
            cập vào các câu chuyện độc quyền, các tập về hơi thở và chánh niệm cũng như âm nhạc và âm thanh giúp bạn dễ
            ngủ. Và con bạn sẽ thích những lời cảm ơn và tin nhắn chúc mừng sinh nhật!</p>

          <h6 class="leading-5" style="color: #F59194;">Bắt đầu đăng ký dùng thử miễn phí của bạn dưới đây:
          </h6>

        </div>

























        <!-- <div class="flex flex-col rounded-lg">
          <article class="dark:xl:divide-gray-700 xl:divide-gray-200 xl:divide-y">
            <div
              class="dark:divide-gray-700 divide-gray-200 divide-y pb-16 xl:divide-y-0 xl:gap-x-10 xl:grid xl:grid-cols-4 xl:pb-20 xl:sticky"
              style="grid-template-rows: auto 1fr">
              <div class="dark:divide-gray-700 divide-gray-200 divide-y xl:col-span-3 xl:pb-0 xl:row-span-2">
                <StaticMarkdown :path="slug" />
              </div>
            </div>
          </article>
        </div> -->
      </div>
    </section>
  </div>
</template>
<style scoped></style>
