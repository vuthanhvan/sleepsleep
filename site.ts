// since `.js, .ts` files are not included by default,
// the following comment tells UnoCSS to force scan this file (to pick the logo icon).
// @unocss-include

export default {
  name: 'Ngủ Ngon Nhé!',
  description: 'Adopt Your Fur Mate',
  logo: 'i-noto:cat-face',
  author: 'Nana',
  url: '',
  github: 'https://github.com/',
  defaultLocale: 'vi', // default
  identity: {
    type: 'Organization',
  } as any,
  twitter: '@vuedesigner',
  trailingSlash: false, // default
  titleSeparator: '|', // default
  nav: [
    { text: 'Tranh chủ', link: '/', type: 'primary', icon: 'i-mdi-home' },
    { text: 'Cửa hàng', link: '/adopt', type: 'primary', icon: 'i-mdi-home' },
    {
      text: 'Donate',
      link: '/quick-start',
      type: 'secondary',
      icon: 'i-mdi-home',
    },
    {
      text: 'Articles',
      link: '/articles',
      type: 'secondary',
      icon: 'i-mdi-home',
    },
    { text: 'Blog', link: '/blog', type: 'secondary', icon: 'i-mdi-home' },
    {
      text: 'Về chúng tôi',
      link: '/aboutus',
      type: 'secondary',
      icon: 'i-mdi-home',
    },
    // {
    //   text: 'Liên hệ',
    //   link: '/contact',
    //   type: 'secondary',
    //   icon: 'i-mdi-home',
    // },
  ],
}
