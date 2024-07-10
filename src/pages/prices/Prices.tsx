import { Link } from 'react-router-dom';
import { Container, Button, Row, Col, Table } from 'react-bootstrap';
import './Prices.css';

export const Prices = () => {
  return (
    <Container className='mt-5'>
      <Row>
        <Col xs={12} md={8}>
          <h1>Ceník</h1>
          <p className='mb-5 mt-4'>
            V naší fyzioklinice se zaměřujeme na poskytování kvalitní péče,
            která je přizpůsobena individuálním potřebám každého klienta.
            Nabízíme širokou škálu terapeutických služeb, které pomáhají
            dosáhnout optimální pohyblivosti a zlepšit kvalitu života.
          </p>
          <Table>
            <tbody>
              <tr>
                <td>Vstupní vyšetření – 60 minut</td>
                <td className='appointment-price'>1 000 Kč</td>
              </tr>
              <tr>
                <td>Kontrolní vyšetření - 30 minut</td>
                <td className='appointment-price'>590 Kč</td>
              </tr>
              <tr>
                <td>Kontrolní vyšetření - 60 minut</td>
                <td className='appointment-price'>890 Kč</td>
              </tr>
            </tbody>
          </Table>
          <p className='prices-payment'>
            Platba je možná v hotovosti nebo kartou.
          </p>
        </Col>
        <Col className=' pricelist-question-box'>
          <p className=' pricelist-question'>
            Chcete se poradit ohledně vašeho problému, nebo se nechat objednat?
          </p>
          <Link to='/team-project/bookingform'>
            <Button className='action-btn'>Objednat se online</Button>
          </Link>
        </Col>

        <p>
          <h4 className='prices-name'>Vstupní vyšetření</h4>
          Vstupní vyšetření je klíčovým krokem pro pochopení vašeho zdravotního
          stavu a stanovení terapeutického plánu. Naši zkušení fyzioterapeuti
          kombinují diagnostické metody s manuálním vyšetřením, aby vám poskytli
          personalizovanou péči.
        </p>
        <p>
          <h4 className='prices-name'>Kontrolní vyšetření</h4>
          Naše kontrolní vyšetření jsou navržena tak, aby zahrnovala podrobné
          vyhodnocení vašeho stavu a následné terapeutické intervence podle
          individuálních potřeb. Délka vyšetření může být zvolena podle vašich
          preferencí, ať už preferujete kratší, ale intenzivnější setkání nebo
          delší sezení s podrobnějším terapeutickým plánem. Pro naše klienty
          zajišťujeme profesionální péči s důrazem na osobní přístup a odbornost
          našich fyzioterapeutů. Pokud máte zájem o rezervaci nebo potřebujete
          více informací o našich službách, neváhejte nás kontaktovat. Jsme tu,
          abychom vám pomohli dosáhnout vašich zdravotních cílů a zlepšit váš
          celkový pohybový komfort.
        </p>
        <p className='mb-5'>
          Pro více informací o našich službách a rezervaci se obraťte na náš tým
          fyzioterapeutů, kteří se zaměřují na osobní přístup a profesionální
          péči.
        </p>
      </Row>
    </Container>
  );
};
