import { asDuration, calculateSlotPositionStyle } from './agendaUtils';
import { Feature, Program, Time } from './types';

describe('toDurationMinutes', () => {
  it('translates 0 hours as 0 minutes', () => {
    const time: Time = {
      hour: 0,
      minutes: 0,
    };

    expect(asDuration(time)).toEqual(0);
  });

  it('translates 2 hours as 120 minutes', () => {
    const time: Time = {
      hour: 2,
      minutes: 0,
    };

    expect(asDuration(time)).toEqual(120);
  });

  it('returns 2 hours 30 minutes  minutes for 150 minutes', () => {
    const time: Time = {
      hour: 2,
      minutes: 30,
    };

    expect(asDuration(time)).toEqual(150);
  });
});

describe('calculateSlotPositionStyle', () => {
  it('calculates size for slot that that starts at program start', () => {
    const program: Program = {
      from: { hour: 8, minutes: 0 },
      to: { hour: 10, minutes: 0 },
      features: [],
    };

    const feature: Feature = {
      from: { hour: 8, minutes: 0 },
      to: { hour: 9, minutes: 30 },
      title: '',
      venue: '',
    };

    const expectedStyle = {
      top: '0%',
      height: '75%',
    };

    const style = calculateSlotPositionStyle(program, feature);

    expect(style).toMatchObject(expectedStyle);
  });

  it('calculates size for slot that ends at program end', () => {
    const program: Program = {
      from: { hour: 8, minutes: 0 },
      to: { hour: 10, minutes: 0 },
      features: [],
    };

    const feature: Feature = {
      from: { hour: 9, minutes: 0 },
      to: { hour: 10, minutes: 0 },
      title: '',
      venue: '',
    };

    const expectedStyle = {
      top: '50%',
      height: '50%',
    };

    const style = calculateSlotPositionStyle(program, feature);

    expect(style).toMatchObject(expectedStyle);
  });

  it('calculates size for slot that starts and ends in the middle of the program', () => {
    const program: Program = {
      from: { hour: 8, minutes: 0 },
      to: { hour: 10, minutes: 0 },
      features: [],
    };

    const feature: Feature = {
      from: { hour: 8, minutes: 30 },
      to: { hour: 9, minutes: 30 },
      title: '',
      venue: '',
    };

    const expectedStyle = {
      top: '25%',
      height: '50%',
    };

    const style = calculateSlotPositionStyle(program, feature);

    expect(style).toMatchObject(expectedStyle);
  });
});
