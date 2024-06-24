import { Link } from 'react-router-dom';
import { ReviewCard } from './ReviewCard';
import { FaqCard } from './FaqCard';
import reviews from './reviews.json';
import faqs from './faqs.json';

export const LandingPage = () => {
  return (
    <div className='Main'>
      <section>
        <h1>PhysioReact</h1>
        <p>když už tělo nemůže, PhysioReact pomůže</p>
        <div className='section1-buttons'>
          <Link to='/bookingform'>
            <button>Objednat termín</button>
          </Link>
          <Link to='/aboutus'>
            <button>Zjistit víc</button>
          </Link>
        </div>
      </section>
      <section>
        <h2>Prevence je půl zdraví</h2>
        <article>
          Vaše cesta k pohybové svobodě a zdraví začíná tady. Jsme tady pro vás,
          abychom vám pomohli dosáhnout optimálního zdraví a pohybové kondice.
        </article>
        <div className='section2-buttons'>
          <Link to='/services'>
            <button>Naše služby</button>
          </Link>
          <Link to='/aboutus'>
            <button>O nás</button>
          </Link>
        </div>
      </section>
      <section>
        <h2>Jak to u nás funguje?</h2>
        <div>
          <div>
            <h4>Vstupní konzultace</h4>
            <p>
              Donec eu ultricies est, non cursus eros. Sed velit felis, gravida
              vel rutrum id, finibus sed odio.{' '}
            </p>
          </div>
          <div>
            <h4>Nadpis 2</h4>
            <p>
              Donec eu ultricies est, non cursus eros. Sed velit felis, gravida
              vel rutrum id, finibus sed odio.{' '}
            </p>
          </div>
          <div>
            <h4>Nadpis 3</h4>
            <p>
              Donec eu ultricies est, non cursus eros. Sed velit felis, gravida
              vel rutrum id, finibus sed odio.{' '}
            </p>
          </div>
        </div>
        <Link to='/bookingform'>
          <button>Objednat se</button>
        </Link>
      </section>
      <section>
        <h2>Co o nás říkají naši klienti</h2>
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </section>
      <section>
        <div id='FAQ'>
          {faqs.map((faq) => (
            <FaqCard key={faq.id} faq={faq} />
          ))}
        </div>
        <div className='Form-link'>
          <h3>Máte otázku?</h3>
          <p>Vyplňte kontaktní formulář</p>
          <Link to='/contact'>
            <button>Kontaktujte nás</button>
          </Link>
        </div>
      </section>
    </div>
  );
};
