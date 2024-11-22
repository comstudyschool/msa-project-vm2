const express = require('express');
const bodyParser = require('body-parser');
const amqp = require('amqplib/callback_api');

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json([{ id: 1, item: 'Item1' }, { id: 2, item: 'Item2' }]);
});

const PORT = 3002;
app.listen(PORT, () => console.log(`Orders service running on port ${PORT}`));
