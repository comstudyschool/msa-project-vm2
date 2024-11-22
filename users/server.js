const express = require('express');
const bodyParser = require('body-parser');
const amqp = require('amqplib/callback_api');

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json([{ id: 1, name: 'User1' }, { id: 2, name: 'User2' }]);
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Users service running on port ${PORT}`));
