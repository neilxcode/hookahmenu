const mongoose     = require('mongoose');
const Schema   = mongoose.Schema;
//CONNECT MODEL
const User = require("../models/userSchema");
const Blend = require("../models/blendSchema");

//CONNECT DB TO SEED
mongoose
  .connect('mongodb://localhost/hookahmenu', {useMongoClient: true})
  .then(() => {
    console.log('Connected to Mongo!')
  }).catch(err => {
    console.error('Error connecting to mongo', err)
  });


//SEEDS
const users = [
    {
        username: "Neil",
        password: "Rampersad",
        email: "neiilis@live.com",
        favorites: ["Orange"],
        role: "GUEST",
        timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
        }
    ]
//, "Arabian Cofee", "Black Grape", "Blue Mist", "Blue Surfer", "Candy", "Caramel Macchiato", "Christmas Mix", "Coco Jumbo", "Code 69", "Flower Power", "Fruit Sensation", "Hard Rush", "Honey Berry", "Lebanese Bombshell", "Marlett", "Passion Kiss", "Pink", "Pirate's Cave", "Pomberry", "Royal Grape", "Sex on the Beach", "UFO"
  const blends = [
    {
      names: "Apple Americano",
      description: "a nice flavor",
      brand: "Starbuzz",
      timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
    },
    {
      names: "Black Grape",
      description: "a nice flavor",
      brand: "Starbuzz",
      timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
    },
    {
      names: "Blue Mist",
      description: "a nice flavor",
      brand: "Starbuzz",
      timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
    },
    {
      names: "Blue Surfer",
      description: "a nice flavor",
      brand: "Starbuzz",
      timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
    },
    {
      names: "Candy",
      description: "a nice flavor",
      brand: "Starbuzz",
      timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
    },
    {
      names: "Caramel Macchiato",
      description: "a nice flavor",
      brand: "Starbuzz",
      timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
    },
    {
      names: "Christmas Mix",
      description: "a nice flavor",
      brand: "Starbuzz",
      timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
    },
    {
      names: "Coco Jumbo",
      description: "a nice flavor",
      brand: "Starbuzz",
      timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
    },
    {
      names: "Code 69",
      description: "a nice flavor",
      brand: "Starbuzz",
      timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
    },
    {
      names: "Flower Power",
      description: "a nice flavor",
      brand: "Starbuzz",
      timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
    },
    {
      names: "Fruit Sensation",
      description: "a nice flavor",
      brand: "Starbuzz",
      timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
      },
  ]

//CREATED SEEDS ON RUNNING FILE(NPM WEBSITE)
  User.create(users)
   .then(res =>{
     console.log("ok")
   })
   .catch(err =>{
     console.log(err)
   })

     Blend.create(blends)
   .then(res =>{
     console.log("ok")
   })
   .catch(err =>{
     console.log(err)
   })