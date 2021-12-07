import { FC, HtmlHTMLAttributes } from 'react';
import styles from './RowSlot.module.css';
import cls from 'classnames';
import { Slot } from '../types';

/**
 * Describes a row in the Agenda table that span accross all venues.
 * Typically used to make an opening in the agenda table, such as a pause or lunch break.
 */
export interface RowSlot extends Slot {}

type Props = HtmlHTMLAttributes<HTMLDivElement> & {
  rowSlot: RowSlot;
};

export const RowSlot: FC<Props> = ({
  rowSlot,
  className,
  children,
  ...rest
}) => {
  return (
    <div className={cls(styles.rowSlot, className)} {...rest}>
      {children}
    </div>
  );
};
