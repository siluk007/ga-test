import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export const site = 'https://siluk007.github.io/';

export const sharedConfig = {
  title: 'Test',
  logo: {
    light: '/src/assets/logo-light.svg',
    dark: '/src/assets/logo-dark.svg',
    replacesTitle: true,
  },
}

export default defineConfig({
  base: site,
  integrations: [
    starlight({
      ...sharedConfig,
      logo: {
        light: '/src/assets/logo-light.svg',
        dark: '/src/assets/logo-dark.svg',
        replacesTitle: true,
      },
      customCss: process.env.NO_GRADIENTS ? [] : ['/src/assets/landing.css'],
      locales: {
        root: { label: 'English', lang: 'en' },
      },
      sidebar: [
        {
          label: 'For Users',
          items: [
            {
              label: 'Start Here',
              items: [
                {
                  label: 'Getting Started',
                  link: 'users/getting-started',
                },
                {
                  label: 'Releases',
                  link: 'users/releases',
                }
              ],          
            },
            {
              label: 'Core Concepts',
              autogenerate: { directory: 'users/basics' },
            },
            {
              label: 'Contribution Guide',
              autogenerate: { directory: 'users/contributing' },
            }
          ]
        },
        {
          label: 'For Developers',
          items: [
            {
              label: 'Start Here',
              items: [
                {
                  label: 'Getting Started',
                  link: 'developers/getting-started',
                },
              ],          
            },
            {
              label: 'Integration Guide',
              autogenerate: { directory: 'developers/integration' },
    
            }
          ]
        },
        {
          label: "Ad Tech",
          items: [
            {
              label: 'Start Here',
              items: [
                {
                  label: 'Getting Started',
                  link: 'adtech/getting-started',
                },
              ],          
            },
            {
              label: 'Core Concepts',
              autogenerate: { directory: 'adtech/basics' },
            },
          ]
        }
      ],
      components: {
        Sidebar: './src/components/MultiSidebar.astro',
        EditLink: './src/components/EditLink.astro',
      },
    }),
  ],
});
