const cors = require('cors');
const helmet = require('helmet');

const runMiddleware = (req, res, fn) => {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
};

const corsMiddleware = cors({
  origin: ['http://localhost:5173', 'https://tutam9-musyaffaimansupriadi.vercel.app'],
  credentials: true
});

const helmetMiddleware = helmet();

module.exports = { runMiddleware, corsMiddleware, helmetMiddleware };