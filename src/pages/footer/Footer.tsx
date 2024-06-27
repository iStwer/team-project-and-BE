import { Link } from 'react-router-dom';
import { Container, Nav, ListGroup } from 'react-bootstrap';
import './Footer.css';

export const Footer = () => {
  return (
    <Container className='footer' fluid>
      <ListGroup horizontal>
        <Nav className='mx-auto'>
          <Link className='navbar-brand ' to='/' id='logo'>
            PhysioReact
          </Link>
          <Nav.Link href='/services' className='footer-link'>
            Naše služby
          </Nav.Link>
          <Nav.Link href='/aboutus' className='footer-link'>
            O nás
          </Nav.Link>
          <Nav.Link href='/prices' className='footer-link'>
            Ceník
          </Nav.Link>
          <Nav.Link href='/gdpr' className='footer-link'>
            Zpracování osobních údajů
          </Nav.Link>
          <Nav.Link href='#faq' className='footer-link'>
            Q&A
          </Nav.Link>
          <Nav.Link href='/contact' className='footer-link'>
            Kontakt
          </Nav.Link>
        </Nav>
      </ListGroup>
    </Container>
  );
};
