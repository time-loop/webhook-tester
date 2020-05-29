//blfdah blha blah dfads

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.post('/webhook', (req, resp) => {
  console.log(req.body.event + " trigger");
  console.log(req.body, '\n\n');

  resp.status(200).end();
});

app.listen(3000, () => console.log('listening to port 3000'));

// mehh
