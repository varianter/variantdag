import { FC } from 'react';
import { format } from '../agenda-table/utils/timeUtils';
import styles from './AgendaRow.module.css';
import agendaStyles from '../Agenda.module.css';
import cls from 'classnames';
import { ThemeType, toStyle } from '../theme';
import { RowSlot } from '../agenda-table/row-slot/RowSlot';

export interface AgendaRow extends RowSlot {
  title: string;
  theme: ThemeType;
}

type Props = {
  row: AgendaRow;
};

export const AgendaRow: FC<Props> = ({ row }) => {
  return (
    <div
      style={toStyle(row.theme)}
      className={cls(agendaStyles.slot, styles.row)}
    >
      <div>
        {format(row.from)} - {format(row.to)}
      </div>
      <div className={styles.description}>{row.title}</div>
    </div>
  );
};
