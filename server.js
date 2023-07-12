const express = require('express')
const app = express()
const port = 3000

//view engines and middleware
app.set('view engine', 'ejs')

app.get('/', (req, res) => res.render('index'))

app.get('/login', (req, res) => {
  res.render('login')
})
app.get('/register', (req, res) => {
    res.render('register')
  })
app.listen(port, () => console.log(`Example app listening on port ${port}!`))