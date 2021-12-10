import { AgendaGrid } from './AgendaGrid';
import renderer from 'react-test-renderer';
import { Program } from './types/program';
import { Theme } from './types/theme';

const program: Program = {
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
      from: '09:15',
      to: '11:30',
      venue: 'Amfiet',
      theme: Theme.SKUDD,
    },
    {
      title:
        'Workshop om mye spennende opplegg som skal beskrives med veldig, veldig, veldig mange ord.',
      from: '09:15',
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
};

describe('AgendaGrid', () => {
  it('renders a populated agenda', () => {
    const agenda = renderer.create(<AgendaGrid program={program} />);

    expect(agenda).toMatchSnapshot();
  });
});
