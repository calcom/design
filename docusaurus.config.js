const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Cal.com Design Documentation',
  tagline: 'Open Scheduling',
  url: 'https://design.cal.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'calendso', // Usually your GitHub org/user name.
  projectName: 'design', // Usually your repo name.
  themeConfig: {
    announcementBar: {
      id: 'beta',
      content:
        '<strong>Our design system is in alpha preview.</strong> This site is under development and will be updated frequently.',
      backgroundColor: '#F97316',
      textColor: '#FFF7ED',
      isCloseable: false,
    },
    navbar: {
      logo: {
        alt: 'Cal.com Logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo-white.svg'
      },
      items: [
        {href: 'https://docs.cal.com', label: 'Product Docs', position: 'left'},
        {href: 'https://developer.cal.com', label: 'Developer', position: 'left'},
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Design',
        },
        {
          href: 'https://github.com/calendso/calendso',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Cal.com, Inc.',
          items: [
            {
              label: 'Website',
              href: 'https://cal.com',
            },
            {
              label: 'Slack',
              href: 'https://cal.com/slack',
            },
            {
              label: 'Jobs',
              href: 'https://cal.com/jobs',
            },
          ],
        },
        {
          title: 'Repositories',
          items: [
            {
              label: 'Calendso',
              href: 'https://github.com/calendso/calendso',
            },
            {
              label: 'Documentation',
              href: 'https://github.com/calendso/docs',
            },
            {
              label: 'Docker',
              href: 'https://github.com/calendso/docker',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/calendso',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/calendso/calendso',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Cal.com, Inc.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
              'https://github.com/calendso/design/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
              'https://github.com/calendso/design/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
