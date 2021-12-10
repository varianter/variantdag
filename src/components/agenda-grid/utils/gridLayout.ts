import { CSSProperties } from 'react';
import { Time, times } from '../types/time';

const format = (time: Time): string => `kl-${time.replace(':', '')}`;

const agendaTimesBetween = (start: Time, end: Time): Time[] =>
  times.slice(times.indexOf(start), times.indexOf(end));

export const calculateFeaturePosition = (
  from: Time,
  to: Time,
  venue: string,
): CSSProperties => ({
  gridColumn: `${venue}`,
  gridRowStart: format(from),
  gridRowEnd: format(to),
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
      '',
    ),
  };
};
