import { FC } from 'react';
import styles from './AgendaTable.module.css';
import { Venue } from './venue/Venue';
import { FeatureSlot } from './feature-slot/FeatureSlot';
import {
  FeatureRenderer,
  HeaderRenderer,
  Program,
  RowRenderer,
  VenueName,
} from './types';
import { calculateSlotPositionStyle } from './utils/durationUtils';
import { getUniqueVenues } from './utils/featureUtils';
import { RowSlot } from './row-slot/RowSlot';
import { VenueHeader } from './venue/VenueHeader';
import { format } from './utils/timeUtils';

const generateVenueHeaders = (
  uniqueVenues: VenueName[],
  renderVenueHeader: HeaderRenderer,
) =>
  uniqueVenues.map((venue) => (
    <VenueHeader key={venue}>{renderVenueHeader(venue)}</VenueHeader>
  ));

const generateVenues = <T extends FeatureSlot, K extends RowSlot>(
  uniqueVenues: VenueName[],
  program: Program<T, K>,
  renderFeature: FeatureRenderer<T>,
) =>
  uniqueVenues.map((venueName) => {
    const featuresInVenue = program.features.filter(
      (feature) => feature.venueName === venueName,
    );

    const features = featuresInVenue.map((feature) => (
      <FeatureSlot
        key={`${format(feature.from)}-${format(feature.to)}-${
          feature.venueName
        }`}
        style={calculateSlotPositionStyle(program, feature)}
      >
        {renderFeature(feature)}
      </FeatureSlot>
    ));

    return <Venue key={venueName}>{features}</Venue>;
  });

const generateRows = <T extends FeatureSlot, K extends RowSlot>(
  program: Program<T, K>,
  renderRow: RowRenderer<K>,
) =>
  program.rows.map((row: K) => (
    <RowSlot
      key={`${format(row.from)}-${format(row.to)}`}
      style={calculateSlotPositionStyle(program, row)}
      rowSlot={row}
    >
      {renderRow(row)}
    </RowSlot>
  ));

type Props<T extends FeatureSlot, K extends RowSlot> = {
  program: Program<T, K>;
  height: string;
  renderFeature: FeatureRenderer<T>;
  renderRow: RowRenderer<K>;
  renderVenueHeader: HeaderRenderer;
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
export const AgendaTable = <T extends FeatureSlot, K extends RowSlot>({
  program,
  height,
  renderFeature,
  renderRow,
  renderVenueHeader,
}: Props<T, K>) => {
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
