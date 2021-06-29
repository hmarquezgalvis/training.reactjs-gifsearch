import { useFetchGifList } from '../../hooks/useFetchGifList';
import { renderHook } from '@testing-library/react-hooks'

describe( 'tests for useFetchGifList hook', () => {
  
  const category = 'One Punch';

  test( 'must be return the initial state', async () => {

    const { result, waitForNextUpdate } = renderHook( () => useFetchGifList( category ) );
    const { items, loading } = result.current;

    await waitForNextUpdate();

    expect( items ).toEqual( [] );
    expect( loading ).toBeTruthy();
  });

  test('must be show images array and loading in false', async () => {

    const { result, waitForNextUpdate } = renderHook( () => useFetchGifList( category ) );
    await waitForNextUpdate();
    const { items, loading } = result.current;
    
    expect( items.length ).toEqual( 12 );
    expect( loading ).toBeFalsy();
  })
  

});
