import React from 'react';
import PropTypes from 'prop-types';


// Determine whole, half, or empty star from value.
const classNameFromValue = (value, start) => {
  if (value >= start) {
    // Whole
    return 'fas fa-star';
  } else if (value >= start - 0.5) {
    // Half
    return 'fas fa-star-half-alt';
  } else {
    // Empty
    return 'far fa-star';
  }
};

const Rating = ({ value, text, color }) => {
  return (
    <div className="rating">
      <span>
        <i style={{color}} className={classNameFromValue(value, 1)} />
        <i style={{color}} className={classNameFromValue(value, 2)} />
        <i style={{color}} className={classNameFromValue(value, 3)} />
        <i style={{color}} className={classNameFromValue(value, 4)} />
        <i style={{color}} className={classNameFromValue(value, 5)} />
      </span>
      <span>{text && text}</span>
    </div>
  );
};

Rating.defaultProps = {
  color: 'orange'
};

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string
};

export default Rating;