const API_KEY = 'aynHBxIKTHuBwiN66j684GVhgEzsRGSw';

export const getGifList = async ( query, limit = 12 ) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${ API_KEY }&q=${ query }&limit=${ limit }`;

  const response = await fetch( url );
  const { data } = await response.json();

  const gifList = data.map( x => {
    return {
      id: x.id,
      title: x.title,
      url: x.images?.downsized_medium.url,
    };
  });
  
  return gifList;
};