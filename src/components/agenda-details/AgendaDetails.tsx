import { Feature } from '@components/agenda/feature/Feature';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './AgendaDetails.module.css';
import { FeatureDetails } from './feature-details/FeatureDetails';

type Props = {
  events: Feature[];
};

export const AgendaDetails = ({ events }: Props) => {
  const router = useRouter();
  const currentUrl = router.asPath;

  const details = events.map((feature) => (
    <FeatureDetails key={feature.title} feature={feature} />
  ));

  return (
    <div>
      <Link href={`${currentUrl}.ics`}>
        <div className={styles.calendarLink}>Legg til i kalender</div>
      </Link>
      <article className={styles.agendaDetails}>{details}</article>
    </div>
  );
};
