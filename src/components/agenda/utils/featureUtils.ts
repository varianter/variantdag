import { Feature } from '../feature/Feature';

export const getUniqueVenues = (features: Feature[]) =>
  features
    .map((feature) => feature.venue)
    .filter((venue, index, venues) => venues.indexOf(venue) === index);
