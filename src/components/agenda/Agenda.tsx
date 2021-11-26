import { FC } from 'react';
import styles from './Agenda.module.css';
import { Venue } from './venue/Venue';
import { FeatureSlot } from './feature-slot/FeatureSlot';
import { Feature, Program, TimeSlot } from './types';
import {
  calculateSlotPositionStyle,
  getUniqueVenues,
  time,
} from './agendaUtils';
import { RowTimeSlot } from './row-time-slot/RowTimeSlot';
import { VenueHeader } from './venue/VenueHeader';

export const program: Program = {
  from: time('07:45'),
  to: time('13:00'),
  features: [
    {
      title: 'Kaffe og mingling',
      venue: 'Amfiet',
      from: time('07:45'),
      to: time('08:15'),
    },
    {
      title: 'Velkommen til Variantdag!',
      venue: 'Amfiet',
      from: time('08:15'),
      to: time('08:30'),
    },
    {
      title: 'Prosjektpresentasjon',
      venue: 'Amfiet',
      from: time('08:30'),
      to: time('09:00'),
    },
    {
      title: 'Skudd: hvordan jobber vi sammen?',
      venue: 'Amfiet',
      from: time('09:15'),
      to: time('11:30'),
    },
    {
      title:
        'Egenarbeid. Kjempelang tekst som beskriver hva egenarbeid består av. Heisann, hoppsann, deisann.',
      venue: 'Sekstetten',
      from: time('09:15'),
      to: time('11:30'),
    },
    {
      title: 'Hvordan holde gode workshops?',
      venue: 'Oktetten',
      from: time('09:15'),
      to: time('11:30'),
    },
  ],
  rowTimeSlots: [
    // {
    //   from: time('07:45'),
    //   to: time('08:15'),
    // },
    {
      from: time('08:15'),
      to: time('09:00'),
    },
    {
      from: time('09:00'),
      to: time('09:15'),
      description: 'Pause',
    },
    {
      from: time('09:15'),
      to: time('11:30'),
    },
    {
      from: time('11:30'),
      to: time('12:30'),
      description: 'Lunsj på Digs',
    },
  ],
};

type Props = {
  program: Program;
  renderFeature: (feature: Feature) => React.ReactElement;
};

export const Agenda: FC<Props> = ({ program, renderFeature }) => {
  const uniqueVenues = getUniqueVenues(program.features);

  const venueHeaders = uniqueVenues.map((venue) => (
    <VenueHeader key={venue}>{venue}</VenueHeader>
  ));

  const venues = uniqueVenues.map((venue) => {
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

    return <Venue key={venue}>{features}</Venue>;
  });

  const rowTimeSlots = program.rowTimeSlots.map((row: TimeSlot) => (
    <RowTimeSlot
      key={`${row.from}+${row.to}`}
      style={calculateSlotPositionStyle(program, row)}
      timeSlot={row}
      renderContent={(slot) => <div>{slot.description}</div>}
    />
  ));

  return (
    <section className={styles.agenda}>
      <div className={styles.venueHeaders}>{venueHeaders}</div>
      <div className={styles.content}>
        <div className={styles.rowTimeSlots}>{rowTimeSlots}</div>
        <div className={styles.venues}>{venues}</div>
      </div>
    </section>
  );
};
