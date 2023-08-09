import { Time } from './time';
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
  responsible?: string;
  description?: string;
};

export type VenueEvent = Event & {
  venue: string;
};
