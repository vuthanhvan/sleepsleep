# Ngủ Ngon Nhé! - Fullstack, SEO friendly, performant app with Nuxt & Tailwind CSS

Website là nơi lý tưởng để bạn tìm thấy những podcast thú vị để lắng nghe trước khi đi ngủ.

Tại trang web "Ngủ Ngon", chúng tôi hiểu rằng giấc ngủ là một yếu tố quan trọng để duy trì sức khỏe và cân bằng trong cuộc sống hiện đại. Do đó, chúng tôi đã tạo ra một bộ sưu tập đặc biệt các podcast chất lượng cao, giúp bạn thư giãn tâm trí và chuẩn bị tinh thần trước khi đi vào giấc ngủ.

Đặc biệt, chúng tôi luôn cập nhật danh sách podcast mới nhất để bạn luôn có những gợi ý nghe mới mỗi khi ghé thăm trang web "Ngủ Ngon". Bạn có thể dễ dàng lựa chọn những chủ đề và phong cách podcast phù hợp với sở thích riêng của mình.

Hãy truy cập vào "Ngủ Ngon" ngay hôm nay và tận hưởng những tràng podcast tuyệt vời trước khi đi ngủ! 🌙💤

## Vue Designer

Website được thiết kế mang lại trải nghiệm tốt cho người dùng, được thiết kế bởi Nana ❤️


## Pre-packed

### Meta Framework (Vue-based)

- [Nuxt](https://nuxt.com/) - The Intuitive Vue Framework
  - 👉 Follow the Nuxt docs for the amazing list of [features](https://nuxt.com/docs/getting-started/introduction).
  - 🚦 [Nuxt-Router](https://nuxt.com/docs/getting-started/routing), based on the official [Vue-Router](https://vuejs.org/guide/introduction.html) and enables file-based routing.
  - SSR friendly `useState` composable to share state across components.

### UI Frameworks

- [Tailwind CSS](https://tailwindcss.com/docs/guides/nuxtjs#3) - The amazing utility-first CSS framework.

### File-based CMS (markdown)

- [Nuxt Content](https://github.com/nuxt/content) - file-based CMS powered by Markdown & Vue components. Note: This page is a markdown file 🗒.

### Icons

- [UnoCSS Preset Icons](https://github.com/unocss/unocss/tree/main/packages/preset-icons/) - use over 100,000 open-source [Iconify](https://iconify.design/) icons. Uses the **unocss** format for icon names, for example, `i-mdi-home`.

### Modules/Plugins

- [Pinegrow Nuxt Module](https://www.npmjs.com/package/@pinegrow/nuxt-module) - enables you to live-design your Vue single-file components visually in Vue Designer.
- [Pinegrow Tailwind CSS Plugin](https://www.npmjs.com/package/@pinegrow/tailwindcss-plugin) - via Design Panel, enables visual controls customization (automatic) and theme customization (optional).
- [VueUse](https://vueuse.org/) - collection of essential Vue composition utilities.
- 🍍 [Pinia](https://pinia.vuejs.org/ssr/nuxt.html) stores for global state management via the `@pinia/nuxt module`. Its light-weight, type-safe, extensible, modular with vue-devtools support.
- [VeeValidate](https://vee-validate.logaretm.com/v4/integrations/nuxt/) takes care of value tracking, validation, errors, submissions and more.
- [Nuxt Image](https://image.nuxt.com/) - Plug-and-play image optimization for Nuxt apps.
- [Nuxt SEO](https://nuxtseo.com/) - Amazing collection of hand-crafted Nuxt Modules for all SEO needs with a unified site config. Includes `nuxt-site-config`, `nuxt-simple-robots`, `nuxt-simple-sitemap`, `nuxt-og-image`, `nuxt-link-checker`, `nuxt-seo-experiments`, `nuxt-schema-org`.

### Devtools

- [Nuxt Devtools](https://devtools.nuxtjs.org) - Enhance your DX (developer experience) with an amazing set of in-app features.
  - **ACTION REQUIRED**: Currently deactivated. In `nuxt.config.ts`, uncomment module to activate.
- [Vue Devtools](https://devtools.vuejs.org/guide/installation.html#standalone) - Official devtools that can be used as a standalone app alongside Vue Designer. It's configured as a Nuxt plugin (only during development).
  - **ACTION REQUIRED**: Currently deactivated. In `plugins/devtools.client.ts`, uncomment to activate.

### VS Code Extensions

- [VS Code Extensions](./.vscode/extensions.json & ./.vscode/settings.json)
  - [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) - Vue 3 `<script setup>` IDE support
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### Coding Style

- Use Composition API with [`<script setup>` SFC syntax](https://vuejs.org/guide/scaling-up/sfc.html)
- [ESLint](https://eslint.org) with [@nuxt/eslint-config](https://github.com/nuxt/eslint-config) - opinionated not-so-strict set of linting rules.
- [Prettier](https://prettier.io) with [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) - format without conflicting with eslint rules.
