import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import nav from '../../../.cache/nav';
import { NavItem } from '../../types';
import { Subnav2 } from './SubnavV2';

interface NavObject {
  [key: string]: NavItem;
}

type NavObjects = NavObject | undefined;

function Subnav() {
  const { asPath } = useRouter();
  const [navItems, setNavItems] = useState<NavObjects>();

  /**
   * We need to run this on the client side because anchor links are not passed
   * to the server
   */
  useEffect(() => {
    setNavItems(getNavItems(asPath));
  }, [asPath]);

  if (!navItems) {
    console.warn('No subnav items found for path:', asPath);
    return null;
  }

  const sortedNavItems = Object.entries(navItems).sort(([_a, a], [_b, b]) => {
    if (a.order && b.order) return a.order > b.order ? 1 : -1;
    return 0;
  });

  return (
    <Subnav2>
      {sortedNavItems.map(([key, navItem]) => (
        <Subnav2.Item
          key={key}
          href={navItem.slug || './'}
          active={asPath === navItem.slug}
          icon={navItem.icon}
        >
          {navItem.title}
        </Subnav2.Item>
      ))}
    </Subnav2>
  );
}

function getNavItems(path: string): { [key: string]: NavItem } | undefined {
  const anchor = path.indexOf('#');

  // remove the anchor link from path if exists
  if (anchor >= 0) {
    path = path.substring(0, anchor);
  }

  const paths = path.split('/').filter((segment) => segment);

  const navItemPath = paths.join('.children.');
  const currentNavItem = getObjectValue<NavItem>(nav.children, navItemPath);

  const isOverviewPage = currentNavItem?.children !== undefined;

  // Get the parent nav item if we're on a subpage
  const parentItemPath = paths.slice(0, -1).join('.children.');
  const parentNavItem = isOverviewPage
    ? currentNavItem
    : getObjectValue<NavItem>(nav.children, parentItemPath);

  // Return if we're on a page that doesn't have a subnav
  if (!parentNavItem) return;

  return {
    overview: {
      title: 'Overview',
      slug: parentNavItem?.slug,
      order: 0,
      icon: 'Polaris',
    },
    ...parentNavItem.children,
  };
}

function getObjectValue<T>(obj: any, path: string): T | undefined {
  const keys = path.split('.');
  let value = obj;

  for (const key of keys) {
    if (value && typeof value === 'object' && key in value) {
      value = value[key];
    } else {
      return undefined;
    }
  }

  return value;
}

export default Subnav;
