const express = require('express');
const path = require('path');
const app = express();

app.set('port', process.env.PORT || 3000);

app.use(express.json());

app.use(express.static(path.join(__dirname, '../../client/dist/public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/dist/public/index.html'));
});

export { app };
