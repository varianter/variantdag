import { Program } from '@components/agenda-grid/types/program';
import { Theme } from '@components/agenda-grid/types/theme';

export const program: Program = {
  from: '07:45',
  to: '11:30',
  features: [
    {
      title: 'Kaffe og mingling',
      from: '07:45',
      to: '08:00',
      venue: 'Amfiet',
      theme: Theme.PAUSE,
    },
    {
      title: 'Velkommen',
      from: '08:15',
      to: '09:00',
      venue: 'Amfiet',
      theme: Theme.FELLES,
    },
    {
      title: 'Hvordan gjør kunde fornøyd når man sier ting de ikke vil høre?',
      from: '09:30',
      to: '11:30',
      venue: 'Amfiet',
      theme: Theme.SKUDD,
    },
    {
      title:
        'Workshop om mye spennende opplegg som skal beskrives med veldig, veldig, veldig mange ord.',
      from: '09:30',
      to: '10:00',
      venue: 'Torsken',
      theme: Theme.LÆRE,
    },
    {
      title: 'Egenarbeid',
      from: '10:00',
      to: '11:30',
      venue: 'Torsken',
      theme: Theme.ANNET,
    },
  ],
  rows: [
    {
      title: 'Pause',
      from: '08:00',
      to: '08:15',
      theme: Theme.PAUSE,
    },
    {
      title: 'Wienerbrød og kaffe',
      from: '09:00',
      to: '09:30',
      theme: Theme.PAUSE,
    },
  ],
};
