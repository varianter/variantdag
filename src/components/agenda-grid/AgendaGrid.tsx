import styles from './AgendaGrid.module.css';
import { Feature } from './feature/Feature';
import { Header } from './header/Header';
import { Row } from './row/Row';
import { Program } from './types/program';
import { getUniqueVenues } from './utils/featureUtils';
import {
  calculateFeaturePosition,
  calculateGridLayout,
  calculateRowPosition,
  calculateHeaderPosition,
} from './utils/gridLayout';

type Props = {
  program: Program;
};

export const AgendaGrid = ({ program }: Props) => {
  const uniqueVenues = getUniqueVenues(program.features);

  const features = program.features.map((feature) => (
    <Feature
      feature={feature}
      style={calculateFeaturePosition(feature.from, feature.to, feature.venue)}
      key={`${feature.venue}-${feature.from}-${feature.to}`}
    />
  ));

  const rows = program.rows.map((row) => (
    <Row
      row={row}
      style={calculateRowPosition(row.from, row.to)}
      key={`${row.from}-${row.to}`}
    />
  ));

  const headers = uniqueVenues.map((venue) => (
    <Header venue={venue} style={calculateHeaderPosition(venue)} key={venue} />
  ));

  return (
    <section
      style={calculateGridLayout(program.from, program.to, uniqueVenues)}
      className={styles.grid}
    >
      {headers}
      {features}
      {rows}
    </section>
  );
};
