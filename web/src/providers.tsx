import { ReactNode } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/shared/config/queryClient/queryClient.ts';
import { ThemeProvider } from '@gravity-ui/uikit';

export interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme='dark'>{children}</ThemeProvider>
  </QueryClientProvider>
);

export default Providers;
