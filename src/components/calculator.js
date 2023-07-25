import { useState, useEffect } from 'react';
import CalculatorAnswer from './calculatorAnswar';
import calculate from '../logic/calculate';
import keyevents from '../logic/keyevents';
import Header from './header';

export default function Calculator() {
  const [result, setResult] = useState({});

  function handleClick(event) {
    setResult(calculate(result, event.target.innerText));
  }

  useEffect(() => {
    function handleKeyDown(e) {
      e.preventDefault();
      e.stopPropagation();
      const key = keyevents(e);
      if (key) {
        setResult((result) => calculate(result, key));
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      <Header />
      <article className="calculator-container">
        <table>
          <tbody>
            <tr>
              <CalculatorAnswer
                result={result.total ? result.total : ''}
                next={result.next ? result.next : ''}
                operation={result.operation ? result.operation : ''}
              />
            </tr>
            <tr>
              <td onClick={handleClick}>AC</td>
              <td onClick={handleClick}>+/-</td>
              <td onClick={handleClick}>%</td>
              <td onClick={handleClick}>&#247;</td>
            </tr>
            <tr>
              <td onClick={handleClick}>7</td>
              <td onClick={handleClick}>8</td>
              <td onClick={handleClick}>9</td>
              <td onClick={handleClick}>x</td>
            </tr>
            <tr>
              <td onClick={handleClick}>4</td>
              <td onClick={handleClick}>5</td>
              <td onClick={handleClick}>6</td>
              <td onClick={handleClick}>-</td>
            </tr>
            <tr>
              <td onClick={handleClick}>1</td>
              <td onClick={handleClick}>2</td>
              <td onClick={handleClick}>3</td>
              <td onClick={handleClick}>+</td>
            </tr>
            <tr>
              <td
                className="calculator-zero-el"
                colSpan={2}
                onClick={handleClick}
              >
                0
              </td>
              <td onClick={handleClick}>.</td>
              <td onClick={handleClick}>=</td>
            </tr>
          </tbody>
        </table>
      </article>
    </>
  );
}
