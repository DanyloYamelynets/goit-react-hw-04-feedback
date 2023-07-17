import PropTypes from 'prop-types';
import { BtnSection, StyledButton, Title, StatsTitle } from './ButtonsStyled';

const Buttons = ({ feedbackBtnClick, options }) => {
  return (
    <div>
      <Title>Please leave feedback</Title>
      <BtnSection>
        {options.map(option => {
          return (
            <StyledButton
              key={option}
              type="button"
              name={option}
              onClick={feedbackBtnClick}
            >
              {option}
            </StyledButton>
          );
        })}
      </BtnSection>
      <StatsTitle>Statistics</StatsTitle>
    </div>
  );
};

Buttons.propTypes = {
  feedbackBtnClick: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Buttons;
