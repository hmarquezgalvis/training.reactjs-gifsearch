import React, { useState } from 'react'
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {

  const initialState = '';
  const [ inputValue, setInputValue ] = useState(initialState)

  const handleInputChange = ( e ) => {
    setInputValue(e.target.value);
  };

  const handleSubmit  = ( e ) => {
    e.preventDefault();

    if (inputValue === '') return;

    setCategories( values => [ inputValue, ...values] );
    setInputValue( '' );
  };

  return (
    <form className="mb-3"
      onSubmit={ handleSubmit }
    >
      <p>{ inputValue }</p>
      <label className="form-label">Category:</label>
      <input className="form-control" type="text"
        value={ inputValue }
        onChange={ handleInputChange }
      />
    </form>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
};

export { AddCategory }
