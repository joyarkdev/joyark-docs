import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
    // 站点配置
  lang: 'en-US',
  title: 'Joyark docs',
  description: 'docs work',
  head: [['link', { rel: 'icon', href: '/images/logo.png' }]],
  // 多语言
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'en-US',
      title: 'Joyark docs',
      // description: 'Vue-powered Static Site Generator',
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'Joyark docs',
      // description: 'Vue 驱动的静态网站生成器',
    },
  },

    // 主题配置
  themeConfig: {
    displayAllHeaders:true,
    logo: '/images/logo.png',
    locales: {
      '/': {
        selectLanguageName: 'English',
        // navbar: [
        //   {
        //     text: 'About us',
        //     link: '/guide/Terms/',
        //     children: [
        //       {
        //         text: 'Terms Of Service',
        //         link: '/guide/Terms/TermsOfService.md', 
        //       },
        //       {
        //         text: 'Privacy Policy',
        //         link: '/guide/Terms/PrivacyPolicy.md'
        //       }
        //   ],
        //   },
        // ],
        
        sidebar: [
            {
              text: 'Terms',
              link: '/guide/Terms/TermsOfService.md',
              children: [
                '/guide/Terms/TermsOfService.md',
                '/guide/Terms/PrivacyPolicy.md',
              ],
            },
           
          ],
      },
      '/zh/': {
        selectLanguageName: '简体中文',
        selectLanguageText:'选择语言',
        // navbar: [
        //   {
        //     text: '关于我们',
        //     link: '/zh/guide/Terms/',
        //     children: [
        //       {
        //         text: '服务条款',
        //         link: '/zh/guide/Terms/TermsOfService.md', 
        //       },
        //       {
        //         text: '隐私协议',
        //         link: '/zh/guide/Terms/PrivacyPolicy.md'
        //       }
        //   ],
        //   },
        // ],
        sidebar: [
            {
              text: '条款',
              link: '/zh/guide/Terms/TermsOfService.md',
              children: [
                '/zh/guide/Terms/TermsOfService.md',
                '/zh/guide/Terms/PrivacyPolicy.md',
              ],
            },
          ]
      },
    },
  },
})

