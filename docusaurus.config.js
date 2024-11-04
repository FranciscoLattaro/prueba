// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: ' ',
  tagline: 'Hecha un vistazo a nuestra Documentación!',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'http://10.44.225.216:3000/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'AccesaDesarrollo', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          /*editUrl:
            'https://github.com/Accesa-Desarrollo/Accesa-Docs',*/
          routeBasePath: 'docs',
          remarkPlugins: [],
          rehypePlugins: []
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          /*editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',*/
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Accesa-Docs',
      items: [
        {
          type: 'docSidebar',
          position: 'left',
          label: 'Desarrollo',
          sidebarId: 'desarrolloSidebar',
        },/*
        {
          type: 'docSidebar',
          position: 'left',
          label: 'Tecnología',
          sidebarId: 'tecnologiaSidebar',
        },*/
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'right',
          label: 'Tutorial',
        },
        {
          href: 'https://github.com/Accesa-Desarrollo',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    algolia: {
      apiKey: 'ef31d55d0ab35fe73aef4e2de026f3bc',
      indexName: 'Accesa',
      appId: 'PL6W0M6JUM'
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/Tutorial/intro', // Cambiado para apuntar a intro.md
            },
            {
              label: 'Desarrollo',
              to: '/docs/accesa-docs/desarrollo', // Ruta basada en la estructura mostrada
            },
            
          ],
        },
        /*{
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        /*{
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/AccesaDesarrollo',
            },
          ],
        },*/
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Accesa, S.A.`,
    },
  },
};

export default config;
