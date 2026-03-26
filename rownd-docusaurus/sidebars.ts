import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  mainSidebar: [
    {
      type: 'category',
      label: 'Welcome',
      collapsible: false,
      items: [
        'welcome/overview',
        'welcome/rownd-features',
        'welcome/getting-started',
        {
          type: 'category',
          label: 'Migrating to Rownd',
          items: [
            'migration/overview',
            'migration/auth0',
            'migration/cognito',
            'migration/firebase',
          ],
        },
        {
          type: 'category',
          label: 'Comparing Rownd',
          items: [
            'welcome/comparisons/overview',
            'welcome/comparisons/auth0',
            'welcome/comparisons/clerk',
            'welcome/comparisons/cognito',
            'welcome/comparisons/firebase',
            'welcome/comparisons/supabase',
            'welcome/comparisons/zitadel',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Configuration',
      collapsible: false,
      items: [
        'configuration/overview',
        'configuration/applications',
        'configuration/app-credentials',
        {
          type: 'category',
          label: 'Authentication methods',
          items: [
            'configuration/authentication-methods/overview',
            'configuration/authentication-methods/instant-users',
            'configuration/authentication-methods/email',
            'configuration/authentication-methods/phone-sms',
            'configuration/authentication-methods/apple',
            'configuration/authentication-methods/google',
            'configuration/authentication-methods/passkeys',
            'configuration/authentication-methods/guests',
            'configuration/authentication-methods/oauth',
            'configuration/authentication-methods/unverified',
            'configuration/authentication-methods/existing-authentication',
          ],
        },
        {
          type: 'category',
          label: 'Automations',
          items: [
            'configuration/automations/overview',
            'configuration/automations/sign-in-prompt',
          ],
        },
        {
          type: 'category',
          label: 'Cross-domain authentication',
          items: [
            'configuration/cross-domain/overview',
            'configuration/cross-domain/implementation',
          ],
        },
        {
          type: 'category',
          label: 'Custom domains',
          items: [
            'configuration/custom-domains/overview',
            'configuration/custom-domains/dns-records',
          ],
        },
        {
          type: 'category',
          label: 'Customizations',
          items: [
            'configuration/customizations/global-style',
            'configuration/customizations/email-customization',
            'configuration/customizations/sub-brands',
          ],
        },
        {
          type: 'category',
          label: 'Integrations',
          items: [
            'configuration/integrations/overview',
            'configuration/integrations/auth0',
            'configuration/integrations/firebase/overview',
            'configuration/integrations/firebase/google-cloud-platform-requirements',
            'configuration/integrations/firebase/realtime-database--defining-user-data-locations',
            'configuration/integrations/firebase/realtime-database',
            'configuration/integrations/airtable',
            'configuration/integrations/hubspot',
            'configuration/integrations/mailerlite',
            'configuration/integrations/token-validator',
            'configuration/integrations/webhooks',
          ],
        },
        {
          type: 'category',
          label: 'Magic links',
          items: [
            'magic-links/overview',
            'magic-links/authenticated',
            'magic-links/unauthenticated',
            'magic-links/platform',
            'magic-links/url-parameters',
          ],
        },
        {
          type: 'category',
          label: 'Mobile',
          items: [
            'configuration/mobile/overview',
            'configuration/mobile/android',
            'configuration/mobile/android-instant',
            'configuration/mobile/ios',
            'configuration/mobile/ios-app-clip',
            'configuration/mobile/mobile-app-settings',
          ],
        },
        {
          type: 'category',
          label: 'OpenID Connect',
          items: ['configuration/oidc/overview'],
        },
        {
          type: 'category',
          label: 'User accounts',
          items: [
            'configuration/user-accounts/overview',
            'configuration/user-accounts/user-profiles',
            'configuration/user-accounts/platform-user-table',
            'configuration/user-accounts/progressive-profiles',
            'configuration/user-accounts/groups',
          ],
        },
        {
          type: 'category',
          label: 'Payments',
          items: [
            'payments/overview',
            'payments/app-setup',
            'payments/stripe',
          ],
        },
        {
          type: 'category',
          label: 'Web3',
          items: [
            'configuration/web3/near-overview',
            'configuration/web3/near-examples',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Administration',
      collapsible: false,
      items: [
        'administration/account',
        'administration/teams',
      ],
    },
    {
      type: 'category',
      label: 'Security',
      collapsible: false,
      items: [
        'security/overview',
        {
          type: 'category',
          label: 'Attack mitigation',
          items: [
            'security/attack-mitigation/overview',
            'security/attack-mitigation/domain-allow-list',
            'security/attack-mitigation/suspicious-ip-throttling',
            'security/attack-mitigation/bot-detection',
          ],
        },
        'security/SOC2-type2',
        'security/hipaa-ready',
        'security/responsible-disclosure',
      ],
    },
  ],
};

export default sidebars;
