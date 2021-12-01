import renderer from 'react-test-renderer';
import { AgendaTable } from './AgendaTable';
import { Program } from './types';
import { time } from './utils/timeUtils';

export const simpleProgram: Program = {
  from: time('12:30'),
  to: time('16:00'),
  features: [
    {
      title: 'Samarbeidscage for design',
      venue: 'Digs 5. egt - East',
      from: time('12:30'),
      to: time('13:45'),
    },
    {
      title: 'Planlegging av skudd: sky',
      venue: 'Digs 5. etg - West',
      from: time('13:00'),
      to: time('14:45'),
    },
    {
      title: 'Bærekraft og OKR',
      venue: 'Lounge på Digs',
      from: time('12:30'),
      to: time('14:45'),
    },
    {
      title: 'OKR Q4 \n Selskapsstatus',
      venue: 'Digs 5. egt - East',
      from: time('15:00'),
      to: time('16:00'),
    },
  ],
  rows: [
    {
      from: time('14:45'),
      to: time('15:00'),
      description: 'Pause',
    },
  ],
};

const renderBox = (content: any) => <div>{JSON.stringify(content)}</div>;

describe('AgendaTable', () => {
  it('Renders slots of correct size', () => {
    const agenda = renderer.create(
      <AgendaTable
        program={simpleProgram}
        renderFeature={renderBox}
        renderRow={renderBox}
        renderVenueHeader={renderBox}
        height={'1200px'}
      />,
    );

    expect(agenda).toMatchSnapshot();
  });
});