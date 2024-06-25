import { Container } from 'react-bootstrap';
import { useState, ChangeEvent, FormEvent } from 'react';

interface FormInputData {
  name: string;
  email: string;
  message: string;
}

export const Contact = () => {
  const [inputData, setInputData] = useState<FormInputData>({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(inputData);
  };

  return (
    <Container>
      <h1>Napište nám</h1>
      <section>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type='text'
              name='name'
              placeholder='vaše jméno'
              onChange={handleChange}
            />
            <input
              type='text'
              name='email'
              placeholder='váš e-mail'
              onChange={handleChange}
            />
          </div>
          <input
            type='text'
            id='your-message'
            name='message'
            placeholder='vaše zpráva'
            onChange={handleChange}
          />
          <button type='submit'>Odeslat</button>
        </form>
        <div>
          <h4>Potřebujete poradit?</h4>
          <p>stačí nám zavolat na linku: 158</p>
        </div>
      </section>
    </Container>
  );
};
