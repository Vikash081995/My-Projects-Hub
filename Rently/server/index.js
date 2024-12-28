const express = require('express');
const app = express();  
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const PORT = process.env.PORT || 5000;

passport.use(new GoogleStrategy());

app.listen(PORT,()=>{
    console.log("Server is running on port 5000");
})