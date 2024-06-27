import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import ServiceCard from './ServiceCard';
import servicesData from '../../assets/services.json'; // import JSON souboru
import './Services.css';

interface Service {
  id: number;
  name: string;
  description: string;
}

export const Services = () => {
  const [services, setServices] = useState<Service[]>([]); // explicitní definice typu Service[] pro services

  useEffect(() => {
    // Simulace načtení dat (např. z API)
    setServices(servicesData);
  }, []);

  return (
    <Container className='mt-5 services-container'>
      <h1>Naše služby</h1>
      <p>
        Jsme tady proto, abychom vám pomohli dosáhnout optimální pohyblivosti a
        pohodlí ve vašem životě. Nabízíme širokou škálu specializovaných služeb,
        které jsou navrženy tak, aby vyhověly individuálním potřebám každého
        klienta.
      </p>

      <Row className='service-list'>
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.name}
            description={service.description}
          />
        ))}
      </Row>
    </Container>
  );
};

export default Services;
