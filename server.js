'use strict';


//the key word 'require' brings in required library
//note, it still needs to be installed in the terminal
const express = require('express');
const app = express();

require('dotenv').config();

const PORT = process.env.PORT || 3001;


// get '/' means home; req = request; res = respond;
app.get('/greeting', function (req, res) {
  res.send('Hello World')
})

// tells express to serve files from the public folder
app.use(express.static('./public'));

app.listen(PORT, () => console.log(`listening on ${PORT}`));

