import { Event, VenueEvent } from '../types/program';
import { Theme, ThemeType } from '../types/theme';
import { Card, Label, TrelloDescription, TrelloList } from '../types/trello';
import dotenv from 'dotenv';
import { Time, times } from '../types/time';

dotenv.config();
const apiKey = process.env.API_KEY;
const apiToken = process.env.API_TOKEN;

export const getProgramFromListById = async (listId: string) => {
  try {
    const eventsList: (Event | VenueEvent)[] = [];
    const response = await fetch(
      `https://api.trello.com/1/lists/${listId}/cards?key=${apiKey}&token=${apiToken}`,
    );

    if (!response.ok) {
      throw new Error(
        `Network response was not ok. Status: ${response.status}`,
      );
    }

    const data = await response.json();
    data.map((event: Card) => {
      const descriptionData: TrelloDescription = divideDescription(event.desc);
      const theme: ThemeType = getColorFromLabel(event.labels);
      if (descriptionData.venue !== undefined) {
        eventsList.push({
          title: event.name,
          from: descriptionData.from,
          to: descriptionData.to,
          theme: theme,
          venue: descriptionData.venue,
          responsible:
            descriptionData.responsible != undefined
              ? descriptionData.responsible
              : '',
        });
      } else {
        eventsList.push({
          title: event.name,
          from: descriptionData.from,
          to: descriptionData.to,
          theme: theme,
          responsible:
            descriptionData.responsible != undefined
              ? descriptionData.responsible
              : '',
        });
      }
    });
    return {
      date: '2021-11-11',
      from: '07:45',
      to: '16:00',
      events: eventsList,
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

export async function getAllListId(): Promise<TrelloList[]> {
  try {
    const response = await fetch(
      `https://api.trello.com/1/boards/63c6b70cef906601f4afc679/lists?key=${apiKey}&token=${apiToken}`,
    );

    if (!response.ok) {
      throw new Error(
        `Network response was not ok. Status: ${response.status}`,
      );
    }

    const data: TrelloList[] = await response.json();
    const filteredData: TrelloList[] = data.filter((obj) =>
      obj.name.toLowerCase().includes('variantdag'),
    );
    return filteredData;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}

export function divideDescription(description: string): TrelloDescription {
  // Split the string by the newline character "\n"
  const lines = description.split('\n');

  // Create an object to store the extracted values
  const extractedValues: Partial<TrelloDescription> = {};

  // Loop through the lines and extract the key-value pairs
  lines.forEach((line) => {
    // Split the line by ":" and make sure it contains a key-value pair
    const parts = line.split(':');
    if (parts.length >= 2) {
      const key = parts[0].trim();
      const value = parts.slice(1).join(':').trim(); // Rejoin the remaining parts after the first colon

      // Map the key to the corresponding property in TrelloDescription
      if (key === 'ansvarlig') {
        extractedValues.responsible = value;
      } else if (key === 'fra' && times.includes(value as Time)) {
        extractedValues.from = value as Time;
      } else if (key === 'til' && times.includes(value as Time)) {
        extractedValues.to = value as Time;
      } else if (key === 'lokale') {
        extractedValues.venue = value;
      }
    }
  });

  return extractedValues as TrelloDescription;
}

const getColorFromLabel = (labels: Label[]): ThemeType => {
  let theme: ThemeType = Theme.PAUSE;
  labels.map((label) => {
    if (label.name === 'Design 🎨') {
      theme = Theme.DESIGN;
    } else if (label.name === 'Utvikling 🤖') {
      theme = Theme.UTVIKLING;
    } else if (label.name === 'Lyntale ⚡') {
      theme = Theme.LYNTALE;
    } else if (label.name === 'Generelt / for alle') {
      theme = Theme.FELLES;
    }
  });
  return theme;
};
