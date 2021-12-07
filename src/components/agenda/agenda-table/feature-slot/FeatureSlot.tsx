import styles from './FeatureSlot.module.css';
import cls from 'classnames';
import { FC, HTMLAttributes } from 'react';
import { Slot, VenueName } from '../types';

/**
 * A slot for a presentation, meeting or similar
 */
export interface FeatureSlot extends Slot {
  venueName: VenueName;
}

type Props = HTMLAttributes<HTMLDivElement>;

export const FeatureSlot: FC<Props> = ({ className, children, ...rest }) => (
  <div className={cls(styles.featureSlot, className)} {...rest}>
    {children}
  </div>
);
