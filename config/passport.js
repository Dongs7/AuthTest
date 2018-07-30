const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const keys = require('./keys')
const jwt = require('jsonwebtoken')

passport.serializeUser((user, done)=>{
  done(null, user)
})

passport.deserializeUser((obj, done)=>{
  done(null, obj)
})

// Google Strategy
passport.use(new GoogleStrategy({
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret,
    callbackURL:"/auth/google/callback",
    // passReqToCallback : true
  }, (accessToken, refreshToken, profile, done)=>{
    jwt_token = jwt.sign(profile.name, 'testing_purpose')
    return done(null, jwt_token)
}))

//FaceBook Strategy
passport.use(new FacebookStrategy({
    clientID : keys.facebook.appID,
    clientSecret : keys.facebook.clientSecret,
    callbackURL:"/auth/facebook/callback",
  },(accessToken, refreshToken, profile, done)=>{
    jwt_token = jwt.sign(profile.name, 'testing_purpose')
    return done(null, jwt_token)
}))



module.exports = passport
