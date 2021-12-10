import { Feature } from '../feature/Feature';
import { Time } from './time';

/**
 * Agenda program containg Features (e.g. talks, meetings, workshops)
 */
export type Program = {
  from: Time;
  to: Time;
  features: Feature[];
};
