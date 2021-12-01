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
export type VenueName = string; // e.g

/**
 * A time slot in the program
 */
export interface Slot {
  from: Time;
  to: Time;
}

/**
 * A presentation, meeting or similar
 */
export interface Feature extends Slot {
  title: string;
  venue: VenueName;
}

/**
 * Describes a row in the Agenda table that span accross all venues.
 * Typically used to make an opening in the agenda table, such as a pause or lunch break.
 */
export interface Row extends Slot {
  description?: string;
}

/**
 * The entire program of a conference. The variables 'from' and 'to' describes
 * the start and end times of the program, and is necessary for style calculations.
 */
export type Program = {
  from: Time;
  to: Time;
  features: Feature[];
  rows: Row[];
};