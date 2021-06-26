import React from 'react'
import PropTypes from 'prop-types';

import { GifGridItem } from './GifGridItem';
import { useFetchGifList } from '../hooks/useFetchGifList';

const GifGrid = ({ category }) => {

  const { items: imageList, loading } = useFetchGifList( category );

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">
          { category }
          { 
            loading && <div className="spinner-grow spinner-grow-sm ms-1" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
          }
        </h5>

        <div className="d-flex align-content-stretch flex-wrap">
          {
            imageList.map( (item, idx) =>
              <GifGridItem 
                key={ item.id }
                { ...item } />
            )
          }
        </div>
      </div>
    </div>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
};

export default GifGrid;
