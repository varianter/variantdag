import { ThemeType, toStyle } from '../types/theme';
import { CSSProperties } from 'react';
import styles from './Feature.module.css';
import { Slot } from '../types/slot';

export interface Feature extends Slot {
  venue: string;
  theme: ThemeType;
  description?: string;
}

type Props = {
  feature: Feature;
  style?: CSSProperties;
};

export const Feature = ({
  feature: { title, from, to, theme, responsible },
  style,
}: Props) => {
  return (
    <div style={{ ...style, ...toStyle(theme) }} className={styles.feature}>
      <div>
        {from} - {to}
      </div>
      {responsible && <div className={styles.title}> {responsible}</div>}
      <div className={styles.title}> {title}</div>
    </div>
  );
};
