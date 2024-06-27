import { Link } from 'react-router-dom';
import { Container, Button, Row, Col, Table } from 'react-bootstrap';
import './Prices.css';

export const Prices = () => {
  return (
    <Container className='mt-5'>
      <Row>
        <Col xs={12} md={8}>
          <h1>Ceník</h1>
          <Table>
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
          </Table>
        </Col>
        <Col className=' pricelist-question-box'>
          <p className=' pricelist-question'>
            Chcete se poradit ohledně vašeho problému, nebo se nechat objednat?
          </p>
          <Link to='/bookingform'>
            <Button className='action-btn'>Objednat se online</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};
