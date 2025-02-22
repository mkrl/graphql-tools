import { FC, ReactNode } from 'react';
import {
  GitHubIcon,
  HiveFooter,
  PaperIcon,
  PencilIcon,
  PRODUCTS,
  ToolsLogo,
} from '@theguild/components';
import { getDefaultMetadata, getPageMap, GuildLayout } from '@theguild/components/server';
import '@theguild/components/style.css';
import { pageMap as changelogsPageMap } from './changelogs/[...slug]/page';

const description = PRODUCTS.TOOLS.title;
const websiteName = 'GraphQL Tools';

export const metadata = getDefaultMetadata({
  description,
  websiteName,
  productName: 'TOOLS',
});

const RootLayout: FC<{
  children: ReactNode;
}> = async ({ children }) => {
  let [meta, ...pageMap] = await getPageMap();
  pageMap = [
    {
      data: {
        // @ts-expect-error -- always MetaItem
        ...meta.data,
        changelogs: { type: 'page', title: 'Changelogs', theme: { layout: 'full' } },
      },
    },
    ...pageMap,
    { route: '/changelogs', name: 'changelogs', children: changelogsPageMap },
  ];
  return (
    <GuildLayout
      websiteName={websiteName}
      description={description}
      logo={<ToolsLogo fill="currentColor" className="h-auto w-8" />}
      layoutProps={{
        docsRepositoryBase: 'https://github.com/ardatan/graphql-tools/tree/master/website',
        footer: (
          <HiveFooter
            items={{
              resources: [
                {
                  children: 'Changelog',
                  href: '/changelogs',
                  title: 'Changelog',
                },
              ],
            }}
          />
        ),
      }}
      pageMap={pageMap}
      navbarProps={{
        navLinks: [{ href: '/changelogs', children: 'Changelog' }],
        developerMenu: [
          {
            href: '/docs',
            icon: <PaperIcon />,
            children: 'Documentation',
          },
          { href: 'https://the-guild.dev/blog', icon: <PencilIcon />, children: 'Blog' },
          {
            href: 'https://github.com/ardatan/graphql-tools',
            icon: <GitHubIcon />,
            children: 'GitHub',
          },
        ],
      }}
      lightOnlyPages={['/']}
    >
      {children}
    </GuildLayout>
  );
};

export default RootLayout;
