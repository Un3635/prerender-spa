const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'dist')));
app.listen('3306', () => {
  console.log('3306=>success');
})
