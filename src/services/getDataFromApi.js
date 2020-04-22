const getDataFromApi = () => {
  return fetch(
    'https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json'
  )
    .then((response) => response.json())
    .then((data) => {
      return data.results.map((character) => {
        // console.log(character);
        return {
          id: character.id,
          image: character.image,
          name: character.name,
          specie: character.species,
          planet: character.origin.name,
          //   episodes: character.(episode.leght),
          status: character.status,
        };
      });
    });
};
export default getDataFromApi;
