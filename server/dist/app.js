"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var path = require('path');
var app = express();
exports.app = app;
var bodyParser = require('body-parser');
app.set('port', process.env.PORT || 3000);
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../../', 'client', 'index.html'));
});
//# sourceMappingURL=app.js.map