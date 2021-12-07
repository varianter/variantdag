import { FeatureSlot } from '../feature-slot/FeatureSlot';

export const getUniqueVenues = (features: FeatureSlot[]) =>
  features
    .map((feature) => feature.venueName)
    .filter((venue, index, venues) => venues.indexOf(venue) === index);
