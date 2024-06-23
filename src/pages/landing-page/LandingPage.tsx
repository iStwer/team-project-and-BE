export const LandingPage = () => {
  return (
    <div className='Main'>
      <section>
        <h1>PhysioReact</h1>
        <p>když už tělo nemůže, PhysioReact pomůže</p>
        <div className='section1-buttons'>
          <button>Objednat termín</button>
          <button>Zjistit víc</button>
        </div>
      </section>
      <section>
        <h2>Prevence je půl zdraví</h2>
        <article>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          tempor, metus id tristique interdum, lectus sem tristique enim, non
          ornare urna dui eu risus. Donec ut porta purus, eget lobortis nibh.
        </article>
        <div className='section2-buttons'>
          <button>Naše služby</button>
          <button>O nás</button>
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
        <button>Objednat se</button>
      </section>
      <section>
        <h2>Co o nás říkají naši klienti</h2>
        <div className='Review'>
          <p>
            Morbi ullamcorper dolor tellus, quis mattis orci sagittis at.
            Vivamus mattis pharetra elementum. Donec efficitur suscipit purus,
            et pretium neque lacinia nec. Fusce non hendrerit ipsum.
          </p>
          <p>Name of reviewer</p>
        </div>
        <div className='Review'>
          <p>
            Morbi ullamcorper dolor tellus, quis mattis orci sagittis at.
            Vivamus mattis pharetra elementum. Donec efficitur suscipit purus,
            et pretium neque lacinia nec. Fusce non hendrerit ipsum.
          </p>
          <p>Name of reviewer</p>
        </div>
        <div className='Review'>
          <p>
            Morbi ullamcorper dolor tellus, quis mattis orci sagittis at.
            Vivamus mattis pharetra elementum. Donec efficitur suscipit purus,
            et pretium neque lacinia nec. Fusce non hendrerit ipsum.
          </p>
          <p>Name of reviewer</p>
        </div>
        <div className='Review'>
          <p>
            Morbi ullamcorper dolor tellus, quis mattis orci sagittis at.
            Vivamus mattis pharetra elementum. Donec efficitur suscipit purus,
            et pretium neque lacinia nec. Fusce non hendrerit ipsum.
          </p>
          <p>Name of reviewer</p>
        </div>
      </section>
      <section>
        <div className='FAQ'>
          <div className='question'>
            <p>Dá se u vás platit kartou?</p>
          </div>
          <div className='question'>
            <p>Dá se u vás platit kartou?</p>
          </div>
          <div className='question'>
            <p>Dá se u vás platit kartou?</p>
          </div>
        </div>
        <div className='Form-link'>
          <h3>Máte otázku?</h3>
          <p>Vyplňte kontaktní formulář</p>
          <button>Kontaktujte nás</button>
        </div>
      </section>
    </div>
  );
};
