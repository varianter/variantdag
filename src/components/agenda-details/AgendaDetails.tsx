import { Feature } from '@components/agenda/feature/Feature';
import styles from './AgendaDetails.module.css';
import { FeatureDetails } from './feature-details/FeatureDetails';

type Props = {
  events: Feature[];
};

export const AgendaDetails = ({ events }: Props) => {
  const details = events.map((feature) => (
    <FeatureDetails key={feature.title} feature={feature} />
  ));

  return <article className={styles.agendaDetails}>{details}</article>;
};
