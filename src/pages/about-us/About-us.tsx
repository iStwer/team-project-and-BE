import { Container } from 'react-bootstrap';
import { EmployeeCard } from './EmployeeCard';
import { employees } from './Employees';

export const Aboutus = () => {
  return (
    <>
      <Container>
        <h1>O nás</h1>
        <p>
          Fyzioterapeutická klinika PhysioReact se specializuje na komplexní
          rehabilitaci a péči o pohybový aparát. Naše multidisciplinární tým
          tvoří vysoce kvalifikovaní fyzioterapeuti s dlouholetou praxí, kteří
          se zaměřují na individuální přístup ke každému pacientovi.
        </p>
      </Container>
      <Container>
        <h2>Naše filozofie</h2>
        <p>
          Věříme v holistický přístup ke zdraví, kde se spojují moderní
          fyzioterapeutické techniky s osobní péčí a porozuměním k potřebám
          každého jednotlivce. Naším cílem je nejen zmírnění bolesti, ale i
          posílení těla a prevence budoucích problémů.
        </p>
      </Container>
      <Container>
        <h2>Náš tým</h2>
        <p>
          Náš tým tvoří čtyři zkušení fyzioterapeuti, kteří jsou zde pro vás
          každý den. Každý z našich specialistů má své unikátní zaměření a
          dovednosti, aby vám mohl poskytnout tu nejlepší péči.
        </p>
      </Container>
      {employees.map((employee) => (
        <EmployeeCard key={employee.id} employees={employee} />
      ))}
    </>
  );
};
