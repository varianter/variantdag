import styles from './FeatureSlot.module.css';
import cls from 'classnames';
import { FC, HTMLAttributes } from 'react';

type Props = HTMLAttributes<HTMLDivElement>;

export const FeatureSlot: FC<Props> = ({ className, children, ...rest }) => (
  <div className={cls(styles.featureSlot, className)} {...rest}>
    {children}
  </div>
);
