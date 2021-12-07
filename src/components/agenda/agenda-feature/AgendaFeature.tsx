import { FC } from 'react';
import { format } from '../agenda-table/utils/timeUtils';
import styles from './AgendaFeature.module.css';
import agendaStyles from '../Agenda.module.css';
import cls from 'classnames';
import { ThemeType, toStyle } from '../theme';
import { FeatureSlot } from '../agenda-table/feature-slot/FeatureSlot';

export interface AgendaFeature extends FeatureSlot {
  title: string;
  theme: ThemeType;
}

type Props = {
  feature: AgendaFeature;
};

export const AgendaFeature: FC<Props> = ({ feature }) => {
  return (
    <div style={toStyle(feature.theme)} className={cls(agendaStyles.slot)}>
      <div>
        {format(feature.from)} - {format(feature.to)}
      </div>
      <div className={styles.title}>{feature.title}</div>
    </div>
  );
};
