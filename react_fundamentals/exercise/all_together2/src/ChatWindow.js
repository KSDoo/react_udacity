import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MessageList from './MessageList';
import AddMessage from './AddMessage';

class ChatWindow extends Component {
  onMessage = message => {
    this.props.onMessage(this.props.user.username, message);
  }
  render () {
    const { user, messages } = this.props;

    return (
      <div className="chat-window">
        <h2>Super Awesome Chat</h2>
        <div className="name sender">{user.username}</div>
        <MessageList
          user={user}
          messages={messages}
        />
      <AddMessage onMessage={this.onMessage} />
      </div>
    );
  }
}

ChatWindow.propTypes = {
  user: PropTypes.object.IsRequired,
  messages: PropTypes.array.IsRequired,
  onMessage: PropTypes.func.IsRequired,
};

export default ChatWindow;
