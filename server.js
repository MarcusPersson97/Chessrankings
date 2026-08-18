require('dotenv').config();
const DbConnection = require("./db");
const playerRouter = require("./routes/playerRoutes");
const gameRouter = require("./routes/gameRoutes");
const reviewRouter = require("./routes/reviewRoutes");
const cors = require("cors");

DbConnection.RunDb();

process.on("SIGINT", async () => {
  await DbConnection.CloseDb();
  process.exit(0);
});

const express = require('express'); 
const app = express();
app.use(cors(
  {origin:"http://localhost:5173"}));
app.use(express.json());
app.use(express.urlencoded({extended: true}))
const port = process.env.PORT || 3000;


app.use('/api/players', playerRouter);
app.use('/api/games', gameRouter);
app.use('/api/reviews', reviewRouter);



app.listen(port, () => {
  console.log('Server is now running');
});