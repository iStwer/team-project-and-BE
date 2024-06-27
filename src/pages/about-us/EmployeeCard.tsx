import { Container } from 'react-bootstrap';
import { employees } from './Employees';

interface Employees {
  id: number;
  name: string;
  specialization: string;
  education: string;
  freeTime: string;
  others: string;
  src: string;
  alt: string;
};

export const EmployeeCard = ({ employees }: { employees: Employees }) => {
  return (
      <Container>
          <h4 className='accordion-name'>{employees.name}</h4>
          <p>Specializace: {employees.specialization}</p>
          <p>Vzdelání: {employees.education}</p>
          <p>Volný čas: {employees.freeTime}</p>
          <p>{employees.others}</p>
          <img src={employees.src} alt={employees.alt}></img>
      </Container>
  );
};