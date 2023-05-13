const express = require('express');
const port = 6969;
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname + '/public')));

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});