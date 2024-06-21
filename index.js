const express = require('express');

const app = express();

app.get('/', function (request, response) {
  response.send('Hello');
});

app.get('/about', function (request, response) {
  response.send('FIIWE BARRY');
});

app.get('/contact-us', function (request, response) {
  response.send('hello my gee');
});

app.post(function (request, response) {});

app.listen(3000, function () {
  console.log('server is up');
});
