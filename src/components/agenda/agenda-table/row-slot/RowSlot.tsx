import { FC, HtmlHTMLAttributes } from 'react';
import styles from './RowSlot.module.css';
import cls from 'classnames';
import { Row } from '../types';

type Props = HtmlHTMLAttributes<HTMLDivElement> & {
  timeSlot: Row;
  renderContent: (slot: Row) => React.ReactElement;
};

export const RowSlot: FC<Props> = ({
  timeSlot,
  renderContent,
  className,
  ...rest
}) => {
  return (
    <div className={cls(styles.rowSlot, className)} {...rest}>
      {renderContent(timeSlot)}
    </div>
  );
};
