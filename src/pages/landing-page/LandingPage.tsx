import { Link } from 'react-router-dom';
import { ReviewCard } from './ReviewCard';
import { FaqCard } from './FaqCard';
import reviews from './reviews.json';
import faqs from './faqs.json';
import './LandingPage.css';
import { Button, Container, Col, Row } from 'react-bootstrap';

export const LandingPage = () => {
  return (
    <Container>
      <section>
        <h1 className='logo'>PhysioReact</h1>
        <p className='slogan'>když už tělo nemůže, PhysioReact pomůže</p>
        <div className='section1-buttons'>
          <Link to='/bookingform'>
            <Button>Objednat termín</Button>
          </Link>
          <Link to='/aboutus'>
            <Button>Zjistit víc</Button>
          </Link>
        </div>
      </section>
      <section>
        <h2 className='intro-heading'>Prevence je půl zdraví</h2>
        <article className='intro-text'>
          Vaše cesta k pohybové svobodě a zdraví začíná tady. Jsme tady pro vás,
          abychom vám pomohli dosáhnout optimálního zdraví a pohybové kondice.
        </article>
        <div className='section2-buttons'>
          <Link to='/services'>
            <Button>Naše služby</Button>
          </Link>
          <Link to='/aboutus'>
            <Button>O nás</Button>
          </Link>
        </div>
      </section>

      <section className='how-to-section'>
        <h2 className='how-to-main-heading'>Jak to u nás funguje?</h2>
        <div>
          <div>
            <h4 className='how-to-heading'>Vstupní konzultace</h4>
            <p className='how-to-text'>
              Donec eu ultricies est, non cursus eros. Sed velit felis, gravida
              vel rutrum id, finibus sed odio.{' '}
            </p>
          </div>
          <div>
            <h4 className='how-to-heading'>Nadpis 2</h4>
            <p className='how-to-text'>
              Donec eu ultricies est, non cursus eros. Sed velit felis, gravida
              vel rutrum id, finibus sed odio.{' '}
            </p>
          </div>
          <div>
            <h4 className='how-to-heading'>Nadpis 3</h4>
            <p className='how-to-text'>
              Donec eu ultricies est, non cursus eros. Sed velit felis, gravida
              vel rutrum id, finibus sed odio.{' '}
            </p>
          </div>
        </div>
        <Link to='/bookingform'>
          <Button>Objednat se</Button>
        </Link>
      </section>

      <section className='client-section'>
        <h2 className='clients-heading'>Co o nás říkají naši klienti</h2>
        <Row>
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </Row>
      </section>

      <section className='faq-section'>
        <Row>
          <Col xs={8} id='FAQ'>
            {faqs.map((faq) => (
              <FaqCard key={faq.id} faq={faq} />
            ))}
          </Col>
          <Col className='Form-link'>
            <h3>Máte otázku?</h3>
            <p>Vyplňte kontaktní formulář</p>
            <Link to='/contact'>
              <Button>Kontaktujte nás</Button>
            </Link>
          </Col>
        </Row>
      </section>
    </Container>
  );
};
