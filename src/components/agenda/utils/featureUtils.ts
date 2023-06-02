import { Event, VenueEvent } from '../types/program';

export const getUniqueVenues = (events: Event[]): string[] =>
  events
    .filter(isVenueEvent)
    .map((event) => event.venue)
    .filter((venue, index, venues) => venues.indexOf(venue) === index);

export function isVenueEvent(event: Event): event is VenueEvent {
  return 'venue' in event;
}
