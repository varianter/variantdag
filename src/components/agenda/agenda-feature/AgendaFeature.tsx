import { FC } from 'react';
import { Feature } from '../agenda-table/types';
import { format } from '../agenda-table/utils/timeUtils';
import styles from './AgendaFeature.module.css';
import agendaStyles from '../Agenda.module.css';
import cls from 'classnames';
import { toStyle } from '../theme';

type Props = {
  feature: Feature;
};

export const AgendaFeature: FC<Props> = ({ feature }) => {
  return (
    <div
      style={toStyle(feature.theme)}
      className={cls(agendaStyles.slot, styles.feature)}
    >
      <div className={styles.times}>
        {format(feature.from)} - {format(feature.to)}
      </div>
      <div className={styles.title}>{feature.title}</div>
    </div>
  );
};
