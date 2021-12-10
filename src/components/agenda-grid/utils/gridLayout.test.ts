import { calculateFeaturePosition, calculateGridLayout } from './gridLayout';

describe('calculateFeaturePosition', () => {
  it('formats grid column name and row start and end', () => {
    const position = calculateFeaturePosition('09:00', '13:15', 'Laksen');
    expect(position).toMatchObject({
      gridColumn: `Laksen`,
      gridRowStart: `kl-0900`,
      gridRowEnd: `kl-1315`,
    });
  });
});

describe('calculateGridLayout', () => {
  it('formats column and rows', () => {
    const layout = calculateGridLayout('09:30', '11:00', [
      'Laksen',
      'Torsken',
      'Seien',
    ]);

    expect(layout).toMatchObject({
      gridTemplateColumns: ' [Laksen] 1fr [Torsken] 1fr [Seien] 1fr',
      gridTemplateRows:
        ' [kl-0930] 1fr [kl-0945] 1fr [kl-1000] 1fr [kl-1015] 1fr [kl-1030] 1fr [kl-1045] 1fr',
    });
  });

  it('does NOT include a row for the end time', () => {
    const layout = calculateGridLayout('23:30', '23:45', ['Laksen']);

    expect(layout).toMatchObject({
      gridTemplateColumns: ' [Laksen] 1fr',
      gridTemplateRows: ' [kl-2330] 1fr',
    });
  });
});
