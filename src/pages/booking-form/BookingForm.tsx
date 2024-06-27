import { Container, Form, Button } from 'react-bootstrap';
import './BookingForm.css';
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
    <Container className='mt-5 form-container'>
      <h1>Objednat se</h1>

    /*<form action='https://formsubmit.co/physioreact@seznam.cz' method='POST'>
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
      </form> */

      <Form className='mt-5'>
        <Form.Group className='mb-3'>
          <Form.Label htmlFor='name'>Křestní jméno</Form.Label>
          <Form.Control type='text' placeholder='Křestní jméno' id='name' />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label htmlFor='surname'>Příjmení</Form.Label>
          <Form.Control type='text' placeholder='Příjmení' id='surname' />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label htmlFor='email'>E-mail</Form.Label>
          <Form.Control
            type='email'
            placeholder='E-mailová adresa'
            id='email'
          />
          <Form.Text className='text-muted'>
            Váš e-mail nebudeme s nikým sdílet.
          </Form.Text>
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label htmlFor='telephone'>Telefonní číslo</Form.Label>
          <Form.Control
            type='tel'
            placeholder='Telefonní číslo'
            id='telephone'
          />
          <Form.Text className='text-muted'>
            Vaše telefonní číslo nebudeme s nikým sdílet.
          </Form.Text>
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label htmlFor='sluzby'>Vyberte službu:</Form.Label>
          <Form.Control as='select' id='sluzby'>
            <option value='service1'>sluzba 1</option>
            <option value='service2'>sluzba 2</option>
            <option value='service3'>sluzba 3</option>
          </Form.Control>
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label htmlFor='date'>Vyberte termín:</Form.Label>
          <Form.Control type='date' id='date' />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label htmlFor='date'>Vyberte čas návštěvy:</Form.Label>
          <Form.Control type='time' id='time' />
        </Form.Group>

        <Button type='submit' className='action-btn mt-3 mb-5'>
          Objednat se
        </Button>
      </Form>

    </Container>
  );
};
