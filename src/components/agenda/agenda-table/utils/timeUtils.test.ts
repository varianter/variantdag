import { time, format } from './timeUtils';
import { Time } from '../types';

describe('time', () => {
  it('parses 10:30 to 10 hours 30 minutes', () => {
    expect(time('10:30')).toMatchObject({
      hour: 10,
      minutes: 30,
    } as Time);
  });
});

describe('format', () => {
  it('formats 10 hours 30 minutes to 10:30', () => {
    const tenThirty: Time = {
      hour: 10,
      minutes: 30,
    };

    expect(format(tenThirty)).toEqual('10:30');
  });
});
