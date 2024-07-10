import { Link, useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

export const Footer = () => {
  const navigate = useNavigate();

  const handleFAQClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    e.preventDefault();
    navigate('/team-project', { state: { scrollToFAQ: true } });
  };

  return (
    <footer className='footer'>
      <Container>
        <Row className='align-items-center'>
          <Col xs={12} lg={3} className='footer-brand mb-3 mb-lg-0'>
            <Link className='navbar-brand' to='/team-project' id='logo'>
              PhysioReact
            </Link>
          </Col>
          <Col xs={12} lg={9}>
            <div className='footer-links d-flex flex-wrap justify-content-center justify-content-lg-start'>
              <Link to='/team-project/services' className='footer-link'>
                Naše služby
              </Link>
              <Link to='/team-project/aboutus' className='footer-link'>
                O nás
              </Link>
              <Link to='/team-project/prices' className='footer-link'>
                Ceník
              </Link>
              <Link to='/team-project/gdpr' className='footer-link'>
                Zpracování osobních údajů
              </Link>
              <Link
                to='/team-project/#faq'
                className='footer-link'
                onClick={handleFAQClick}
              >
                Q&A
              </Link>
              <Link to='/team-project/contact' className='footer-link'>
                Kontakt
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
