import { createBrowserRouter, Outlet } from 'react-router-dom';
import { appRoutes } from './AppRoutes.tsx';

export const appRouter = createBrowserRouter([
  {
    element: <Outlet />,
    children: appRoutes
  }
]);
