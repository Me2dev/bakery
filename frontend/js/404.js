const express = require('express');
const app = express();

app.get('*', function(req, res){
  res.status(404).send('Sorry, this page does not exist!');
});

app.listen(3000, function () {
  console.log('Server is running on port 3000');
});