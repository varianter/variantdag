import { Program } from '@components/agenda/types/program';
import { Theme } from '@components/agenda/types/theme';

export const program: Program = {
  date: '2023-08-25',
  from: '12:30',
  to: '17:30',
  events: [
    {
      title: 'Velkommen',
      from: '12:30',
      to: '12:45',
      venue: 'Haus für Poesie',
      theme: Theme.ANNET,
    },
    {
      title: 'Grønnvasking med AI Linn',
      from: '12:45',
      to: '13:00',
      venue: 'Haus für Poesie',
      theme: Theme.LÆRE,
    },
    {
      title: 'Pause',
      from: '13:00',
      to: '13:15',
      venue: 'Haus für Poesie',
      theme: Theme.PAUSE,
    },
    {
      title: 'Ideer til bærekraftstiltak',
      from: '13:15',
      to: '14:15',
      venue: 'Haus für Poesie',
      theme: Theme.FELLES,
    },
    {
      title: 'Pause',
      from: '14:15',
      to: '14:30',
      venue: 'Haus für Poesie',
      theme: Theme.PAUSE,
    },
    {
      title: 'Setetrekk Martine',
      from: '14:30',
      to: '14:45',
      venue: 'Haus für Poesie',
      theme: Theme.LÆRE,
    },
    {
      title: 'Spark LLM Håkon & Trym',
      from: '14:45',
      to: '15:00',
      venue: 'Haus für Poesie',
      theme: Theme.LÆRE,
    },
    {
      title: 'Pause',
      from: '15:00',
      to: '15:15',
      venue: 'Haus für Poesie',
      theme: Theme.PAUSE,
    },
    {
      title: 'Big Science Carl Andreas',
      from: '15:15',
      to: '15:45',
      venue: 'Haus für Poesie',
      theme: Theme.LÆRE,
    },
    {
      title: 'Pause',
      from: '15:45',
      to: '16:00',
      venue: 'Haus für Poesie',
      theme: Theme.PAUSE,
    },
    {
      title: 'Presentasjonsevne Håkon',
      from: '16:00',
      to: '17:00',
      venue: 'Haus für Poesie',
      theme: Theme.FELLES,
    },
  ],
};
