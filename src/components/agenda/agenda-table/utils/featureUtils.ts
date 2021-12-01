import { Feature } from '../types';

export const getUniqueVenues = (features: Feature[]) =>
  features
    .map((feature) => feature.venue)
    .filter((venue, index, venues) => venues.indexOf(venue) === index);
