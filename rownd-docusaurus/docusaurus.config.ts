import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Rownd',
  tagline: 'Documentation',
  favicon: 'favicon.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://docs.rownd.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'rownd',
  projectName: 'docs',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

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
      {
        docs: {
          path: 'docs',
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl: undefined,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'sdk',
        path: 'sdk-reference',
        routeBasePath: 'sdk-reference',
        sidebarPath: './sidebars.sdk.ts',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'api',
        path: 'api-reference',
        routeBasePath: 'api-reference',
        sidebarPath: './sidebars.api.ts',
      },
    ],
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {from: '/sdk-reference/web/react---next-js', to: '/sdk-reference/web/react'},
          {from: '/', to: '/welcome/overview'},
        ],
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'logo/light.svg',
    navbar: {
      // Remove text title to avoid a clickable "Rownd" link
      title: undefined,
      logo: {
        alt: 'Rownd',
        src: 'logo/light.svg',
        srcDark: 'logo/dark.svg',
        width: 92,
        height: 24,
        href: '/welcome/overview',
      },
      items: [
        {to: '/welcome/overview', label: 'Documentation', position: 'left'},
        {to: '/sdk-reference/overview', label: 'SDK Reference', position: 'left'},
        {to: '/api-reference/authentication/overview', label: 'API Reference', position: 'left'},
        {href: 'https://rownd.io', label: 'Website', position: 'right'},
        {href: 'https://app.rownd.io', label: 'Dashboard', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `© ${new Date().getFullYear()} Rownd`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

// Add Font Awesome stylesheet
// Docusaurus supports a top-level "stylesheets" export on config
(config as any).stylesheets = [
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
];

export default config;
