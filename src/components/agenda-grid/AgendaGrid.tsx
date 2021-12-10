import styles from './AgendaGrid.module.css';
import { Feature } from './feature/Feature';
import { Program } from './types/program';
import { getUniqueVenues } from './utils/featureUtils';
import {
  calculateFeaturePosition,
  calculateGridLayout,
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

  return (
    <section
      style={calculateGridLayout(program.from, program.to, uniqueVenues)}
      className={styles.grid}
    >
      {features}
    </section>
  );
};
