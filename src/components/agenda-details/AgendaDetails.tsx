import { Feature } from '@components/agenda/feature/Feature';
import styles from './AgendaDetails.module.css';
import { FeatureDetails } from './feature-details/FeatureDetails';

type Props = {
  features: Feature[];
};

export const AgendaDetails = ({ features }: Props) => {
  const details = features.map((feature) => (
    <FeatureDetails key={feature.title} feature={feature} />
  ));

  return <article className={styles.agendaDetails}>{details}</article>;
};
