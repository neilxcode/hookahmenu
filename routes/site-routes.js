const express    = require("express");
const siteRoutes = express.Router();
const Blend = require('../models/blendSchema');
const mongoose     = require('mongoose');

mongoose.Promise = Promise;
mongoose
  .connect('mongodb://localhost/hookahmenu', {useMongoClient: true})
  .then(() => {
    console.log('Connected to Mongo!')
  }).catch(err => {
    console.error('Error connecting to mongo', err)
  });

  siteRoutes.get("/", (req, res) => {
    Blend.find()
    .then((infoFromDb) => {
      res.render("index", {infoFromDb});
    })
})


siteRoutes.get("/blends", (req, res) => {
  Blend.find()
    .then((infoFromDb) => {
      res.render("blends", {infoFromDb});
    })
  // res.render("blends")
})

siteRoutes.use((req, res, next) => {
  if (req.session.currentUser) {
    next();
  } else {
    res.redirect("/login");
  }
});

siteRoutes.get("/secret", (req, res, next) => {
  res.render("secret");
});



module.exports = siteRoutes;