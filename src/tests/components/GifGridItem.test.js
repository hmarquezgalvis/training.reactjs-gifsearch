import { shallow } from 'enzyme';

import GifGridItem from '../../components/GifGridItem'

describe( 'Tests for <GifGridItem />', () => {

  const url = 'https://media0.giphy.com/media/VXJWhaO7afRe/giphy.gif?cid=46e040a5354ei2def6320v0iehtkqw7wxly2lkk09swh5fpu&rid=giphy.gif&ct=g';
  const title = 'One Punch Man GIF';
  const wrapper = shallow( <GifGridItem url={ url } title={ title } /> );

  test( 'must be show the right state of component', () => {

    expect( wrapper ).toMatchSnapshot();
  });

  test( 'must have the props defined in the html generated', () => {
    const image = wrapper.find('img');

    expect( image.prop('src') ).toBe( url );
    expect( image.prop('alt') ).toBe( title );
  });

  test( 'must have the animate__bounceIn className in the html generated', () => {
    const image = wrapper.find('img');
    const classNames = image.prop('className');

    expect( classNames.includes('animate__bounceIn') ).toBe( true );
  })

});