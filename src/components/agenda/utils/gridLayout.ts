import { CSSProperties } from 'react';
import { Time, times } from '../types/time';

const format = (time: Time): string => `kl-${time.replace(':', '')}`;

const agendaTimesBetween = (start: Time, end: Time): Time[] =>
  times.slice(times.indexOf(start), times.indexOf(end));

export const calculateHeaderPosition = (venue: string): CSSProperties => ({
  gridRow: 'headers',
  gridColumn: venue,
});

export const calculateFeaturePosition = (
  from: Time,
  to: Time,
  venue: string,
): CSSProperties => ({
  gridRowStart: format(from),
  gridRowEnd: format(to),
  gridColumn: `${venue}`,
});

export const calculateRowPosition = (from: Time, to: Time): CSSProperties => ({
  gridRowStart: format(from),
  gridRowEnd: format(to),
  gridColumn: '1/-1',
});

export const calculateGridLayout = (
  from: Time,
  to: Time,
  venues: string[],
): CSSProperties => {
  return {
    gridTemplateColumns: venues.reduce(
      (acc, venue) => `${acc} [${venue}] 1fr`,
      '',
    ),
    gridTemplateRows: agendaTimesBetween(from, to).reduce(
      (acc, time) => `${acc} [${format(time)}] 1fr`,
      '[headers] 1fr',
    ),
  };
};
