import PropTypes from 'prop-types';

const CalculatorAnswer = ({ result, next, operation }) => (
  <td colSpan={4} id="calculator-answer-el">
    <p aria-label="calculator-answer-p-el">
      <span aria-label="calculator-answer-p-span-result">{result}</span>
      <span aria-label="calculator-answer-p-span">{operation}</span>
      <span aria-label="calculator-answer-p-span-next">
        {result === '' && operation === '' && next === '' ? '0' : next}
      </span>
    </p>
  </td>
);

CalculatorAnswer.propTypes = {
  result: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
  operation: PropTypes.string.isRequired,
};

export default CalculatorAnswer;
