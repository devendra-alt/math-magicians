import PropTypes from 'prop-types';

const CalculatorAnswer = ({ result, next, operation }) => (
  <td colSpan={4} id="calculator-answer-el">
    <p>
      <span>{result}</span>
      <span>{operation}</span>
      <span>
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
