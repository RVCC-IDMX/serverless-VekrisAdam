// mod.cjs
// eslint-disable-next-line no-shadow, import/no-extraneous-dependencies
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
// eslint-disable-next-line func-names
exports.handler = async function (event, context) {
  const eventBody = JSON.parse(event.body);
  const POKE_API = `https://pokeapi.co/api/v2/pokedex/${eventBody.region}`;

  const response = await fetch(POKE_API);
  const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify({
      pokemon: data.pokemon_entries,
    }),
  };
};
