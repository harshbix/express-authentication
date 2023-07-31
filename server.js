const express = require('express')
const app = express()
const port = 3000
const bcrypt = require('bcrypt');
const passport = require('passport');

const initializePassport = require('./passport-config')
initializePassport (passport , email => users.find(user => user.email === email)  )
const users = []
//view engines and middleware
app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => res.render('index'))

app.get('/login', (req, res) => {
  res.render('login')
})

app.get('/register', (req, res) => {
  res.render('register')
})
app.post('/register', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    users.push
      (
        {
          id: Date.now().toString(),
          name: req.body.name,
          email: req.body.email,
          password: hashedPassword,
        }
      )
      console.log(users);
    res.redirect('/login')
  } catch (error) {
    res.redirect('/register')
    console.log(error);
  }
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))