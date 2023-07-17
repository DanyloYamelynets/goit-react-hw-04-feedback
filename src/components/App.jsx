import { useState } from 'react';
import Buttons from './Buttons/Buttons';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

export default function App() {
  const [states, setStates] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const feedbackBtnClick = e => {
    const feedbackName = e.target.name;
    setStates(prevState => {
      return {
        [feedbackName]: prevState[feedbackName] + 1,
      };
    });
  };
  const countTotalFeedback = () => {
    const total = states.good + states.neutral + states.bad;
    return total;
  };
  const countPositiveFeedbackPercentage = () => {
    const good = states.good;
    const totalFeedback = countTotalFeedback();
    return totalFeedback > 0 ? (good * 100) / totalFeedback : 0;
  };

  const options = Object.keys(states);
  const totalFeedback = countTotalFeedback();
  return (
    <div className="container">
      <Buttons feedbackBtnClick={feedbackBtnClick} options={options} />

      {totalFeedback > 0 ? (
        <Statistics
          good={states.good}
          neutral={states.neutral}
          bad={states.bad}
          countTotalFeedback={countTotalFeedback}
          countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
}
