import { ThemeType, toStyle } from '../types/theme';
import { Time } from '../types/time';
import { CSSProperties } from 'react';
import styles from './Feature.module.css';
import { Slot } from '../types/slot';

export interface Feature extends Slot {
  venue: string;
  theme: ThemeType;
}

type Props = {
  feature: Feature;
  style?: CSSProperties;
};

export const Feature = ({
  feature: { title, from, to, theme },
  style,
}: Props) => {
  return (
    <div style={{ ...style, ...toStyle(theme) }} className={styles.feature}>
      <div>
        {from} - {to}
      </div>
      <div className={styles.title}> {title}</div>
    </div>
  );
};
