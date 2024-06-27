import { Link } from 'react-router-dom';
import { Container, Nav, ListGroup } from 'react-bootstrap';
import './Footer.css';

export const Footer = () => {
  return (
    <Container className='footer'>
      <ListGroup horizontal>
        <Link className='navbar-brand ' to='/' id='logo'>
          PhysioReact
        </Link>
        <Nav className='mx-auto'>
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
          <Nav.Link href='#FAQ' className='footer-link'>
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
