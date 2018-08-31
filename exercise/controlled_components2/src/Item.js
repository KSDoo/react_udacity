import React from 'react';
import PropTypes from 'prop-types';

const Item = (props) => {
  return (
    <li key={props.index}>{props.item}</li>
  )
}

Item.propTypes = {
  index: PropTypes.number.isRequired,
  item: PropTypes.string.isRequired,
};

export default Item;
