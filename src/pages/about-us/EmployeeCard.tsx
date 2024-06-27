import { Container } from 'react-bootstrap';
import profile1 from '../../assets/about-us/profile1.png';
import profile2 from '../../assets/about-us/profile2.png';
import profile3 from '../../assets/about-us/profile3.png';
import profile4 from '../../assets/about-us/profile4.png';

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
  const profilePics = [profile1, profile2, profile3, profile4];

  return (
    <Container>
      <h4 className='accordion-name'>{employee.name}</h4>
      <p>Specializace: {employee.specialization}</p>
      <p>Vzdelání: {employee.education}</p>
      <p>Volný čas: {employee.freeTime}</p>
      <p>{employee.others}</p>
      <img src={profilePics[employee.id]} alt={employee.alt}></img>
    </Container>
  );
};
