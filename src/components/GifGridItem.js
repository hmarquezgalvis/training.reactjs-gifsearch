import React from 'react';
import PropTypes from 'prop-types';

import './GifGridItem.css';

const GifGridItem = ({ title, url }) => {
  return (
    <>
      <div className="col-3">
        <img className="border border-white animate_animated animate__bounceIn"
          src={ url } 
          alt={ title } />
      </div>
    </>
  )
}
GifGridItem.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default GifGridItem;
