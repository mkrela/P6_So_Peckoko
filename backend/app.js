const express = require("express");
const mongoose = require("mongoose");
// const helmet = require('helmet');
const Sauce = require("./models/sauce");
const path = require("path");
require("dotenv").config();

const userRoutes = require("./routes/user");
const sauceRoutes = require("./routes/sauces");

const app = express();

mongoose
  .connect(
    "mongodb+srv://mkrela:mattfado57@projet6.ldg9u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.post("/api/sauce", (req, res, next) => {
  this.delete.req.body._id;
  const sauce = new Sauce({
    ...req.body,
  });
  sauce.save()
  .then(() => res.status(201).json({message: 'objet enregistré'}))
  .catch(error => res.status(400).json({error}))
});

app.use("./api/sauces", (req, res, next) => {
  const sauces = [
    {
      _id: "sauce1",
      title: "amora",
      description: "de la bonne mayo",
      imageUrl: "",
      price: 5000,
      userId: "ola",
    },
    {
      _id: "sauce2",
      title: "ama",
      description: "de la mayo",
      imageUrl: "",
      price: 500,
      userId: "ola2",
    },
  ];
  console.log("allooooofoooo");
  res.status(200).json(sauces);
});

app.use((req, res, next) => {
  res.json({ message: "Votre requête a bien été r!" });
});

module.exports = app;
