interface Faq {
  id: number;
  question: string;
  answer: string;
}

export const FaqCard = ({ faq }: { faq: Faq }) => {
  return (
    <div>
      <h4>{faq.question}</h4>
      <p>{faq.answer}</p>
    </div>
  );
};
