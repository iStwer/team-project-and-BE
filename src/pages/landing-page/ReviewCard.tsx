import { FC } from 'react';

interface Review {
  id: number;
  text: string;
  name: string;
}

export const ReviewCard = ({ review }: { review: Review }) => {
  return (
    <div>
      <p>{review.text}</p>
      <p>{review.name}</p>
    </div>
  );
};
