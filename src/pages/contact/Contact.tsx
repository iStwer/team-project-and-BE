import { Container, Button, Form } from 'react-bootstrap';
import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import './Contact.css';

interface FormInputData {
  name: string;
  email: string;
  message: string;
}

export const Contact = () => {
  const contactDetails = {
    address: 'Národní technická knihovna, Technická 2710/6, 160 80 Praha 6',
    phone: '158',
    email: '4reactotrokyne@physioreact.achjo',
    openingHours: 'Pondělí - Pátek, 8:00 - 18:00',
  };

  const [inputData, setInputData] = useState<FormInputData>({
    name: '',
    email: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    //e.preventDefault();
    localStorage.setItem('formSubmitted', 'true');
    setFormSubmitted(true);
    console.log(inputData);
    setInputData({
      name: '',
      email: '',
      message: '',
    });
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

  return (
    <div className='contact-form-body'>
      <Container className='mt-5 form-container'>
        {localStorage.getItem('formSubmitted') && (
          <div className='infoMessage'>Formulář byl úspěšně odeslán!</div>
        )}
        <h1>Kontaktujte nás</h1>
        <div>
          <p>Adresa: {contactDetails.address}</p>
          <p>Telefon: {contactDetails.phone}</p>
          <p>E-mail: {contactDetails.email}</p>
          <p>Otevírací doba: {contactDetails.openingHours}</p>
        </div>
        <h1>Napište nám</h1>
        <Form onSubmit={handleSubmit} className='mt-5'>
          <Form.Group className='mb-3'>
            <Form.Label htmlFor='contact-name'>Jméno</Form.Label>
            <Form.Control
              type='text'
              name='name'
              id='contact-name'
              placeholder='Vaše jméno'
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label htmlFor='contact-email'>E-mail</Form.Label>
            <Form.Control
              type='text'
              name='email'
              id='contact-email'
              placeholder='Váš e-mail'
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label htmlFor='your-message'>Zpráva</Form.Label>
            <Form.Control
              as='textarea'
              id='your-message'
              name='message'
              placeholder='Vaše zpráva'
              className='your-message'
              rows={5}
              onChange={handleChange}
            />
          </Form.Group>
          <Button type='submit' className='action-btn mt-3 mb-5'>
            Odeslat
          </Button>
        </Form>
        <div>
          <h4 className='contact-question'>Potřebujete poradit?</h4>
          <p className='contact-text'>
            Jsme tu pro Vás! Stačí nám zavolat na linku:
            <span className='contact-phone'> 158</span>
          </p>
        </div>
      </Container>
    </div>
  );
};
