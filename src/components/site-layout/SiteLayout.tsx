import { FC } from 'react';
import styles from './SiteLayout.module.css';

export const SiteLayout: FC = ({ children }) => {
  return <div className={styles.site}>{children}</div>;
};
