import type { AppProps } from 'next/app';
import { FC } from 'react';
import { SiteLayout } from '@components';
import '@styles/global.css';

const VariantdagApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <SiteLayout>
      <Component {...pageProps} />
    </SiteLayout>
  );
};

export default VariantdagApp;
