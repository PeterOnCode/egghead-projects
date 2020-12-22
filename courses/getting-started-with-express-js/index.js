const express = require('express')
const app = express()

const fs = require('fs')
const _ = require('lodash')
const engines = require('consolidate')

const users = []

fs.readFile('users.json',
  { encoding: 'utf-8' },
  ((err, data) => {
    if (err) throw err

    JSON.parse(data).forEach(user => {
      user.name.full = _.startCase(`${user.name.first} ${user.name.last}`)
      users.push(user)
    })
  }))

app.engine('hbs', engines.handlebars)
app.set('views', './views');
app.set('view engine', 'hbs');

app.get('/', function (req, res) {
  res.render('index', { users })
  // res.render('index.jade', { users })
})

app.get('/:username', (req, res) => {
  const username = req.params.username
  res.send(username)
})

app.get(/big.*/, (req, res, next) => {
  console.log('BIG USER ACCESS')
  next()
})

app.get(/.*dog.*/, (req, res, next) => {
  console.log('DOGS GO WOOF')
  next()
})

app.get('/yo', (req, res) => {
  res.send('YO!')
})

const server = app.listen(3000, function () {
  console.log(`Server running at http://localhost:${server.address().port}/`)
})
