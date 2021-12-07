import { FC } from 'react';
import { Row } from '../agenda-table/types';
import { format } from '../agenda-table/utils/timeUtils';
import styles from './AgendaRow.module.css';
import agendaStyles from '../Agenda.module.css';
import cls from 'classnames';
import { toStyle } from '../theme';

type Props = {
  row: Row;
};

export const AgendaRow: FC<Props> = ({ row }) => {
  return (
    <div
      style={toStyle(row.theme)}
      className={cls(agendaStyles.slot, styles.row)}
    >
      <div className={styles.times}>
        {format(row.from)} - {format(row.to)}
      </div>
      <div className={styles.description}>{row.description}</div>
    </div>
  );
};
