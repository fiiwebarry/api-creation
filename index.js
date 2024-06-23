const express = require('express');

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(function (request, response, next) {
  console.log(request.protocol, request.url, request.method);
  next();
});

app.get('/', function (request, response) {
  response.send('Hello');
});

app.get('/about', function (request, response) {
  response.send('FIIWE BARRY');
});

app.get('/contact-us', function (request, response) {
  response.send('hello my gee');
});

app.post('/login', function (request, response) {
  console.log('request body: ', request.body);
  console.log('Content type: ', request.headers['content-type']);
  response.send({
    isSuccessful: true,
    message: 'Logged in successfully',
  });
});

app.post(function (request, response) {});

app.listen(3000, function () {
  console.log('server is up');
});
