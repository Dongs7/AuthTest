const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()
const passport = require('./config/passport')
const cors = require('cors')


// app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/test', (req,res)=>{
  return res.send("TEST FROM EXPRESS")
})

app.get('/', (req,res)=>{
  res.sendFile(path.join(path.join(__dirname,'index.html')))
})

app.use(passport.initialize());
const auth = require('./routes/auth')
app.use('/auth', auth)

app.listen(process.env.PORT || 3001, ()=>{
  console.log("App listening.. " + process.env.PORT)
})
