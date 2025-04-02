import { createRoot } from 'react-dom/client';
import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';

import { App } from '@/app/App.tsx';
import Providers from './providers.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <Providers>
    <App />
  </Providers>
);
