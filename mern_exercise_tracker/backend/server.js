require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI; //url to mongodb atlass
app.use(cors());
app.use(express.json());
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB database connection established");
});
const exerciseRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");
app.use("/exercises", exerciseRouter);
app.use("/users", usersRouter);
app.listen(port, () => {
  console.log(`Server Listening on port: ${port}`);
});
