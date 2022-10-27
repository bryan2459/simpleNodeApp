const path = require('path');

const express = require('express');

const app = express();
const PORT = process.env.PORT || 1337;


app.use(express.static('public'));

app.get('/', (req, res) => {
  const filePath = path.join(__dirname, 'views', 'welcome.html');
  res.sendFile(filePath);
});

app.listen(PORT);
