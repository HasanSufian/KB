// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */

const config = {
  title: 'Knowledge Base',
  tagline: 'NBE Knowledge Base',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://hasansufian.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/KB/',


  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'HasanSufian', // Usually your GitHub org/user name.
  projectName: 'KB', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.

        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      pagination: {
        enabled: false,
      },
      navbar: {
        title: 'Home',
        items: [
          {
            type: 'doc',
            docId: 'update-summery',
            label: 'Update Summery',
            position: 'left',
          },
          {
            type: 'docSidebar',
            sidebarId: 'crmSidebar',
            position: 'right',
            label: 'CRM Guide',
          },
          {
            type: 'docSidebar',
            sidebarId: 'kbSidebar',
            position: 'left',
            label: 'KB',
          },
          {
            type: 'docSidebar',
            sidebarId: 'branchesSidebar',
            position: 'left',
            label: 'Branches',
          },

        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },

    }),

  plugins: [
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        // Option for Search Box [docusaurus-search-local plugin]

        // language of your documentation
        language: ["en", "ar"],
        // whether to index blog pages
        indexBlog: true,
        // whether to index static pages [/404.html is never indexed]
        indexPages: true,
        // whether to index docs pages
        indexDocs: true,
      }
    ]
  ],
};

module.exports = config;
