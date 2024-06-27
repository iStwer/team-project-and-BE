// ServiceCard.tsx
import React from 'react';
import { Col } from 'react-bootstrap';

interface ServiceCardProps {
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description }) => {
  return (
    <Col xs={12} md={6} className='service-card'>
      <div className='service-icon'></div>
      <h4>
        <strong>{title}</strong>
      </h4>
      <p>{description}</p>
    </Col>
  );
};

export default ServiceCard;
