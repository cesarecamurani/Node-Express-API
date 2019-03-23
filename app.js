import express from 'express';
import router from './routes/index.js';
import bodyParser from 'body-parser';
import db from './db/db';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

app.listen(PORT, () => {
  console.log("server running on port 5000")
});
