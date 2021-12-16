import { PropsWithChildren } from 'react';
import {
  FeatureRenderer,
  HeaderRenderer,
  Program,
  RowRenderer,
  VenueName,
} from './agenda-table/types';
import { AgendaTable } from './agenda-table/AgendaTable';
import { AgendaHeader } from './agenda-header/AgendaHeader';
import { AgendaFeature } from './agenda-feature/AgendaFeature';
import { AgendaRow } from './agenda-row/AgendaRow';

const renderFeature: FeatureRenderer<AgendaFeature> = (
  feature: AgendaFeature,
) => <AgendaFeature feature={feature} />;

const renderRow: RowRenderer<AgendaRow> = (row: AgendaRow) => (
  <AgendaRow row={row} />
);

const renderVenueHeader: HeaderRenderer = (venueName: VenueName) => (
  <AgendaHeader venueName={venueName} />
);

type Props = PropsWithChildren<{
  program: Program<AgendaFeature, AgendaRow>;
}>;

export const Agenda = ({ program }: Props) => {
  return (
    <article>
      <AgendaTable
        program={program}
        renderFeature={renderFeature}
        renderRow={renderRow}
        renderVenueHeader={renderVenueHeader}
        height={'1000px'}
      />
    </article>
  );
};
