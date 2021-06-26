import React from 'react';

import './GifGridItem.css';

export const GifGridItem = ({ id, title, url }) => {
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
