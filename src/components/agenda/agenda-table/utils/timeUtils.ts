import { Time } from '../types';

export const time = (time: string): Time => {
  const [hour, minutes] = time.split(':').map(Number);
  return {
    hour: hour,
    minutes: minutes,
  };
};

export const format = (time: Time): string => {
  const hour = time.hour < 10 ? `0${time.hour}` : time.hour;
  const minutes = time.minutes < 10 ? `0${time.minutes}` : time.minutes;

  return `${hour}:${minutes}`;
};
