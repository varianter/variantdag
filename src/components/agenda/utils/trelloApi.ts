import { Event } from '../types/program';
import { Theme } from '../types/theme';
import { TrelloList } from '../types/trello';

export default function getProgramFromListById(listId: string) {
  const events: Event[] = [];
  fetch(
    `https://api.trello.com/1/lists/${listId}/cards?key=cf063842e14021c0d2d0fdc485794b53&token=ATTAb0c2f8d6965e9ad54b0e07dfd8e85801450f10548a3e7eecf9231bd88ee7b6637C903F2B`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    },
  )
    .then((response) => {
      return response.text();
    })
    .then((text) => {
      const parsed = JSON.parse(text);
      parsed.map((event: any) => {
        const eventObject: Event = {
          title: event.name,
          from: '07:45',
          to: '08:00',
          theme: Theme.PAUSE,
        };
        events.push(eventObject);
      });
    })
    .catch((err) => console.error(err));

  return {
    date: '2021-11-11',
    from: '07:45',
    to: '16:00',
    events: events,
  };
}

export function getAllListId() {
  const lists: TrelloList[] = [];
  fetch(
    'https://api.trello.com/1/boards/63c6b70cef906601f4afc679/lists?key=cf063842e14021c0d2d0fdc485794b53&token=ATTAb0c2f8d6965e9ad54b0e07dfd8e85801450f10548a3e7eecf9231bd88ee7b6637C903F2B',
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    },
  )
    .then((response) => {
      return response.text();
    })
    .then((text) => {
      const parsed = JSON.parse(text);
      parsed.map((trelloList: any) => {
        const trelloListObject: TrelloList = {
          id: trelloList.id,
          name: trelloList.name,
        };
        if (trelloListObject.name.toLowerCase().includes('variantdag')) {
          lists.push(trelloListObject);
        }
      });
    })
    .catch((err) => console.error(err));

  return lists;
}
