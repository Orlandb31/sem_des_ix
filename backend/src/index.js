const express = require('express')
const mongoose = require('mongoose');
require("dotenv").config();

const upload = require("./utils/storage")

const userRoute = require("./routes/users");
const eventRoute = require("./routes/events");

const cors = require('cors')

const app = express();
app.use(express.json())
app.use(cors())
app.use(express.json());
app.use("/api", userRoute);
app.use("/api", eventRoute);
app.use("/public", express.static(`./uploads`))

app.get('/', function (req, res) {
  res.send('Hello World')
})

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => { console.log("todo cool")})
    .catch((error) => console.log("Algo salio mal", error))

app.listen(3000)