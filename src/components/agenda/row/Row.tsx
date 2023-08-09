import { CSSProperties } from 'react';
import { Slot } from '../types/slot';
import { ThemeType, toStyle } from '../types/theme';
import styles from './Row.module.css';

export interface Row extends Slot {
  theme: ThemeType;
}

type Props = {
  row: Row;
  style?: CSSProperties;
};

export const Row = ({ row, style }: Props) => (
  <div style={{ ...style, ...toStyle(row.theme) }} className={styles.row}>
    <div>
      {row.from} - {row.to}
    </div>
    <div className={styles.title}>
      {row.title}
      {row.responsible}
    </div>
  </div>
);
