import React from 'react';
import DocBreadcrumbs from '@theme-original/DocBreadcrumbs';
import {useEffect} from 'react';

export default function DocBreadcrumbsWrapper(props: any) {
  useEffect(() => {
    // Post-render tweak: force breadcrumb home icon to point to /welcome/overview
    const container = document.querySelector('nav.breadcrumbs');
    if (!container) return;
    const firstLink = container.querySelector('ul > li:first-child a') as HTMLAnchorElement | null;
    if (!firstLink) return;
    firstLink.setAttribute('href', '/welcome/overview');
    const handleClick = (e: Event) => {
      e.preventDefault();
      window.location.href = '/welcome/overview';
    };
    firstLink.addEventListener('click', handleClick);
    return () => firstLink.removeEventListener('click', handleClick);
  });
  return <DocBreadcrumbs {...props} />;
}


