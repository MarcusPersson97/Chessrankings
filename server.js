require('dotenv').config();
const DbConnection = require("./db");


DbConnection.RunDb();

process.on("SIGINT", async () => {
  await DbConnection.CloseDb();
  process.exit(0);
});

const express = require('express');
const app = express();
const router = express.Router();

app.use(express.json());
app.use(express.urlencoded({extended: true}))

const port = process.env.PORT || 3000;


app.get('/', (req, res) => {
  res.status(200).send('Hello world');
});

app.get('/api/players', async (req, res) =>{
  
})


app.listen(port, () => {
  console.log('Server is now running');
});