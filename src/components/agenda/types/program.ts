import { Feature } from '../feature/Feature';
import { Time } from './time';
import { Row } from '../row/Row';

/**
 * Agenda program containg Features (e.g. talks, meetings, workshops)
 */
export type Program = {
  from: Time;
  to: Time;
  features: Feature[];
  rows: Row[];
};
