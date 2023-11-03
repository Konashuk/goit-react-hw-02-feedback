import { FeedbackOptions } from 'components/feedbackOptions';

export const Section = ({ title, children }) => {
  return (
    <section>
      <h1>{title}</h1>
      {children}
    </section>
  );
};
