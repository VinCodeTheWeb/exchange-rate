import React from 'react';

export interface RouteProps {
  exact?: boolean;
  path: string;
  element: React.FC;
}

const HomePage = React.lazy(() => import('../pages/Home/Home'));

const routes: RouteProps[] = [
  {
    path: '/',
    element: HomePage,
  },
];

export { routes };
