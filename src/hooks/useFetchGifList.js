import { useEffect, useState } from "react";
import { getGifList } from "../helpers/getGifs";

export const useFetchGifList = ( category , limit = 12 ) => {

  const initialState = { items: [], loading: true };
  const [state, setState] = useState(initialState);

  useEffect( () => {
    getGifList( category, limit ).then(images => setState({
        items: images,
        loading: false,
      })
    );
  }, [ category, limit ]);

  return state;
};