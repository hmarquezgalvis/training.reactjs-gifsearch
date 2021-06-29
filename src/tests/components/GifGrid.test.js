import { shallow } from 'enzyme';

import GifGrid from '../../components/GifGrid'
import { useFetchGifList } from '../../hooks/useFetchGifList'

jest.mock('../../hooks/useFetchGifList.js');

describe( 'tests for <GifGrid />', () => {

  const category = 'One Punch';

  test( 'must be the right html generated', () => {
    useFetchGifList.mockReturnValue({
      items: [],
      loading: true,
    });

    const wrapper = shallow( <GifGrid category={ category } />)

    expect( wrapper ).toMatchSnapshot();
  });

  test( 'must be show items when load images using useFetchGifList()', () => {
    const items = [
      {
        id: 'dyjrpqaUVqCELGuQVr',
        title: 'Kimetsu No Yaiba Demon Slayer GIF by Crunchyroll',
        url: 'https://media3.giphy.com/media/dyjrpqaUVqCELGuQVr/giphy-downsized-medium.gif?cid=46e040a5twrrjqmg74ppo6cc0cu8ijv6466ipnjffiezj0ca&rid=giphy-downsized-medium.gif&ct=g',
      },
      {
        id: 'dyjrpqaUVqCELGuQVr',
        title: 'Kimetsu No Yaiba Demon Slayer GIF by Crunchyroll',
        url: 'https://media3.giphy.com/media/dyjrpqaUVqCELGuQVr/giphy-downsized-medium.gif?cid=46e040a5twrrjqmg74ppo6cc0cu8ijv6466ipnjffiezj0ca&rid=giphy-downsized-medium.gif&ct=g',
      },
    ];

    useFetchGifList.mockReturnValue({
      items,
      loading: false,
    });

    const wrapper = shallow( <GifGrid category={ category } />);

    expect( wrapper ).toMatchSnapshot();
    expect( wrapper.find('p').exists() ).toBe( false );
    expect( wrapper.find('GifGridItem').length ).toBe( 2 );

  });

});