import { shallow } from 'enzyme';
import '@testing-library/jest-dom';

import { AddCategory } from '../../components/AddCategory';

describe('tests for <AddCategory />', () => {

  const setCategories = jest.fn();
  let wrapper;

  beforeEach( () => {
    jest.clearAllMocks();
    wrapper = shallow( <AddCategory setCategories={ setCategories } /> );
  });

  test( 'must be the right html generated', () => {
    expect( wrapper ).toMatchSnapshot();
  });

  test( 'must be change the input', () => {
    const input = wrapper.find( 'input' );
    const value = 'Hi World';

    input.simulate( 'change', { target: { value } } );

    expect( wrapper.find( 'p' ).text().trim() ).toBe( value );
  });

  test( 'must be send the information on  submit', () => {
    wrapper.find( 'form' ).simulate( 'submit', { preventDefault() { } } );

    expect( setCategories ).not.toHaveBeenCalled();
  });

  test ( 'must call setCategories and clean de input text', () => {
    const value = 'Hunter x Hunter';

    wrapper.find( 'input' ).simulate( 'change', { target: { value } } );

    expect( wrapper.find( 'input' ).prop('value') ).toBe( value );

    wrapper.find( 'form' ).simulate( 'submit', { preventDefault() { } } );

    expect( setCategories ).toHaveBeenCalled();
    expect( setCategories ).toHaveBeenCalledTimes(1);
    expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) );

    expect( wrapper.find( 'input' ).prop('value') ).toBe( 'no' );

  });

});