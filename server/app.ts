const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

app.set('port', process.env.PORT || 3000);

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../', 'client', 'index.html'));
});

export { app };
