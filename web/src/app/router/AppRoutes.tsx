import { ReactNode } from 'react';

import { URLS } from './urls.ts';
import { MainLazy } from '@/pages/Main/Main.lazy.tsx';
import { AttractionLazy } from '@/pages/Attraction/Attraction.lazy.ts';

interface Route {
  path: string;
  element: ReactNode;
}

export const appRoutes: Route[] = [
  {
    path: URLS.MAIN,
    element: <MainLazy />
  },
  {
    path: URLS.ID,
    element: <AttractionLazy />
  }
];
