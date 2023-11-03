import { ContainerButton, Button } from './feedbackOptions.styled';

export const FeedbackOptions = ({ good, neutral, bad }) => {
  return (
    <ContainerButton>
      <Button onClick={good}>Good</Button>
      <Button onClick={neutral}>Neutral</Button>
      <Button onClick={bad}>Bad</Button>
    </ContainerButton>
  );
};
