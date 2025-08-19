import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  sdkSidebar: [
    {
      type: 'category',
      label: 'Get Started',
      collapsible: false,
      items: ['overview'],
    },
    {
      type: 'category',
      label: 'Mobile',
      collapsible: false,
      items: [
        'mobile/overview',
        'mobile/android',
        'mobile/flutter',
        'mobile/ios',
        'mobile/react-native',
        'mobile/expo',
      ],
    },
    {
      type: 'category',
      label: 'Web',
      collapsible: false,
      items: [
        'web/overview',
        {
          type: 'category',
          label: 'Javascript',
          items: [
            'web/javascript--api-reference',
            'web/javascript--browser',
          ],
        },
        'web/angular',
        'web/html',
        'web/nextjs',
        'web/react',
        'web/remix',
        'web/ruby-on-rails',
        'web/vue',
        'web/wordpress---woocommerce',
      ],
    },
    {
      type: 'category',
      label: 'Backend / Server',
      collapsible: false,
      items: [
        'backend/overview',
        'web/django--python',
        'web/go',
        'web/node-js',
        'web/net-core',
        'web/ruby-on-rails',
        'backend/convex',
        'web/wordpress---woocommerce',
      ],
    },
  ],
};

export default sidebars;


