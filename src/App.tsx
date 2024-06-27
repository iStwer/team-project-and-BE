import './App.css';
import { Footer } from './pages/footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Aboutus } from './pages/about-us/About-us';
import { Prices } from './pages/prices/Prices';
import { Services } from './pages/services/Services';
import { Contact } from './pages/contact/Contact';
import { LandingPage } from './pages/landing-page/LandingPage';
import { Header } from './pages/header/Header';
import { BookingForm } from './pages/booking-form/BookingForm';
import { Gdpr } from './pages/gdpr/Gdpr';

function App() {
  return (
    <Router>
      <Header />
      <div className='app-content'>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/aboutus' element={<Aboutus />} />
          <Route path='/prices' element={<Prices />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/bookingform' element={<BookingForm />} />
          <Route path='/gdpr' element={<Gdpr />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
