import { FC } from 'react';
import styles from './Venue.module.css';

export const Venue: FC = ({ children }) => {
  return (
    <div className={styles.venue}>
      <div className={styles.featureSlots}>{children}</div>
    </div>
  );
};
