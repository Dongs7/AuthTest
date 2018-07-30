const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')

const passport = require('../config/passport')

// Perform Google Authentication, then
// send JWT to the client
router.get('/google', passport.authenticate('google', {scope : ['profile']}))
router.get('/google/callback',
                    passport.authenticate('google', {failureRedirect:'/'}),
                    (req,res) => {
                      res.redirect('http://localhost:3000/google/?token=' + req.user)
                    })


// Perform Facebook Authentication, then
// send JWT to the client
router.get('/facebook', passport.authenticate('facebook'))
router.get('/facebook/callback',
                    passport.authenticate('facebook', {failureRedirect:'/'}),
                    (req,res) => {
                      res.redirect('http://localhost:3000/facebook/?token=' + req.user)
                    })


router.get('/success', (req,res)=>{
  return res.send("success")
})

// Verify JWT from client side
// If the token is valid, then decode the token
// and send json response back to the client

router.post('/verify', (req,res)=>{
  received_token = req.headers.authorization.split(' ')[1]
  try{
    let decoded = jwt.verify(received_token, 'testing_purpose')
    console.log('Decoded :', decoded)
    let firstName = decoded.givenName
    res.send({fname:firstName,login : true})
  }catch(err){
    console.log(err)
  }
})

// Logout
router.get('/logout', (req,res)=>{
  req.logout()
  res.redirect('http://localhost:3000/')
})

module.exports = router;
