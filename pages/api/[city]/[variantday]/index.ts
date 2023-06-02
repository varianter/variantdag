import { Program } from '@components/agenda/types/program';
import { NextApiRequest, NextApiResponse } from 'next';
import { createHash } from 'crypto';
import { isVenueEvent } from '@components/agenda/utils/featureUtils';

const calendar = (events: string) => `
BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//variantdag//1.0//NO
CALSCALE:GREGORIAN
METHOD:PUBLISH
${events}
END:VCALENDAR
`;

const eventString = (
  revisionSequence: number,
  summary: string,
  hashUID: string,
  status: string,
  dateStart: string,
  dateEnd: string,
  dateStamp: string,
  location: string,
  description: string,
) => `
BEGIN:VEVENT
SUMMARY:${summary}
UID:${hashUID}
SEQUENCE:${revisionSequence}
STATUS:${status}
TRANSP:TRANSPARENT
DTSTART:${dateStart}
DTEND:${dateEnd}
DTSTAMP:${dateStamp}
CATEGORIES:Variantdag
LOCATION:${location}
DESCRIPTION:${description}
END:VEVENT
`;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { city, variantday } = req.query;

  res.setHeader('Cache-Control', 'max-age=3600, must-revalidate');
  res.setHeader('Content-Disposition', 'attachment; filename="agenda.ics"');
  res.setHeader('Content-Type', 'text/calendar; charset=utf-8');

  const program: Program =
    require(`/program/${city}/${variantday}/program.ts`).program;

  const events = program.events
    .map((event) => {
      const hash = createHash('sha256').update(JSON.stringify(event));
      const hashUID = hash.digest('hex');
      const revisionSequence = 0;
      const summary = event.title;
      const status = 'CONFIRMED';
      const dateStart = `${program.date.replaceAll(
        '-',
        '',
      )}T${event.from.replaceAll(':', '')}00`;
      const dateEnd = `${program.date.replaceAll(
        '-',
        '',
      )}T${event.to.replaceAll(':', '')}00`;
      const dateStamp = new Date()
        .toISOString()
        .replace(/[-:]/g, '')
        .replace(/\.\d{3}/, '');
      const location = isVenueEvent(event) ? event.venue : '';
      const description = event.description ?? '';

      return eventString(
        revisionSequence,
        summary,
        hashUID,
        status,
        dateStart,
        dateEnd,
        dateStamp,
        location,
        description,
      );
    })
    .join('\n');

  const calendarString = calendar(events);
  res.status(200).send(calendarString);
}
