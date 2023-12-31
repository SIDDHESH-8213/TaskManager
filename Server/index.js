const express = require("express");
const mongoose = require("mongoose");
const tasks = require("./routes/tasks");
const connectDB = require('./db/connect');
require("dotenv").config();
const cors = require('cors');


const app = express();

const port = process.env.PORT || 5173;

app.use(express.json());

app.use(cors());

app.use("/api/v1/tasks", tasks)

const start = async () => {
    try {
      await connectDB(process.env.MONGO_URI);
      app.listen(port, () =>
        console.log(`Server is listening on port ${port}...`)
      );
    } catch (error) {
      console.log(error);
    }
  };
  
start();


