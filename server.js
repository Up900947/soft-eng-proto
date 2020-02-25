'use strict';
const express = require('express');
const app = express();
const mb = require('./messageboard');

app.use(express.static('client'));

app.listen(8080);
