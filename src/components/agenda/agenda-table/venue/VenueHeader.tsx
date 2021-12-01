import { FC } from 'react';
import styles from './VenueHeader.module.css';

export const VenueHeader: FC = ({ children }) => {
  return <div className={styles.header}>{children}</div>;
};
