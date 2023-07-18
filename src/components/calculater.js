import CalculaterAnswer from './calculaterAnswar';

const Calculater = () => (
  <article className="calculater-container">
    <table>
      <tbody>
        <tr>
          <CalculaterAnswer />
        </tr>
        <tr>
          <td>AC</td>
          <td>+/-</td>
          <td>%</td>
          <td>&#247;</td>
        </tr>
        <tr>
          <td>7</td>
          <td>8</td>
          <td>9</td>
          <td>X</td>
        </tr>
        <tr>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td>-</td>
        </tr>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>+</td>
        </tr>
        <tr>
          <td className="calculater-zero-el" colSpan={2}>
            0
          </td>
          <td>.</td>
          <td>=</td>
        </tr>
      </tbody>
    </table>
  </article>
);

export default Calculater;
