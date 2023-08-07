const getMovies = async (name = 'all') => {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  try {
    const data = await fetch(
      `https://api.tvmaze.com/search/shows?q=better`,
      requestOptions
    );
    const result = await data.json();
    return result;
  } catch (error) {
    console.log('error', error);
  }
};

export default getMovies;
