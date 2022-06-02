import calculate from '../Components/logic/calculate';

describe('Unit test: Calculate', () => {
  test('AC is pressed', () => {
    const calc = calculate({}, 'A/C');
    expect(calc).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });
  test('9 is pressed when 10 x is recorded', () => {
    const calc = calculate(
      {
        total: '10',
        next: null,
        operation: 'x',
      },
      '9',
    );
    expect(calc).toEqual({
      total: '10',
      next: '9',
      operation: 'x',
    });
  });
  test('= is pressed when 8 ÷ 2 is recorded', () => {
    const calc = calculate(
      {
        total: '8',
        next: '2',
        operation: '÷',
      },
      '=',
    );
    expect(calc).toEqual({
      total: '4',
      next: null,
      operation: null,
    });
  });
});
