import React from 'react';
import PropTypes from 'prop-types';

import './BibelText.css';

const BibelText = ({ bibelstelle, text }) => (
  <div className="BibelText">
    <h1 className="BibelText-bibelstelle">{bibelstelle}</h1>
    <p>{text}</p>
  </div>
);

BibelText.propTypes = {
  bibelstelle: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default BibelText;
