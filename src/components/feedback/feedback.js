import { Component } from 'react';
import { Statictics } from './statistics';
import { FeedbackOptions } from 'components/feedback/feedbackOptions';
import { Section } from './section';
import { Notification } from './notification';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  };

  goodFeedbak = () => {
    this.setState(
      prevState => ({
        good: prevState.good + 1,
      }),
      this.calculateTotalFeedback
    );
  };
  neutralFeedbak = () => {
    this.setState(
      prevState => ({
        neutral: prevState.neutral + 1,
      }),
      this.calculateTotalFeedback
    );
  };
  badFeedbak = () => {
    this.setState(
      prevState => ({
        bad: prevState.bad + 1,
      }),
      this.calculateTotalFeedback
    );
  };
  calculateTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    this.setState(
      { total: good + neutral + bad },
      this.countPositiveFeedbackPercentage
    );
  };

  countPositiveFeedbackPercentage = () => {
    const { total, good } = this.state;
    const positivePercentage = Math.round((good / total) * 100);
    this.setState({ positivePercentage });
  };
  render() {
    return (
      <div>
        <Section title="Pleace leave feedback">
          <FeedbackOptions
            good={this.goodFeedbak}
            neutral={this.neutralFeedbak}
            bad={this.badFeedbak}
          />
        </Section>
        <Section title="Statistic">
          {this.state.bad || this.state.good || this.state.neutral ? (
            <Statictics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.state.total}
              positivePercentage={this.state.positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
export default Feedback;
