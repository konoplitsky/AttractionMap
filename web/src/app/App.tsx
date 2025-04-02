import { RouterProvider } from 'react-router-dom';
import { appRouter } from './router/AppRouter.tsx';

export const App = () => <RouterProvider router={appRouter} />;
