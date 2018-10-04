import React from 'react';
import PropTypes from 'prop-types';

const User = props => {
  return (
    <li className="user">
      <p>Username: {props.user.userName}</p>
      <p>Number of Games Played: {props.showGamesPlayed ? props.user.numGamesPlayed : '*'}</p>
    </li>
  );
};

User.propTypes = {
  user: PropTypes.object.isRequired,
  showGamesPlayed: PropTypes.bool.isRequired,
};

export default User;
