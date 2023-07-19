const CalculatorAnswer = () => (
  <td colSpan={4} id="calculator-answer-el">
    0
  </td>
);
CalculatorAnswer.propTypes = {
  result: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
  operation: PropTypes.string.isRequired,
};

export default CalculatorAnswer;
