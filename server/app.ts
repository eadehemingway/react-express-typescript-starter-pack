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

app.use(express.static(path.resolve(__dirname, '../../client/dist/public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
});

export { app };
