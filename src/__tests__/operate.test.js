import operate from '../Components/logic/operate';

describe('Unit test: Operations', () => {
  test('5 + 6 = 11', () => {
    const operation = operate(5, 6, '+');
    expect(operation).toBe('11');
  });

  test('7 - 99 = -92', () => {
    const operation = operate(7, 99, '-');
    expect(operation).toBe('-92');
  });

  test('3 x 8.2 = 24.6', () => {
    const operation = operate(3, 8.2, 'x');
    expect(operation).toBe('24.6');
  });

  test('2 ÷ 0 = Can\'t divide by 0.', () => {
    const operation = operate(2, 0, '÷');
    expect(operation).toBe('Can\'t divide by 0.');
  });

  test('78 % 4 = 2', () => {
    const operation = operate(78, 4, '%');
    expect(operation).toBe('2');
  });
});
