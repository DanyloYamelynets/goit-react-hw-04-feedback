import PropTypes from 'prop-types';
import { StatsSection, Feedback } from './StatisticsStyled';

function Statistics({
  good,
  neutral,
  bad,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) {
  return (
    <StatsSection>
      <Feedback>Good: {good}</Feedback>
      <Feedback>Neutral: {neutral}</Feedback>
      <Feedback>Bad: {bad}</Feedback>
      <Feedback>Total: {countTotalFeedback()}</Feedback>
      <Feedback>
        Positive feedback: {Math.round(countPositiveFeedbackPercentage())}%
      </Feedback>
    </StatsSection>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  countTotalFeedback: PropTypes.func.isRequired,
  countPositiveFeedbackPercentage: PropTypes.func.isRequired,
};
export default Statistics;
