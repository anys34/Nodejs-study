const express = require('express');
const app = express();
const port = 6000;
const fs = require('fs');

const Timetable = require('comcigan-parser');
const timetable = new Timetable();

app.get('/', function(req, res){
  res.send('main');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});