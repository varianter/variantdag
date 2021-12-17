import { CSSProperties } from 'react';
import styles from './Header.module.css';

type Props = {
  venue: string;
  style?: CSSProperties;
};

export const Header = ({ venue, style }: Props) => {
  return (
    <h3 className={styles.header} style={style}>
      {venue}
    </h3>
  );
};
