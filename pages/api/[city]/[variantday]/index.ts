import { Program } from '@components/agenda/types/program';
import { NextApiRequest, NextApiResponse } from 'next';

const testEvent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//ZContent.net//Zap Calendar 1.0//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
SUMMARY:Abraham Lincoln
UID:c7614cff-3549-4a00-9152-d25cc1fe077d
SEQUENCE:0
STATUS:CONFIRMED
TRANSP:TRANSPARENT
RRULE:FREQ=YEARLY;INTERVAL=1;BYMONTH=2;BYMONTHDAY=12
DTSTART:20080213
DTEND:20080214
DTSTAMP:20150421T141403
CATEGORIES:U.S. Presidents,Civil War People
LOCATION:Hodgenville\, Kentucky
GEO:37.5739497;-85.7399606
DESCRIPTION:Born February 12\, 1809\nSixteenth President (1861-1865)\n\n\n
\nhttp://AmericanHistoryCalendar.com
URL:http://americanhistorycalendar.com/peoplecalendar/1,328-abraham-lincoln
END:VEVENT
END:VCALENDAR`;

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

  const program: Program = require(`/program/${city}/${variantday}/program.ts`);

  const events = program.events
    .map((event) => {
      const revisionSequence = 0;
      const summary = event.title;
      const hashUID = 'c7614cff-3549-4a00-9152-d25cc1fe077d';
      const status = 'CONFIRMED';
      const dateStart = `${program.date}T${event.from}:00`;
      const dateEnd = `${program.date}T${event.to}:00`;
      const dateStamp = '20150421T141403';
      const location = 'Hodgenville, Kentucky';
      const description =
        'Born February 12, 1809\nSixteenth President (1861-1865)\n\n\n\nhttp://AmericanHistoryCalendar.com';

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
