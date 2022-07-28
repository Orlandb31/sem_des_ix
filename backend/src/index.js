const express = require('express')
const mongoose = require('mongoose');
require("dotenv").config();
const { createClient } = require("yappy-node-back-sdk");
const upload = require("./utils/storage")
const userRoute = require("./routes/users");
const eventRoute = require("./routes/events");
const { v4: uuidv4 } = require('uuid');

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

let yappyClient = createClient(process.env.MERCHANT_ID, process.env.SECRET_KEY);

const payment = {
  total: null,
  subtotal: null,
  shipping: 0.0,
  discount: 0.0,
  taxes: null,
  orderId: null,
  successUrl: "https://www.yappy.peqa.dev",
  failUrl: "https://www.yappy.peqa.dev",
  tel: process.env.TEL || "66666666",
  domain: process.env.DOMAIN || "https://yappy.peqa.dev",
};

app.post("/api/pagosbg", async (req, res) => {
  const { name, price: subtotal } = req.body;
  const uuid = uuidv4();
  const taxes = Number((subtotal * 0.07).toFixed(2));
  const total = subtotal + taxes;
  const newPayment = {
    ...payment,
    subtotal: 0.01, // Para evitar tener que pagar durante la prueba
    taxes: 0.01, // Para evitar tener que pagar durante la prueba
    total: 0.02, // Para evitar tener que pagar durante la prueba
    orderId: uuid.split("-").join("").slice(0, 10),
  };
  const response = await yappyClient.getPaymentUrl(newPayment);
  res.json(response);
});

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => { console.log("todo cool")})
    .catch((error) => console.log("Algo salio mal", error))

app.listen(3000)