import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'b2f'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/blog/authors/all-sebastien-lorber-articles', '4a1'),
    exact: true
  },
  {
    path: '/blog/authors/yangshun',
    component: ComponentCreator('/blog/authors/yangshun', 'a68'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '89a'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '9ad'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e9f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '704'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '858'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '299'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '00d'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd2b'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search', '5de'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'ce5'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '69d'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'a91'),
            routes: [
              {
                path: '/docs/accesa-docs/desarrollo/APInfancia',
                component: ComponentCreator('/docs/accesa-docs/desarrollo/APInfancia', 'f7b'),
                exact: true,
                sidebar: "desarrolloSidebar"
              },
              {
                path: '/docs/accesa-docs/desarrollo/Dashboard/dashboard-accesa',
                component: ComponentCreator('/docs/accesa-docs/desarrollo/Dashboard/dashboard-accesa', '80b'),
                exact: true,
                sidebar: "desarrolloSidebar"
              },
              {
                path: '/docs/accesa-docs/desarrollo/Dashboard/dashboard-process',
                component: ComponentCreator('/docs/accesa-docs/desarrollo/Dashboard/dashboard-process', 'f2e'),
                exact: true,
                sidebar: "desarrolloSidebar"
              },
              {
                path: '/docs/accesa-docs/desarrollo/formularioDesarrollo',
                component: ComponentCreator('/docs/accesa-docs/desarrollo/formularioDesarrollo', 'e7b'),
                exact: true,
                sidebar: "desarrolloSidebar"
              },
              {
                path: '/docs/accesa-docs/desarrollo/Gestion de Usuarios/user-management',
                component: ComponentCreator('/docs/accesa-docs/desarrollo/Gestion de Usuarios/user-management', 'd81'),
                exact: true,
                sidebar: "desarrolloSidebar"
              },
              {
                path: '/docs/accesa-docs/desarrollo/NewPortal/performance-evaluation-backend',
                component: ComponentCreator('/docs/accesa-docs/desarrollo/NewPortal/performance-evaluation-backend', '818'),
                exact: true,
                sidebar: "desarrolloSidebar"
              },
              {
                path: '/docs/accesa-docs/desarrollo/subirArchivoDesarrollo',
                component: ComponentCreator('/docs/accesa-docs/desarrollo/subirArchivoDesarrollo', '37a'),
                exact: true,
                sidebar: "desarrolloSidebar"
              },
              {
                path: '/docs/accesa-docs/tecnologia/1',
                component: ComponentCreator('/docs/accesa-docs/tecnologia/1', '8e3'),
                exact: true
              },
              {
                path: '/docs/accesa-docs/tecnologia/subirArchivoTecnologia',
                component: ComponentCreator('/docs/accesa-docs/tecnologia/subirArchivoTecnologia', 'ba9'),
                exact: true
              },
              {
                path: '/docs/category/tutorial---basics',
                component: ComponentCreator('/docs/category/tutorial---basics', '20e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/tutorial---extras',
                component: ComponentCreator('/docs/category/tutorial---extras', '9ad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Tutorial/intro',
                component: ComponentCreator('/docs/Tutorial/intro', 'd56'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Tutorial/tutorial-basics/congratulations',
                component: ComponentCreator('/docs/Tutorial/tutorial-basics/congratulations', 'cfc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Tutorial/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/docs/Tutorial/tutorial-basics/create-a-blog-post', '7e7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Tutorial/tutorial-basics/create-a-document',
                component: ComponentCreator('/docs/Tutorial/tutorial-basics/create-a-document', '241'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Tutorial/tutorial-basics/create-a-page',
                component: ComponentCreator('/docs/Tutorial/tutorial-basics/create-a-page', '760'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Tutorial/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/docs/Tutorial/tutorial-basics/deploy-your-site', 'd0f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Tutorial/tutorial-basics/markdown-features',
                component: ComponentCreator('/docs/Tutorial/tutorial-basics/markdown-features', 'cf1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Tutorial/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/docs/Tutorial/tutorial-extras/manage-docs-versions', '0ff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Tutorial/tutorial-extras/translate-your-site',
                component: ComponentCreator('/docs/Tutorial/tutorial-extras/translate-your-site', 'a73'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
