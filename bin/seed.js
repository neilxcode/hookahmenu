const mongoose     = require('mongoose');
const Schema   = mongoose.Schema;
//CONNECT MODEL
const User = require("../models/userSchema");

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
        favorites: "Orange",
        role: "GUEST",
        timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
        }
    ]

//CREATED SEEDS ON RUNNING FILE(NPM WEBSITE)
  User.create(users)
   .then(res =>{
     console.log("ok")
   })
   .catch(err =>{
     console.log(err)
   })