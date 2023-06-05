export type Month =
  | '01'
  | '02'
  | '03'
  | '04'
  | '05'
  | '06'
  | '07'
  | '08'
  | '09'
  | '10'
  | 11
  | 12;

export type FirstDayDigit = 0 | 1 | 2 | 3;
export type SecondDayDigit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type Date =
  `20${number}${number}-${Month}-${FirstDayDigit}${SecondDayDigit}`;
