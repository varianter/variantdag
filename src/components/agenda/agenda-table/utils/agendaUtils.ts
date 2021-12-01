import { DurationMinutes, Feature, Program, Slot, Time } from '../types';

export const getUniqueVenues = (features: Feature[]) =>
  features
    .map((feature) => feature.venue)
    .filter((venue, index, venues) => venues.indexOf(venue) === index);

export const asDuration = (time: Time) => time.hour * 60 + time.minutes;

export const percentageOf = (
  duration: DurationMinutes,
  totalDuration: DurationMinutes,
) => (duration / totalDuration) * 100;

export const getDuration = (program: Program): DurationMinutes =>
  asDuration(program.to) - asDuration(program.from);

export const calculateSlotPositionStyle = (program: Program, slot: Slot) => {
  const programDuration = getDuration(program);
  const slotDuration = asDuration(slot.to) - asDuration(slot.from);

  return {
    height: `${(slotDuration / programDuration) * 100}%`,
    top: `${
      ((asDuration(slot.from) - asDuration(program.from)) / programDuration) *
      100
    }%`,
  };
};
