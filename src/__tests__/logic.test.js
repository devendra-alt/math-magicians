import calculate from '../logic/calculate';
import operate from '../logic/operate';

let obj = {
  total: '450',
  next: '50',
  operation: '+',
};

describe('Test calculator logic', () => {
  it('should add two values and give answer', () => {
    const { total } = calculate(obj, '=');
    expect(total).toStrictEqual('500');
  });

  it('should clear total', () => {
    const { total } = calculate(obj, 'AC');
    expect(total).toStrictEqual(null);
  });

  it('shoud return divide by zero', () => {
    obj['total'] = '0';
    obj['next'] = '0';
    const { total } = calculate(obj, '%');
    expect(total).toStrictEqual('0');
  });
});

describe('Test operate logic', () => {
  it('add 2+4 ', () => {
    expect(operate('2', '4', '+')).toStrictEqual('6');
  });
  it('multiply 5x5', () => {
    expect(operate('5', '5', 'x')).toStrictEqual('25');
  });
  it('cant divide 0X0', () => {
    expect(operate('0', '0', '%')).toStrictEqual(
      "Can't find modulo as can't divide by 0."
    );
  });
  it('should throw error', () => {
    try {
      operate('0', '0', '^');
    } catch (error) {
      expect(error.message).toBe("Unknown operation '^'");
    }
  });

  it('should subtract 5 from 2', () => {
    expect(operate('2', '5', '-')).toStrictEqual('-3');
  });
});
