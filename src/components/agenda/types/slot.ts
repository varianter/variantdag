import { Time } from './time';

/**
 * Base interface for agenda elements that has from and to time
 */
export interface Slot {
  title: string;
  from: Time;
  to: Time;
  responsible: string;
}
