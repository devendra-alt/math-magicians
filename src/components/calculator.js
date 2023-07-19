import CalculatorAnswer from './calculatorAnswar';
import calculate from '../logic/calculate';
  document.body.addEventListener('keydown', (e) => {
    e.preventDefault();
    e.stopPropagation();
    const key = keyevents(e);
    if (key) {
      setResult(calculate(result, key));
    }
  });
