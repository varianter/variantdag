import { FC } from 'react';
import styles from './Agenda.module.css';
import { Venue } from './venue/Venue';
import { FeatureSlot } from './feature-slot/FeatureSlot';
import { Feature, Program } from './types';
import { calculateSlotPositionStyle, getUniqueVenues } from './agendaUtils';

export const program: Program = {
  from: {
    hour: 10,
    minutes: 0,
  },
  to: {
    hour: 14,
    minutes: 30,
  },
  features: [
    {
      title: 'Snakke sammen',
      venue: 'Oktetten',
      from: {
        hour: 10,
        minutes: 0,
      },
      to: {
        hour: 12,
        minutes: 0,
      },
    },
    {
      title: 'Snakke etter lunsj',
      venue: 'Oktetten',
      from: {
        hour: 12,
        minutes: 30,
      },
      to: {
        hour: 14,
        minutes: 15,
      },
    },
    {
      title: 'Diskutere',
      venue: 'Sekstetten',
      from: {
        hour: 10,
        minutes: 15,
      },
      to: {
        hour: 11,
        minutes: 30,
      },
    },
    {
      title: 'Kverulere',
      venue: 'Kvartetten',
      from: {
        hour: 12,
        minutes: 0,
      },
      to: {
        hour: 14,
        minutes: 0,
      },
    },
  ],
};

type Props = {
  program: Program;
  renderFeature: (feature: Feature) => React.ReactElement;
};

export const Agenda: FC<Props> = ({ program, renderFeature }) => {
  const venues = getUniqueVenues(program.features).map((venue) => {
    const featuresInVenue = program.features.filter(
      (feature) => feature.venue === venue,
    );

    const features = featuresInVenue.map((feature) => (
      <FeatureSlot
        key={feature.title}
        style={calculateSlotPositionStyle(program, feature)}
      >
        {renderFeature(feature)}
      </FeatureSlot>
    ));

    return (
      <Venue key={venue} title={venue}>
        {features}
      </Venue>
    );
  });

  return <section className={styles.agenda}>{venues}</section>;
};
