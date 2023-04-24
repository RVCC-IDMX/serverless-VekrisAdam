const chalk = require('chalk');
// eslint-disable-next-line import/no-extraneous-dependencies
const { DateTime } = require('luxon');

const { log } = console;

exports.handler = async () => {
  const date = DateTime.now();
  log(chalk.blue(`${date}: Hello world from Netlify Functions!`));
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello world!' }),
  };
};
