import { Container, Form, Button } from 'react-bootstrap';
import './BookingForm.css';

export const BookingForm = () => {
  return (
    <Container className='mt-5 form-container'>
      <h1>Objednat se</h1>
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
