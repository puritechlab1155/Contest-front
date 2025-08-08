// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  components: true,
  css: [
    '@/assets/css/main.css',
    '@/assets/css/common.css',
  ],

  app: {
    head: {
      title: '제1회 뉴스피릿 미술 공모전',
      meta: [
        {
          name: 'description',
          content:
            '뉴스피릿 미술 공모전은 ‘학생들의 창조적 세계관을 발굴하여, 미래를 열어가는 창의 인재 육성’ 및 ‘자기 발견, 미래 설계, 공생적 상상력을 통한 창조적 가치 실현’을 반영하여 자기표현 욕구와 상상력의 확장을 유도합니다.'
        },
        { property: 'og:title', content: '2025. 09. 15 ~ 10. 15' },
        {
          property: 'og:description',
          content:
            '창조적 세계관, 자기표현, 상상력 확장을 유도하는 뉴스피릿 미술 공모전'
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://newsspiritart.kr' },
        { property: 'og:image', content: 'https://your-domain.com/og-image.jpg' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' }
      ]
    }
  },
})
