// ServiceCard.tsx
import React from 'react';

interface ServiceCardProps {
    title: string;
    description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description }) => {
    return (
        <div className="service-card">
            <div className="service-icon"></div>
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    );
};

export default ServiceCard;