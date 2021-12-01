import { FC } from 'react';
import styles from './AgendaTable.module.css';
import { Venue } from './venue/Venue';
import { FeatureSlot } from './feature-slot/FeatureSlot';
import { VenueName, Feature, Program, Row } from './types';
import { calculateSlotPositionStyle } from './utils/durationUtils';
import { getUniqueVenues } from './utils/featureUtils';
import { RowSlot } from './row-slot/RowSlot';
import { VenueHeader } from './venue/VenueHeader';
import { format } from './utils/timeUtils';

const generateVenueHeaders = (
  uniqueVenues: VenueName[],
  renderVenueHeader: (venue: string) => React.ReactElement,
) =>
  uniqueVenues.map((venue) => (
    <VenueHeader key={venue}>{renderVenueHeader(venue)}</VenueHeader>
  ));

const generateVenues = (
  uniqueVenues: VenueName[],
  program: Program,
  renderFeature: (feature: Feature) => React.ReactElement,
) =>
  uniqueVenues.map((venue) => {
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

const generateRows = (
  program: Program,
  renderRow: (timeSlot: Row) => React.ReactElement,
) =>
  program.rows.map((row: Row) => (
    <RowSlot
      key={`${format(row.from)}-${format(row.to)}`}
      style={calculateSlotPositionStyle(program, row)}
      timeSlot={row}
      renderContent={renderRow}
    />
  ));

type Props = {
  program: Program;
  height: string;
  renderFeature: (feature: Feature) => React.ReactElement;
  renderRow: (timeSlot: Row) => React.ReactElement;
  renderVenueHeader: (venue: VenueName) => React.ReactElement;
};

/**
 * Creates a Agenda with Venues (e.g 'Amfiet') containing one or more Features (e.g talks, presentations or workshops).
 * An Agenda may optionally include Rows - time slots that span accross all Venues - such as breaks or common events.
 * All Features and Rows are positioned relative to the overall height of the Agenda and may overlap.
 *
 * @param program - contains metadata for features and rows to be displayed in the agenda
 * @param height - the overall height of the agenda (e.g '1000px'). All agenda features will scale relative to this height.
 * @param renderFeature - determines how each feature is rendered
 * @param renderRow - determeines how each row is rendered
 * @param renderVenueHeader - determines how each venue header is rendered
 */
export const AgendaTable: FC<Props> = ({
  program,
  height,
  renderFeature,
  renderRow,
  renderVenueHeader,
}) => {
  const uniqueVenues = getUniqueVenues(program.features);
  const venueHeaders = generateVenueHeaders(uniqueVenues, renderVenueHeader);
  const venues = generateVenues(uniqueVenues, program, renderFeature);
  const rowSlots = generateRows(program, renderRow);

  return (
    <article style={{ height: height }} className={styles.agenda}>
      <header className={styles.venueHeaders}>{venueHeaders}</header>
      <main className={styles.content}>
        <div className={styles.rowSlots}>{rowSlots}</div>
        <div className={styles.venues}>{venues}</div>
      </main>
    </article>
  );
};
