import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const simplePlantUML = require("@akebifiky/remark-simple-plantuml"); // объявляем плагин для plantuml

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'RunMate',
  tagline: 'Сервис поиска компаньона для пробежек',
  favicon: 'img/favicon.ico',
  url: 'https://sonya21adammali.github.io',
  baseUrl: 'doc-as-a-code-runmate',
  organizationName: 'sonya21adammali',
  projectName: 'doc-as-a-code-runmate',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false,
  deploymentBranch: 'gh-pages',

  plugins: [
    ['drawio', {}]
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/sonya21adammali/doc-as-a-code-runmate',
          remarkPlugins: [simplePlantUML], //подключаем плагин для plantuml
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
    // Плагин для OpenAPI
    [
    'redocusaurus',
    {
      specs: [
        {
          id: 'runMate',
          spec: 'api_specs/openapi.yaml',
        },
      ],
      theme: {
        primaryColor: '#1890ff',
      },
    }
  ],
],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'RunMate',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png',
        },
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Docs',
                to: '/docs/intro',
              },
            ],
          },
          {
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
                label: 'X',
                href: 'https://x.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/sonya21adammali/doc-as-a-code-runmate',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} RunMate, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
