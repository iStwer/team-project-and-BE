import { Container, Form, Button, Modal } from 'react-bootstrap';
import './BookingForm.css';
import services from '../../assets/services.json';
import { FormEvent, ChangeEvent, useState, useEffect } from 'react';
import axios from 'axios';

interface FormInputData {
  id: number | undefined;
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
    id: undefined,
    name: '',
    surname: '',
    email: '',
    telephone: '',
    service: '',
    date: '',
    time: '',
  });

  const [checkedInputData, setCheckedInputData] =
    useState<FormInputData | null>(null);
  const [telephoneError, setTelephoneError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  //const [availabilityError, setAvailabilityError] = useState<string>('');
  const [availableHours, setAvailableHours] = useState([
    '09:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
  ]);

  //INPUT FIELD CHANGE HANDLING
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputData((prevData) => ({ ...prevData, [name]: value }));
  };

  //FORM SUBMIT HANDLING
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await checkAvailabilityAndSubmit();
  };

  //EMAIL VALIDITY CHECK
  const isValidEmail = (email: string) => {
    // Define a regular expression pattern for email validation.
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  //FETCHING LATEST ID + SETTING NEW ID + PHONE AND EMAIL VALIDITY CHECK
  const checkAvailabilityAndSubmit = async () => {
    try {
      const response = await fetch('http://localhost:3001/bookings').then(
        (res) => res.json(),
      );

      let checkedTelephone = inputData.telephone.trim().replace(/\s+/g, '');
      console.log('phone length: ', checkedTelephone.length);
      let checkedEmail = isValidEmail(inputData.email.trim());
      console.log('email', checkedEmail);

      if (isNaN(parseInt(checkedTelephone)) || checkedTelephone.length > 9) {
        setTelephoneError(true);
        setEmailError(false);
      } else if (!checkedEmail) {
        setEmailError(true);
        setTelephoneError(false);
      } else {
        const formattedData = {
          id: response[response.length - 1].id + 1,
          name: inputData.name.trim(),
          surname: inputData.surname.trim(),
          email: inputData.email.trim(),
          telephone: checkedTelephone,
          service: inputData.service.trim(),
          date: inputData.date.trim(),
          time: inputData.time.trim(),
        };

        setTelephoneError(false);
        setEmailError(false);
        setCheckedInputData(formattedData);

        /* const generateHoursOptions = () => {
          const currentHour = d.getHours();
          const availableHours = [
            '09:00',
            '10:00',
            '11:00',
            '12:00',
            '13:00',
            '14:00',
            '15:00',
            '16:00',
            '17:00',
            '18:00',
          ];
          if (inputData.date === today) {
            return availableHours.filter(
              (hour) => parseInt(hour.substr(0, 2)) > currentHour,
            );
          }

          return availableHours; 
        };*/
      }
    } catch (err) {
      console.error(err);
    }
  };

  //NEW BOOKING POST AFTER NEW ID and DATA CHECK
  useEffect(() => {
    if (checkedInputData) {
      const postNewBooking = async () => {
        try {
          if (checkedInputData) {
            const response = await axios.post(
              'http://localhost:3001/bookings',
              checkedInputData,
            );
            console.log('Booking submitted', response.data);
            localStorage.setItem('formSubmitted', 'true');
            setShowModal(true);
            setFormSubmitted(true);
          }
        } catch (err) {
          console.error(err);
        } finally {
          setCheckedInputData(null);
          setInputData({
            id: undefined,
            name: '',
            surname: '',
            email: '',
            telephone: '',
            service: '',
            date: '',
            time: '',
          });
          setTelephoneError(false);
          setEmailError(false);
        }
      };

      postNewBooking();
    }
  }, [checkedInputData]);

  //SUCCESSFUL FORM SUBMISSION MODAL
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
      {/*Potvrzení nahoře na stránce po odeslání rezervace */}
      {localStorage.getItem('formSubmitted') && (
        <div className='info-message'>Formulář byl úspěšně odeslán!</div>
      )}

      {/*Modal - vyskakovací okýnko, zobrazí se po odeslání rezervace přes obsah stránky*/}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Rezervace potvrzena</Modal.Title>
        </Modal.Header>
        <Modal.Body>Budeme se těšit na Vaši návštěvu!</Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={() => setShowModal(false)}>
            Zavřít
          </Button>
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

          {emailError && (
            <Form.Text>
              Zadejte platný e-mail!
              <br />
            </Form.Text>
          )}

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

          {telephoneError && (
            <Form.Text>
              Zadejte platné telefonní číslo! (pouze číslice, bez předvolby)
              <br />
            </Form.Text>
          )}

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
            as='select'
            id='time'
            name='time'
            step='1800'
            onChange={handleChange}
            required
          >
            <option value='' disabled selected hidden>
              Vyberte čas návštěvy
            </option>
            {availableHours.map((hour) => (
              <option key={hour} value={hour}>
                {hour}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        <Button type='submit' className='action-btn mt-3 mb-5'>
          Objednat se
        </Button>
      </Form>
    </Container>
  );
};
