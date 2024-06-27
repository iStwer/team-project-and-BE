import { Container } from 'react-bootstrap';

interface Employee {
  id: number;
  name: string;
  specialization: string;
  education: string;
  freeTime: string;
  others: string;
  alt: string;
}

export const EmployeeCard = ({ employee }: { employee: Employee }) => {
  return (
    <Container>
      <h4 className='accordion-name'>{employee.name}</h4>
      <p>Specializace: {employee.specialization}</p>
      <p>Vzdelání: {employee.education}</p>
      <p>Volný čas: {employee.freeTime}</p>
      <p>{employee.others}</p>
      <img src='' alt={employee.alt}></img>
    </Container>
  );
};
