import giveMeAJoke from 'give-me-a-joke';

export default function handler(req, res) {
  giveMeAJoke.getRandomDadJoke(joke => {
    res.status(200).json({ joke });
  });
}
