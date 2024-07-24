import { Accordion } from 'react-bootstrap';
import './FaqCard.css';

interface Faq {
  id: number;
  question: string;
  answer: string;
}

export const FaqCard = ({ faq }: { faq: Faq }) => {
  return (
    <Accordion flush>
      <Accordion.Item eventKey={String(faq.id)}>
        <Accordion.Header>
          <h4 className='accordion-question'>{faq.question}</h4>
        </Accordion.Header>
        <Accordion.Body>
          <p className='accordion-answer'>{faq.answer}</p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};
