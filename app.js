const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {

	res.send('Under Construction');

});

app.get('/demo', (req, res) => {
  res.set('X-full-stack', '4life');
  res.status(418);
  res.send('I prefer coffee');
});

app.listen(port, () => console.log(`Listening on port: ${port}...`));
