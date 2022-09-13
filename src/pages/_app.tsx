import { ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import { FC, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import '../styles/globals.css';
import { theme } from '../themes';

const queryClientOption = {
  defaultOptions: {
    queries: { refetchOnWindowFocus: false, retry: false, staleTime: 1000 * 5 },
  },
};

const MyApp: FC<AppProps> = (props) => {
  const { Component, pageProps } = props;
  const [queryClient] = useState(() => new QueryClient(queryClientOption));
  return (
    <>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </ThemeProvider>
    </>
  )

}

export default MyApp
