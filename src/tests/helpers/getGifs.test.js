import { getGifList } from "../../helpers/getGifs";

describe( 'test for getGifs helper', () => {

  test('mus have 10 elements', async () => {

    const gifs = await getGifList('one punch');

    expect( gifs.length ).toEqual( 12 );

  });

});