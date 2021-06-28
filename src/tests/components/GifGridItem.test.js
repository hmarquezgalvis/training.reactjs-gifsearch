import { shallow } from 'enzyme';

import GifGridItem from '../../components/GifGridItem'

describe( 'Tests for <GifGridItem />', () => {

  test( 'must be show the right state of component', () => {

    const url = 'https://media0.giphy.com/media/VXJWhaO7afRe/giphy.gif?cid=46e040a5354ei2def6320v0iehtkqw7wxly2lkk09swh5fpu&rid=giphy.gif&ct=g';
    const title = 'One Punch Man GIF';

    const wrapper = shallow( <GifGridItem url={ url } title={ title } /> );
    expect( wrapper ).toMatchSnapshot();
  });

});