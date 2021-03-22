require('dotenv').config();
const ora = require('ora');
const emojic = require('emojic');

const names = process.env.NAMES.split(',');

const randomIndex = Math.floor(Math.random() * names.length);
const winnaar = names[randomIndex];

const throbber = ora({
  prefixText: 'En de winnaar is: ',
  spinner: {
    frames: names,
    interval: 100,
  },
}).start();

setTimeout(() => {
  throbber.stopAndPersist({
    symbol: emojic.tada,
    text: winnaar + ' ' + emojic.tada,
  });
}, 1000 * 10);
