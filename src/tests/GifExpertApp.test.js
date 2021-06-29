import { shallow } from "enzyme";
import { GifExpertApp } from "../GitExpertApp";

describe( 'tests for <GifExpertApp />', () => {

  test( 'must be right generated html', () => {
    const wrapper = shallow( <GifExpertApp /> );

    expect( wrapper ).toMatchSnapshot();
  });

  test('should show a list of categories', () => {
    const categories = [ 'One Punch', 'Dragon Ball', 'Demon Slayer' ];
    const wrapper = shallow( <GifExpertApp defaultState={ categories } /> );

    expect( wrapper ).toMatchSnapshot();
    expect( wrapper.find('GifGrid').length ).toBe( categories.length );
  })
  

});