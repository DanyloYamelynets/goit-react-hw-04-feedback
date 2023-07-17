import PropTypes from 'prop-types';
import { Message } from './NotificationStyled';

function Notification({ message }) {
  return <Message>{message}</Message>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
