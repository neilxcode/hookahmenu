const express = require('express');
const blendRoutes  = express.Router();
const Blend    = require('../models/blendSchema');
const mongoose     = require('mongoose');

// blendRoutes.get('/blends', (req, res, next) => {
//     Blend.find()
//     .then((infoFromDb) => {
//       res.render("blends", {infoFromDb});
//     })
//     .catch((err) => {
//         next(err)
//     })
// });

// blendRoutes.get('/', (req, res, next) => {
//     Blend.find()
//     .then((infoFromDb) => {
//         res.json(infoFromDb);
//       res.render("index", {infoFromDb});
//     })
//     .catch((err) => {
//         next(err)
//     })
// });

module.exports = blendRoutes;