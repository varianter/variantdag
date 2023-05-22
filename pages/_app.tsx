import { FC } from 'react';
import { SiteLayout } from '@components';
import '@styles/global.css';

interface AppProps {
  Component: FC<any>;
  pageProps: any;
}

const VariantdagApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <SiteLayout>
      <Component {...pageProps} />
    </SiteLayout>
  );
};

export default VariantdagApp;
