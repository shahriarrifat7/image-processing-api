import express = require('express');
import imageRoute from './route/image-route';

const app: express.Application = express();


app.listen(3000, function () {
  console.log('Image processing API listening on port 3000');
});

app.use(imageRoute);

module.exports = app;