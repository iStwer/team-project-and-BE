import { FC } from 'react';
import './ReviewCard.css';
import { Col } from 'react-bootstrap';

interface Review {
  id: number;
  text: string;
  name: string;
}

export const ReviewCard = ({ review }: { review: Review }) => {
  return (
    <Col sm={6}>
      <p className='client-review-text'>{review.text}</p>
      <p className='client-review-name'>{review.name}</p>
    </Col>
  );
};
