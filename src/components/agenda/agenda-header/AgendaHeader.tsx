import { FC } from 'react';
import { VenueName } from '../agenda-table/types';
import styles from './AgendaHeader.module.css';

type Props = {
  venueName: VenueName;
};

export const AgendaHeader: FC<Props> = ({ venueName }) => {
  return (
    <header className={styles.header}>
      <h3>{venueName}</h3>
    </header>
  );
};
