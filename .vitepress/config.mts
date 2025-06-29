import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "SSE WIKI",
  description: "SSE Server WIKI",
  srcDir: 'pages',
  outDir: 'dist',
  ignoreDeadLinks: true,
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outline: {
      level: [1, 3],    // 显示 h1 到 h3 级别的标题
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Quick Start', link: '/quick-start' },
      { text: 'Mods', link: '/mods' },
      { text: 'Plugin', link: '/plugin' },
      { text: 'History', link: '/history'},
      { text: 'Member', link: '/member'}
    ],

    sidebar: [
      {
        text: '快速开始 | Quick Start',
        collapsed: true,
        items: [
          { text: 'Overview', link: '/quick-start/quick-start' },
          { text: 'Installation', link: '/quick-start/quick-start#installation' },
          { text: 'Basic Setup', link: '/quick-start/quick-start#basic-setup' },
          { text: 'Configuration', link: '/quick-start/quick-start#configuration' }
        ]
      }
      '/mods/': [
        {
          text: '模组 | Mods',
          collapsed: true,
          items: [
            { text: 'Create', link: '/mods/create' },
            { text: 'Toms Simple Storage Mod', link: '/mods/tom' },
            { text: 'Tempad', link: '/mods/tempad' }
          ]
        }
      ],
      '/plugin/': [
        {
          text: '插件 | Plugin',
          collapsed: true,
          items: [
            { text: 'ZMusic', link: '/plugin/zmusic' },
            { text: 'Home', link: '/plugin/home' },
            { text: 'Netlify', link: '/quick-start/quick-start#netlify-deployment' }
          ]
        }
      ],
      '/history/': [
        {
          text: '历史 | History',
          items: [
            { text: 'Baka群组服', link: '/history/baka' },
            { text: 'awa模组服', link: '/history/awa' },
            { text: 'SSE模组服', link: '/history/baka' },
            { text: 'SSE&awa联合服', link: '/history/baka' },
            { text: 'SSE&awa Remastered', link: '/history/baka' }
          ]
        }
      ],
      '/member/': [
        {
          text: '成员 | Member',
          items: [
            { text: '🐧企鹅', link: '/member/penguin' },
            { text: '🧶绿球', link: '/member/greenball' },
            { text: 'Sean', link: '/member/sean' },
            { text: '🐔仙鸡', link: '/member/chicken' },
            { text: '🐑灰咩', link: '/member/mie' }
          ]
        }
      ]
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/sseaan/SSE-Wiki' }
    ]
  }
})