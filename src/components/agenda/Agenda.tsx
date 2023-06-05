import { CSSProperties } from 'react';
import styles from './Agenda.module.css';
import { Feature } from './feature/Feature';
import { Header } from './header/Header';
import { Row } from './row/Row';
import { Program } from './types/program';
import { getUniqueVenues, isVenueEvent } from './utils/featureUtils';
import {
  calculateFeaturePosition,
  calculateGridLayout,
  calculateRowPosition,
  calculateHeaderPosition,
} from './utils/gridLayout';

type Props = {
  program: Program;
  style?: CSSProperties;
};

export const Agenda = ({ program, style }: Props) => {
  const uniqueVenues = getUniqueVenues(program.events);

  const events = program.events.map((event) =>
    !isVenueEvent(event) ? (
      <Row
        row={event as Row}
        style={calculateRowPosition(event.from, event.to)}
        key={`${event.from}-${event.to}`}
      />
    ) : (
      <Feature
        feature={event as Feature}
        style={calculateFeaturePosition(event.from, event.to, event.venue)}
        key={`${event.venue}-${event.from}-${event.to}`}
      />
    ),
  );


  const headers = uniqueVenues.map((venue) => (
    <Header venue={venue} style={calculateHeaderPosition(venue)} key={venue} />
  ));

  return (
    <section
      style={{
        ...calculateGridLayout(program.from, program.to, uniqueVenues),
        ...style,
      }}
      className={styles.grid}
    >
      {headers}
      {events}
    </section>
  );
};
