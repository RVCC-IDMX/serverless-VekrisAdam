// mod.cjs
// eslint-disable-next-line no-shadow, import/no-extraneous-dependencies
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const chalk = require('chalk');
// eslint-disable-next-line import/no-extraneous-dependencies
const { DateTime } = require('luxon');

const { log } = console;

exports.handler = async (event) => {
  const eventBody = JSON.parse(event.body);
  const date = DateTime.now();
  const color = eventBody.region === 'kanto' ? chalk.magenta : chalk.yellow;

  log(color(`${date}: Fetching data from PokeAPI`));
  log(color(`\teventBody.region: ${eventBody.region}`));

  const POKE_API = `https://pokeapi.co/api/v2/pokedex/${eventBody.region}`;

  const response = await fetch(POKE_API);
  const data = await response.json();
  log(color(`\tNumber of entries: ${data.pokemon_entries.length}`));

  return {
    statusCode: 200,
    body: JSON.stringify({
      pokemon: data.pokemon_entries,
    }),
  };
};
