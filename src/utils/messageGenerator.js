import moment from 'moment';
import { loremIpsum } from 'lorem-ipsum';
import { v4 as uuidv4 } from 'uuid';
import randomInteger from './randomInteger';

export default function messageGenerator(count, usersObj) {
  const users = Object.entries(usersObj);
  let ii = 0;
  let res = [];
  let time = moment();

  while (++ii < count) {
    const id = uuidv4();
    const userNum = randomInteger(0, users.length - 1);

    time = moment(time).add(-randomInteger(1, 25), 'minutes');
    res.push({
      id,
      user: {
        id: users[userNum][0],
        name: users[userNum][1].name,
      },
      time,
      message: loremIpsum({
        count: randomInteger(1, 30), // Number of "words", "sentences", or "paragraphs"
        format: 'plain', // "plain" or "html"
        random: Math.random, // A PRNG function
        units: 'words', // paragraph(s), "sentence(s)", or "word(s)"
      }),
    });
  }
  return res.reverse();
}
