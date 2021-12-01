import { FC, HtmlHTMLAttributes } from 'react';
import styles from './RowTimeSlot.module.css';
import cls from 'classnames';
import { TimeSlot } from '../types';

type Props = HtmlHTMLAttributes<HTMLDivElement> & {
  timeSlot: TimeSlot;
  renderContent: (slot: TimeSlot) => React.ReactElement;
};

export const RowTimeSlot: FC<Props> = ({
  timeSlot,
  renderContent,
  className,
  ...rest
}) => {
  return (
    <div className={cls(styles.rowTimeSlot, className)} {...rest}>
      {renderContent(timeSlot)}
    </div>
  );
};
