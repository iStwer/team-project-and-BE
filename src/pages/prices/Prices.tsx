import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

export const Prices = () => {
  return (
    <Container>
      <h1>Ceník</h1>
      <table>
        <tbody>
          <tr>
            <td>Vstupní vyšetření</td>
            <td>1 000 Kč</td>
          </tr>
          <tr>
            <td>Kontrolní vyšetření - 30 minut</td>
            <td>590 Kč</td>
          </tr>
          <tr>
            <td>Kontrolní vyšetření - 45 minut</td>
            <td>890 Kč</td>
          </tr>
        </tbody>

        <div>
          <p>
            Chcete se poradit ohledně vašeho problému, nebo se nechat objednat?
          </p>
          <Link to='/bookingform'>
            <button>Objednat se online</button>
          </Link>
        </div>
      </table>
    </Container>
  );
};
