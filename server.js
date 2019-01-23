// DEPENDENCIES 
const express = require('express');
const mongoose = require ('mongoose');
const routes = require ('./routes');
const app = express ();
const PORT = process.env.PORT || 3001;

// DEFINE MIDDLEWARE HERE 
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// SERVE UP STATIC ASSETS (HEROKU)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// ADD ROUTES (API AND VIEW) 
app.use(routes);

// CONNECT TO THE MONGO DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");

// START THE API SERVER
app.listen(PORT, function () {
    console.log("API server is now listening on PORT ${PORT}!");
});