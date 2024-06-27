import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './Header.css';

export const Header = () => {
  return (
    <div>
      <Navbar expand='lg' className='bg-body-teriary' fixed='top'>
        <Container>
          <Navbar.Brand>
            <Link className='navbar-brand ' to='/' id='logo'>
              PhysioReact
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto justify-content-center flex-grow-1 pe-5 navlinks'>
              <Nav.Link href='/services'>Naše služby</Nav.Link>
              <Nav.Link href='/aboutus'>O nás</Nav.Link>
              <Nav.Link href='/prices'>Ceník</Nav.Link>
              <Nav.Link href='/contact'>Kontakt</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href='/bookingform' className='bookingform-btn'>
                Objednat se
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
