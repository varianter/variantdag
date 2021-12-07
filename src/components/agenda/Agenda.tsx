import { FC } from 'react';
import { time } from './agenda-table/utils/timeUtils';
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
import { Theme } from './theme';

export const shortProgram: Program<AgendaFeature, AgendaRow> = {
  from: time('07:45'),
  to: time('12:30'),
  features: [
    {
      title: 'Kaffe og mingling',
      venueName: 'Amfiet',
      from: time('07:45'),
      to: time('08:15'),
      theme: Theme.FELLES,
    },
    {
      title: 'Velkommen til Variantdag!',
      venueName: 'Amfiet',
      from: time('08:15'),
      to: time('08:30'),
      theme: Theme.FELLES,
    },
    {
      title: 'Prosjektpresentasjon',
      venueName: 'Amfiet',
      from: time('08:30'),
      to: time('09:00'),
      theme: Theme.FELLES,
    },
    {
      title: 'Skudd: hvordan jobber vi sammen?',
      venueName: 'Amfiet',
      from: time('09:15'),
      to: time('11:30'),
      theme: Theme.SKUDD,
    },
    {
      title:
        'Egenarbeid. Kjempelang tekst som beskriver hva egenarbeid består av. Heisann, hoppsann, deisann.',
      venueName: 'Sekstetten',
      from: time('09:15'),
      to: time('11:30'),
      theme: Theme.LÆRE,
    },
    {
      title: 'Hvordan holde gode workshops?',
      venueName: 'Oktetten',
      from: time('09:15'),
      to: time('11:00'),
      theme: Theme.LÆRE,
    },
  ],
  rows: [
    {
      from: time('09:00'),
      to: time('09:15'),
      title: 'Pause',
      theme: Theme.PAUSE,
    },
    {
      from: time('11:30'),
      to: time('12:30'),
      title: 'Lunsj på Digs',
      theme: Theme.PAUSE,
    },
  ],
};

const renderFeature: FeatureRenderer<AgendaFeature> = (
  feature: AgendaFeature,
) => <AgendaFeature feature={feature} />;

const renderRow: RowRenderer<AgendaRow> = (row: AgendaRow) => (
  <AgendaRow row={row} />
);

const renderVenueHeader: HeaderRenderer = (venueName: VenueName) => (
  <AgendaHeader venueName={venueName} />
);

export const Agenda: FC = ({}) => {
  return (
    <article>
      <AgendaTable
        program={shortProgram}
        renderFeature={renderFeature}
        renderRow={renderRow}
        renderVenueHeader={renderVenueHeader}
        height={'1000px'}
      />
    </article>
  );
};
