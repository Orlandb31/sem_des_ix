const express = require('express')
const mongoose = require('mongoose');
require("dotenv").config();
const userRoute = require("./routes/users");
const cors = require('cors')

const app = express();
app.use(cors())
app.use(express.json());
app.use("/api", userRoute);

app.get('/', function (req, res) {
  res.send('Hello World')
})

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => { console.log("Inicio Correctamente Iz ")})
    .catch((error) => console.log("Verg , Algo salio mal", error))

app.listen(3000)