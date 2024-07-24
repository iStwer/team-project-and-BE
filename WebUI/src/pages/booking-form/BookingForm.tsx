import React, { FormEvent, ChangeEvent, useState, useEffect } from 'react';
import { Container, Form, Button, Modal } from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";
import './BookingForm.css';
import services from '../../assets/services.json';
import axios from 'axios';
import DatePicker, { registerLocale } from 'react-datepicker';
import { cs } from 'date-fns/locale'; // Import Czech locale for Monday as the first day

registerLocale('cs', cs);

interface FormInputData {
  id: string | undefined;
  name: string;
  surname: string;
  email: string;
  telephone: string;
  service: string;
  date: string;
  time: string;
  duration?: string;
}

export const BookingForm = () => {
  const d = new Date();
  const today = d.toISOString().split('T')[0];
  const maxDate = d.getFullYear() + 1 + '-01-01';

  const [inputData, setInputData] = useState<FormInputData>({
    id: undefined,
    name: '',
    surname: '',
    email: '',
    telephone: '',
    service: '',
    date: '',
    time: '',
    duration: '',
  });

  const [checkedInputData, setCheckedInputData] = useState<FormInputData | null>(null);
  const [telephoneError, setTelephoneError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [durationError, setDurationError] = useState<boolean>(false);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [availableHours, setAvailableHours] = useState([
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
  ]);

  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [selectedDuration, setSelectedDuration] = useState<number | null>(null); // null, 30 or 60
  const [isEntranceExam, setIsEntranceExam] = useState<boolean>(false); // Track if service is "Vstupní vyšetření"

  const handleDateChange = (date: Date | null) => {
    setStartDate(date);
    if (date) {
      setInputData((prevData) => ({ ...prevData, date: date.toISOString().split('T')[0] }));
    }
  };

  const isWeekday = (date: Date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement | HTMLSelectElement;
    const { name, value } = target;

    setInputData((prevData) => ({ ...prevData, [name]: value }));

    if (name === 'service' && value === 'Vstupní vyšetření') {
      setIsEntranceExam(true);
      setSelectedDuration(60); // Force duration to 60 min for Entrance examination
      setInputData((prevData) => ({ ...prevData, duration: '60' }));
    } else {
      setIsEntranceExam(false);
    }
  };

  const handleDurationSelection = (duration: number) => {
    if (isEntranceExam && duration !== 60) {
      return;
    }
    setSelectedDuration(duration === selectedDuration ? null : duration);
    // If 60 min duration is selected, adjust available hours to only hourly slots
    if (duration === 60) {
      setAvailableHours([
        '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00',
      ]);
    } else {
      // Otherwise, reset available hours to default
      setAvailableHours([
        '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00',
        '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30',
        '16:00', '16:30', '17:00', '17:30',
      ]);
    }
    setInputData((prevData) => ({ ...prevData, duration: duration.toString() }));
    setDurationError(false);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedDuration) {
      setDurationError(true);
      return;
    }

    // Check validity of data before sending to the server
    let checkedTelephone = inputData.telephone.trim().replace(/\s+/g, '');
    let checkedEmail = isValidEmail(inputData.email.trim());

    if (isNaN(parseInt(checkedTelephone)) || checkedTelephone.length > 9) {
      setTelephoneError(true);
      setEmailError(false);
      return;
    } else if (!checkedEmail) {
      setEmailError(true);
      setTelephoneError(false);
      return;
    } else {
      setTelephoneError(false);
      setEmailError(false);
    }

    const formattedData = {
      ...inputData,
      duration: selectedDuration === 30 ? '30 min' : '60 min',
    };

    try {
      const response = await axios.post('http://localhost:3001/api/bookings', formattedData);
      console.log('Booking submitted', response.data);
      localStorage.setItem('formSubmitted', 'true');
      setShowModal(true);
      setFormSubmitted(true);
      // Reset form data
      setInputData({
        id: undefined,
        name: '',
        surname: '',
        email: '',
        telephone: '',
        service: '',
        date: '',
        time: '',
        duration: '',
      });
      setStartDate(null);
      setSelectedDuration(null);
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };

  const isValidEmail = (email: string) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
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
    <Container className='mt-5 form-container'>
      {formSubmitted && (
        <div className='info-message'>Formulář byl úspěšně odeslán!</div>
      )}

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Rezervace potvrzena</Modal.Title>
        </Modal.Header>
        <Modal.Body>Budeme se těšit na Vaši návštěvu!</Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={() => setShowModal(false)}>Zavřít</Button>
        </Modal.Footer>
      </Modal>

      <h1>Objednat se</h1>

      <Form className='mt-5' onSubmit={handleSubmit}>
        <Form.Group className='mb-3'>
          <Form.Label htmlFor='name'>Křestní jméno</Form.Label>
          <Form.Control
            type='text'
            placeholder='Křestní jméno'
            id='name'
            name='name'
            value={inputData.name}
            onChange={handleChange as React.ChangeEventHandler<HTMLInputElement>}
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
            value={inputData.surname}
            onChange={handleChange as React.ChangeEventHandler<HTMLInputElement>}
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
            value={inputData.email}
            onChange={handleChange as React.ChangeEventHandler<HTMLInputElement>}
            isInvalid={emailError}
            required
          />
          <Form.Control.Feedback type='invalid'>
            Zadejte platný e-mail.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label htmlFor='telephone'>Telefonní číslo</Form.Label>
          <Form.Control
            type='text'
            placeholder='Telefonní číslo'
            id='telephone'
            name='telephone'
            value={inputData.telephone}
            onChange={handleChange as React.ChangeEventHandler<HTMLInputElement>}
            isInvalid={telephoneError}
            required
          />
          <Form.Control.Feedback type='invalid'>
            Zadejte platné telefonní číslo (max. 9 číslic).
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label htmlFor='service'>Služba</Form.Label>
          <Form.Select
            id='service'
            name='service'
            value={inputData.service}
            onChange={handleChange as React.ChangeEventHandler<HTMLSelectElement>}
            required
          >
            <option value=''>Vyberte službu</option>
            {services.map((service) => (
              <option key={service.name} value={service.name}>
                {service.name}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Datum</Form.Label>
          <DatePicker
            selected={startDate}
            onChange={handleDateChange}
            minDate={new Date(today)}
            maxDate={new Date(maxDate)}
            filterDate={isWeekday}
            dateFormat='dd/MM/yyyy'
            locale='cs'
            className='form-control'
            required
          />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label htmlFor='time'>Čas</Form.Label>
          <Form.Select
            id='time'
            name='time'
            value={inputData.time}
            onChange={handleChange as React.ChangeEventHandler<HTMLSelectElement>}
            required
          >
            <option value=''>Vyberte čas</option>
            {availableHours.map((hour) => (
              <option key={hour} value={hour}>
                {hour}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Trvání</Form.Label>
          <div className='duration-options'>
            <Form.Check
              type='radio'
              label='30 minut'
              name='duration'
              checked={selectedDuration === 30}
              onChange={() => handleDurationSelection(30)}
            />
            <Form.Check
              type='radio'
              label='60 minut'
              name='duration'
              checked={selectedDuration === 60}
              onChange={() => handleDurationSelection(60)}
            />
          </div>
          {durationError && (
            <div className='text-danger'>Vyberte trvání služby.</div>
          )}
        </Form.Group>

        <Button variant='primary' type='submit'>
          Odeslat
        </Button>
      </Form>
    </Container>
  );
};
