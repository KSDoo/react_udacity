import React from 'react';
import PropTypes from 'prop-types';

const MessageList = props => {
  const { user, messages } = props;

  return (
    <ul className="message-list">
      {messages.map((message, index) => (
        <li
          key={index}
          className={
            message.username === user.username ? 'message sender' : 'message recipient'
          }
        >
          <p>{`${message.username}: ${message.text}`}</p>
        </li>
      ))}
    </ul>
  );
};

MessageList.propTypes = {
  user: PropTypes.object.IsRequired,
  messages: PropTypes.array.IsRequired,
};

export default MessageList;
