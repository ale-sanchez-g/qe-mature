/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
const pug = require('pug');
// Compile the source code
const compiledFunction = pug.compileFile('apps/mature-api/src/assets/home.pug');
const app = express();

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to mature-api!' });
});

app.get('/', (req,res)=> {
  res.send(compiledFunction({
    name: 'QE-Mature'
  }));
});

app.get('/org', (req,res)=> {
  res.send({ message: 'Route to create Org!' });
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
server.on('error', console.error);
