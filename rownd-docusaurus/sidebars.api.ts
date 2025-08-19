import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  apiSidebar: [
    {
      type: 'category',
      label: 'Get Started',
      items: [
        {
          type: 'category',
          label: 'Authentication',
          items: [
            'authentication/overview',
            'authentication/retrieve-jwk',
            'authentication/retrieve-oidc',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'App-Scoped Endpoints',
      items: [
        {
          type: 'category',
          label: 'Groups',
          items: [
            'groups/overview',
            'groups/platform/group-create',
            'groups/platform/group-read',
            'groups/platform/group-update',
            'groups/platform/group-delete',
            'groups/platform/group-list',
          ],
        },
        {
          type: 'category',
          label: 'Group Invitations',
          items: [
            'groups/platform/invites/invite-create',
            'groups/platform/invites/invite-read',
            'groups/platform/invites/invite-update',
            'groups/platform/invites/invite-delete',
            'groups/platform/invites/invite-list',
          ],
        },
        {
          type: 'category',
          label: 'Group Members',
          items: [
            'groups/platform/members/member-create',
            'groups/platform/members/member-read',
            'groups/platform/members/member-update',
            'groups/platform/members/member-delete',
            'groups/platform/members/member-list',
          ],
        },
        {
          type: 'category',
          label: 'Magic Links',
          items: ['authentication/create-magic-link'],
        },
        {
          type: 'category',
          label: 'OpenID Clients',
          items: [
            'oidc/clients/list',
            'oidc/clients/create',
            'oidc/clients/read',
            'oidc/clients/update',
            'oidc/clients/delete',
          ],
        },
        {
          type: 'category',
          label: 'User Profiles',
          items: [
            'user-profiles/app/insert-update',
            'user-profiles/app/get-user-data',
            'user-profiles/app/update-patch',
            'user-profiles/app/delete',
            'user-profiles/app/list-user-profiles',
            'user-profiles/app/retrieve-field',
            'user-profiles/app/update-field',
            'user-profiles/app/get-sample-data',
          ],
        },
        {
          type: 'category',
          label: 'User Sessions',
          items: ['user-sessions/app/revoke-user-sessions'],
        },
      ],
    },
    {
      type: 'category',
      label: 'User-Scoped Endpoints',
      items: [
        {
          type: 'category',
          label: 'Groups',
          items: [
            'groups/overview',
            'groups/user/group-create',
            'groups/user/group-read',
            'groups/user/group-update',
            'groups/user/group-delete',
            'groups/user/group-list',
          ],
        },
        {
          type: 'category',
          label: 'Group Invitations',
          items: [
            'groups/user/invites/invite-create',
            'groups/user/invites/invite-read',
            'groups/user/invites/invite-update',
            'groups/user/invites/invite-delete',
            'groups/user/invites/invite-list',
          ],
        },
        {
          type: 'category',
          label: 'Group Members',
          items: [
            'groups/user/members/member-create',
            'groups/user/members/member-read',
            'groups/user/members/member-update',
            'groups/user/members/member-delete',
            'groups/user/members/member-list',
          ],
        },
        {
          type: 'category',
          label: 'User Profiles',
          items: [
            'user-profiles/user/get-user-data',
            'user-profiles/user/update-put',
            'user-profiles/user/retrieve-field',
            'user-profiles/user/update-field',
          ],
        },
      ],
    },
  ],
};

export default sidebars;


