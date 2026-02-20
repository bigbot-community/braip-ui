import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Braip UI',
  description: 'Biblioteca de Componentes Vue 3 do Braip',

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap', rel: 'stylesheet' }],
  ],

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'Braip UI',

    nav: [
      { text: 'Guia', link: '/guide/getting-started' },
      { text: 'Componentes', link: '/components/atoms/button' },
      { text: 'Tokens', link: '/tokens/colors' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Introdução',
          items: [
            { text: 'Começando', link: '/guide/getting-started' },
            { text: 'Instalação', link: '/guide/installation' },
            { text: 'Temas', link: '/guide/theming' },
          ],
        },
      ],
      '/components/': [
        {
          text: 'Atoms',
          collapsed: false,
          items: [
            { text: 'Button', link: '/components/atoms/button' },
            // { text: 'Input', link: '/components/atoms/input' },
            // { text: 'Select', link: '/components/atoms/select' },
            // { text: 'Badge', link: '/components/atoms/badge' },
            // { text: 'Icon', link: '/components/atoms/icon' },
          ],
        },
        {
          text: 'Molecules',
          collapsed: false,
          items: [
            // { text: 'FormInput', link: '/components/molecules/form-input' },
            // { text: 'Modal', link: '/components/molecules/modal' },
            // { text: 'Card', link: '/components/molecules/card' },
            // { text: 'Table', link: '/components/molecules/table' },
          ],
        },
        {
          text: 'Organisms',
          collapsed: false,
          items: [
            // { text: 'Header', link: '/components/organisms/header' },
            // { text: 'NavBar', link: '/components/organisms/navbar' },
          ],
        },
      ],
      '/tokens/': [
        {
          text: 'Design Tokens',
          items: [
            { text: 'Cores', link: '/tokens/colors' },
            { text: 'Tipografia', link: '/tokens/typography' },
            { text: 'Espaçamento', link: '/tokens/spacing' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/braip/braip-ui' },
    ],

    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: 'Pesquisar',
                buttonAriaLabel: 'Pesquisar',
              },
              modal: {
                noResultsText: 'Sem resultados para',
                resetButtonTitle: 'Limpar pesquisa',
                footer: {
                  selectText: 'selecionar',
                  navigateText: 'navegar',
                  closeText: 'fechar',
                },
              },
            },
          },
        },
      },
    },

    footer: {
      message: 'Lançado sob a Licença MIT.',
      copyright: 'Copyright © 2024 Braip',
    },

    editLink: {
      pattern: 'https://github.com/braip/braip-ui/edit/main/packages/docs/:path',
      text: 'Editar esta página no GitHub',
    },
  },
})
