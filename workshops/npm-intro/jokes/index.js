const jokes = require('give-me-a-joke');
// console.dir(jokes);

jokes.getRandomDadJoke((joke) => console.log(joke));
