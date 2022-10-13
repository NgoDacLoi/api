const express = require("express");
const mongoose = require("mongoose");
const Router = require("./routes")

const app = express();

app.use(express.json());

mongoose.connect(
    `mongodb+srv://choloi:142001@cluster0.4nlmif1.mongodb.net/?retryWrites=true&w=majority`, 
    {
     
    }
  );

  const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use(Router);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server is running at port 3000");
});