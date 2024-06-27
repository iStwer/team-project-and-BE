import { Container } from 'react-bootstrap';
import services from './services.json';
import { ChangeEvent, useState } from 'react';

interface FormInputData {
  firstName: string;
  lastName: string;
  service: string;
  date: string;
}

export const BookingForm = () => {
  const d = new Date();
  const today = d.toISOString().split('T')[0];
  const maxDate = d.getFullYear() + 1 + '-01-01';

  const [inputData, setInputData] = useState<FormInputData>({
    firstName: '',
    lastName: '',
    service: '',
    date: '',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    console.log(name, value);
    setInputData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  /*const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(inputData);
    console.log('form submitted');
  };*/

  return (
    <Container>
      <h1>Objednat se</h1>
      <form action='https://formsubmit.co/physioreact@seznam.cz' method='POST'>
        <input
          type='text'
          placeholder='Křestní jméno'
          name='firstName'
          required
          onChange={handleChange}
        />
        <input
          type='text'
          placeholder='Příjmení'
          name='lastName'
          required
          onChange={handleChange}
        />
        <div>
          <label htmlFor='sluzby'>Vyberte službu:</label>
          <select name='service' id='sluzby' required onChange={handleChange}>
            <option value='' disabled selected hidden>
              Služba
            </option>
            {services.map((service) => (
              <option key={service.id} value={service.name}>
                {service.name}
              </option>
            ))}
          </select>
        </div>
        <input
          type='date'
          name='date'
          min={today}
          max={maxDate}
          required
          onChange={handleChange}
        />
        <button type='submit'>Objednat se</button>
      </form>
    </Container>
  );
};
