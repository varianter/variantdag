import { FC } from 'react';
import { time, format } from './agenda-table/utils/timeUtils';
import { Feature, Program, TimeSlot, Venue } from './agenda-table/types';
import { AgendaTable } from './agenda-table/AgendaTable';

export const programPartOne: Program = {
  from: time('07:45'),
  to: time('12:30'),
  features: [
    {
      title: 'Kaffe og mingling',
      venue: 'Amfiet',
      from: time('07:45'),
      to: time('08:15'),
    },
    {
      title: 'Velkommen til Variantdag!',
      venue: 'Amfiet',
      from: time('08:15'),
      to: time('08:30'),
    },
    {
      title: 'Prosjektpresentasjon',
      venue: 'Amfiet',
      from: time('08:30'),
      to: time('09:00'),
    },
    {
      title: 'Skudd: hvordan jobber vi sammen?',
      venue: 'Amfiet',
      from: time('09:15'),
      to: time('11:30'),
    },
    {
      title:
        'Egenarbeid. Kjempelang tekst som beskriver hva egenarbeid består av. Heisann, hoppsann, deisann.',
      venue: 'Sekstetten',
      from: time('09:15'),
      to: time('11:30'),
    },
    {
      title: 'Hvordan holde gode workshops?',
      venue: 'Oktetten',
      from: time('09:15'),
      to: time('11:30'),
    },
  ],
  rowTimeSlots: [
    {
      from: time('09:00'),
      to: time('09:15'),
      description: 'Pause',
    },
    {
      from: time('11:30'),
      to: time('12:30'),
      description: 'Lunsj på Digs',
    },
  ],
};

export const programPartTwo: Program = {
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
      from: time('12:30'),
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
  rowTimeSlots: [
    {
      from: time('14:45'),
      to: time('15:00'),
      description: 'Pause',
    },
  ],
};

const renderFeature = (feature: Feature) => (
  <>
    <div>
      {format(feature.from)} - {format(feature.to)}
    </div>
    <div>{feature.title}</div>
  </>
);

const renderRow = (slot: TimeSlot) => (
  <div>
    {format(slot.from)} - {format(slot.to)} {slot.description}
  </div>
);

const renderVenueHeader = (venue: Venue) => <h4>{venue}</h4>;

export const Agenda: FC = ({}) => {
  return (
    <div>
      <AgendaTable
        program={programPartOne}
        renderFeature={renderFeature}
        renderRow={renderRow}
        renderVenueHeader={renderVenueHeader}
        height={'1200px'}
      />

      <div style={{ height: '100px' }} />

      <AgendaTable
        program={programPartTwo}
        renderFeature={renderFeature}
        renderRow={renderRow}
        renderVenueHeader={renderVenueHeader}
        height={'400px'}
      />
    </div>
  );
};
