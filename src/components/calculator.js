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
      <div className="calculator-container">
        <p className="calculator-text">Let&apos;s do some math</p>
        <article>
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
                <td aria-label="calculator-btn" onClick={handleClick}>
                  AC
                </td>
                <td aria-label="calculator-btn" onClick={handleClick}>
                  +/-
                </td>
                <td aria-label="calculator-btn" onClick={handleClick}>
                  %
                </td>
                <td aria-label="calculator-btn" onClick={handleClick}>
                  &#247;
                </td>
              </tr>
              <tr>
                <td aria-label="calculator-btn" onClick={handleClick}>
                  7
                </td>
                <td aria-label="calculator-btn" onClick={handleClick}>
                  8
                </td>
                <td aria-label="calculator-btn" onClick={handleClick}>
                  9
                </td>
                <td aria-label="calculator-btn" onClick={handleClick}>
                  x
                </td>
              </tr>
              <tr>
                <td aria-label="calculator-btn" onClick={handleClick}>
                  4
                </td>
                <td aria-label="calculator-btn" onClick={handleClick}>
                  5
                </td>
                <td aria-label="calculator-btn" onClick={handleClick}>
                  6
                </td>
                <td aria-label="calculator-btn" onClick={handleClick}>
                  -
                </td>
              </tr>
              <tr>
                <td aria-label="calculator-btn" onClick={handleClick}>
                  1
                </td>
                <td aria-label="calculator-btn" onClick={handleClick}>
                  2
                </td>
                <td aria-label="calculator-btn" onClick={handleClick}>
                  3
                </td>
                <td aria-label="calculator-btn" onClick={handleClick}>
                  +
                </td>
              </tr>
              <tr>
                <td
                  aria-label="calculator-btn"
                  className="calculator-zero-el"
                  colSpan={2}
                  onClick={handleClick}
                >
                  0
                </td>
                <td aria-label="calculator-btn" onClick={handleClick}>
                  .
                </td>
                <td aria-label="calculator-btn" onClick={handleClick}>
                  =
                </td>
              </tr>
            </tbody>
          </table>
        </article>
      </div>
    </>
  );
}
