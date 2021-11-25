import { FC } from 'react';
import styles from './Venue.module.css';

type Props = {
  title: string;
};

export const Venue: FC<Props> = ({ children, title }) => {
  return (
    <div className={styles.venue}>
      <div className={styles.venueTitle}>{title}</div>
      <div className={styles.venueContent}>{children}</div>
    </div>
  );
};
