const express = require('express');
//const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const routes = require('./routes');

// const { PORT = 3000 } = process.env;
const { PORT = 3001 } = process.env;

const app = express();

/*----------CORS------------*/
const cors = require('cors');
/*--------------------------*/

app.use(bodyParser.json());

/*----------CORS------------*/
app.use(cors());
/*--------------------------*/

app.use(routes);

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/mestodb', {
    useNewUrlParser: true,
    useUnifiedTopology: false,
  });

  app.listen(PORT, () => {
    console.log(`Application is running on port ${PORT}`);
  });
}

main();
