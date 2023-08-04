import { Event } from '../types/program';
import { Theme } from '../types/theme';
import { TrelloList } from '../types/trello';

import dotenv from 'dotenv';
dotenv.config();

// Access environment variables using process.env
const apiKey = process.env.API_KEY;
const apiToken = process.env.API_TOKEN;

export const getProgramFromListById = async (listId: string) => {
  try {
    const eventsList: Event[] = [];
    const response = await fetch(
      `https://api.trello.com/1/lists/${listId}/cards?key=${apiKey}&token=${apiToken}`,
    );

    if (!response.ok) {
      throw new Error(
        `Network response was not ok. Status: ${response.status}`,
      );
    }

    const data = await response.json();
    data.map((event: any) => {
      eventsList.push({
        title: event.name,
        from: '07:45',
        to: '08:00',
        theme: Theme.PAUSE,
      });
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
