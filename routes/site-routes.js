const express    = require("express");
const siteRoutes = express.Router();
const Blend = require('../models/blendSchema');
const mongoose     = require('mongoose');
const User    = require('../models/userSchema');


  siteRoutes.get("/", (req, res, next) => {
    Blend.find()
          .sort({likes: -1})
    .then((infoFromDb) => {
      console.log("ascending: ",infoFromDb)
      res.render("index", {infoFromDb});
    })
})
// get details page
siteRoutes.get("/index/:id", (req, res) => {
  const blendId = req.params.id;
  Blend.findById(blendId)
  .then( oneBlendFromDb => {
    res.render('details.hbs', { oneBlend:oneBlendFromDb })
  } )
 
});

siteRoutes.post("/index/:id", (req, res) => {
  const blendId = req.params.id;
    console.log("=================",blendId)
  const blendName = req.body.names;
  const blendBrand = req.body.brand;
  const blendDescription = req.body.description;
  const blendLikes = req.body.likes;

   Blend.findById(blendId)
    .then(blendFromDb => {
     console.log("blend from db before: ", blendFromDb)
     blendFromDb.likes+=1;
      blendFromDb.save()
      console.log("blend from db after: ", blendFromDb)
    res.redirect('/')
  })
  .catch(err => {
    console.log("Error while getting blend details: ", err)
})

});

siteRoutes.get("/blends", (req, res) => {
  Blend.find()
    .then((infoFromDb) => {
      res.render("blends", {infoFromDb});
    })
})
siteRoutes.get("/secret", (req, res, next) => {
  res.render("secret");
});

siteRoutes.use((req, res, next) => {
  if (!req.session.currentUser) {
    next();
  } else {
    res.redirect("/login");
  }
});

// get edit
siteRoutes.get('/blends/:blendId/edit', (req, res, next) => {
  const blendId = req.params.blendId;
  Blend.findById(blendId)
  .then( foundBlend => {
    res.render('edit-blend.hbs', { blend: foundBlend })
  } )
})

siteRoutes.post('/blends/:theId', (req, res, next) => {
  const blendId = req.params.theId;
  // console.log("body is: ", req.body)
  Blend.findByIdAndUpdate(blendId, {
    names: req.body.editedName,
    description: req.body.editedDescription,
    brand: req.body.editedBrand,
    strength:req.body.editedStrength
  })
  .then(() => {
    res.redirect(`/index/${blendId}`);
  })
})

siteRoutes.post('/blends/:theId/delete', (req, res, next) => {
  const blendId = req.params.theId;
    Blend.findByIdAndRemove(blendId)
    .then(() => {
        res.redirect("/");
    })
    .catch( error => {
        console.log("Error while deleting: ", error)
    })
})


// siteRoutes.get("/secret", (req, res, next) => {
//   res.render("secret");
// });


module.exports = siteRoutes;