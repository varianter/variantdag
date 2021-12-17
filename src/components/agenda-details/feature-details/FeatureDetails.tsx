import { Feature } from '@components/agenda/feature/Feature';
import styles from './FeatureDetails.module.css';

type Props = {
  feature: Feature;
};

export const FeatureDetails = ({ feature }: Props) => {
  return (
    <section className={styles.details}>
      <div>
        {feature.from} - {feature.to} ({feature.venue})
      </div>
      <h4 className={styles.title}>{feature.title}</h4>
      <p>{feature.description}</p>
    </section>
  );
};
