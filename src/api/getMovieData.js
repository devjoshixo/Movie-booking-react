const getMovieData = async (id) => {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  try {
    const data = await fetch(
      `https://api.tvmaze.com/shows/${id}`,
      requestOptions
    );
    const result = await data.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export default getMovieData;
