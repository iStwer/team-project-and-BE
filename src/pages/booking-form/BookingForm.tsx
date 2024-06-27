import { Container, Form, Button } from 'react-bootstrap';
import './BookingForm.css';
import services from '../../assets/services.json';
import { FormEvent, ChangeEvent, useState, useEffect } from 'react';
import axios from 'axios';

interface FormInputData {
  id: number;
  name: string;
  surname: string;
  email: string;
  telephone: string;
  service: string;
  date: string;
  time: string;
}

export const BookingForm = () => {
  const d = new Date();
  const today = d.toISOString().split('T')[0];
  const maxDate = d.getFullYear() + 1 + '-01-01';

  const [inputData, setInputData] = useState<FormInputData>({
    id: 0,
    name: '',
    surname: '',
    email: '',
    telephone: '',
    service: '',
    date: '',
    time: '',
  });

  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(name, value);
    setInputData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:5000/bookings',
        inputData,
      );
      console.log('Booking submitted', response.data);//
      localStorage.setItem('formSubmitted', 'true');
      setFormSubmitted(true);
      setInputData({
        id: 0,
        name: '',
        surname: '',
        email: '',
        telephone: '',
        service: '',
        date: '',
        time: '',
      });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (localStorage.getItem('formSubmitted') === 'true') {
      setFormSubmitted(true);
      setTimeout(() => {
        localStorage.removeItem('formSubmitted');
        setFormSubmitted(false);
      }, 5000);
    }
  }, []);

  //server endpoint check
  const fetchBookings = async () => {
    try {
      const response = await fetch('http://localhost:5000/bookings').then(
        (res) => res.json(),
      );
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, [formSubmitted]);

  return (
    <Container className='mt-5 form-container'>
      {localStorage.getItem('formSubmitted') && (
        <div className='infoMessage'>Formulář byl úspěšně odeslán!</div>
      )}
      <h1>Objednat se</h1>

      {/*<form action='https://formsubmit.co/physioreact@seznam.cz' method='POST'></form>*/}

      <Form className='mt-5' onSubmit={handleSubmit}>
        <Form.Group className='mb-3'>
          <Form.Label htmlFor='name'>Křestní jméno</Form.Label>
          <Form.Control
            type='text'
            placeholder='Křestní jméno'
            id='name'
            name='name'
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label htmlFor='surname'>Příjmení</Form.Label>
          <Form.Control
            type='text'
            placeholder='Příjmení'
            id='surname'
            name='surname'
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label htmlFor='email'>E-mail</Form.Label>
          <Form.Control
            type='email'
            placeholder='E-mailová adresa'
            id='email'
            name='email'
            onChange={handleChange}
            required
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
            name='telephone'
            onChange={handleChange}
            required
          />
          <Form.Text className='text-muted'>
            Vaše telefonní číslo nebudeme s nikým sdílet.
          </Form.Text>
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label htmlFor='sluzby'>Vyberte službu:</Form.Label>
          <Form.Control
            as='select'
            id='sluzby'
            name='service'
            onChange={handleChange}
            required
          >
            <option value='' disabled selected hidden>
              --vyberte službu--
            </option>
            {services.map((service) => (
              <option key={service.id} value={service.name}>
                {service.name}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label htmlFor='date'>Vyberte termín:</Form.Label>
          <Form.Control
            type='date'
            id='date'
            name='date'
            min={today}
            max={maxDate}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label htmlFor='time'>Vyberte čas návštěvy:</Form.Label>
          <Form.Control
            type='time'
            id='time'
            name='time'
            min='09:00'
            max='18:00'
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button type='submit' className='action-btn mt-3 mb-5'>
          Objednat se
        </Button>
      </Form>
    </Container>
  );
};
