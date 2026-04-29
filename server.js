require('dotenv').config();
const DbConnection = require("./db");
const playerRouter = require("./routes/playerRoutes");

DbConnection.RunDb();

process.on("SIGINT", async () => {
  await DbConnection.CloseDb();
  process.exit(0);
});

const express = require('express'); 
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}))
const port = process.env.PORT || 3000;


app.use('/api/players', playerRouter);




app.listen(port, () => {
  console.log('Server is now running');
});