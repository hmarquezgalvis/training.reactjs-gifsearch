import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import GifGrid from './components/GifGrid';

export const GifExpertApp = () => {

  const initialState = [ 'One Punch', 'Dragon Ball', 'Demon Slayer' ];
  const [ categories, setCategories ] = useState(initialState);

  return (
    <div className="container">
      <h2>GifExpertApp</h2>

      <AddCategory
        setCategories={ setCategories }
      />

      <hr/>

      { 
        categories.map( category => (
          <GifGrid 
            key={ category }
            category={ category }
          />
        ))
      }
    </div>
  );
};