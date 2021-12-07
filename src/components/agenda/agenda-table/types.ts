import { FeatureSlot } from './feature-slot/FeatureSlot';
import { RowSlot } from './row-slot/RowSlot';

/**
 * Duration created from hours and minutes used for relative time calculation.
 *
 * Example: 10:30 => 10*60 minutes + 30 minutes = 630 minutes
 */
export type DurationMinutes = number;

export type Time = {
  hour: number;
  minutes: number;
};

/**
 * Location of a feature, such as a presentation or meeting:
 *
 * Examples: "Oktetten", "Amfiet"
 */
export type VenueName = string;

/**
 * A time slot in the program
 */
export interface Slot {
  from: Time;
  to: Time;
}

/**
 * The entire program of a conference. The variables 'from' and 'to' describes
 * the start and end times of the program, and is necessary for style calculations.
 *
 * The base interfaces FeatureSlot and RowSlot contains the properties required by AgendaTable.
 * However, in order to allow writing render functions for Row and Feature slots, the base
 * interfaces may be extended and used instead.
 */
export type Program<
  T extends FeatureSlot = FeatureSlot,
  K extends RowSlot = RowSlot,
> = {
  from: Time;
  to: Time;
  features: T[];
  rows: K[];
};

/**
 * Any function that implements the render functions, can be used to control how
 * rows, features and headers are displayed in the AgendaTable. Extend the RowSlot and FeatureSlot
 * interfaces to allow rendering with additional properties.
 */
export type RowRenderer<T extends RowSlot> = (row: T) => JSX.Element;

export type FeatureRenderer<T extends FeatureSlot> = (
  feature: T,
) => JSX.Element;

export type HeaderRenderer = (venueName: VenueName) => JSX.Element;
