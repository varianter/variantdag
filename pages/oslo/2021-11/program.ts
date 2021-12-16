import { AgendaFeature } from '@components/agenda/agenda-feature/AgendaFeature';
import { AgendaRow } from '@components/agenda/agenda-row/AgendaRow';
import { Program } from '@components/agenda/agenda-table/types';
import { time } from '@components/agenda/agenda-table/utils/timeUtils';
import { Theme } from '@components/agenda/theme';

export const program: Program<AgendaFeature, AgendaRow> = {
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
