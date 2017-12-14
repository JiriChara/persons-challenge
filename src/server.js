/**
 * Simple and stupid mock server that returns persons json when requested through /api/persons
 */
import express from 'express';

import persons from './mocks/persons.json';

const port = 3001;
const app = express();

/**
 * GET /api/persons
 */
app.get('/api/persons', (req, res) => {
  res.json(persons);
});

app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Express is running on localhost:${port}`);
  /* eslint-enable no-console */
});
