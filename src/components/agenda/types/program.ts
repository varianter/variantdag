import { Feature } from '../feature/Feature';
import { Time } from './time';
import { Row } from '../row/Row';
import { ThemeType } from './theme';
import { Date } from './date';

/**
 * Agenda program containg Features (e.g. talks, meetings, workshops)
 */
export type Program = {
  date: Date;
  from: Time;
  to: Time;
  events: (Event | VenueEvent)[];
};

export type Event = {
  title: string;
  from: Time;
  to: Time;
  theme: ThemeType;
  description?: string;
};

export type VenueEvent = Event & {
  venue: string;
};
