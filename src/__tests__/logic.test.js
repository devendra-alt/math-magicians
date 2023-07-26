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
