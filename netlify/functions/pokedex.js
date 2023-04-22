// mod.cjs
// eslint-disable-next-line no-shadow, import/no-extraneous-dependencies
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
// eslint-disable-next-line func-names
exports.handler = async function () {
  const POKE_API = 'https://pokeapi.co/api/v2/pokedex/kanto';

  const response = await fetch(POKE_API);
  const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
