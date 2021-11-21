const express = require('express')
const exhb = require('express-handlebars')
const bodyParser = require('body-parser')
const path = require('path')
const sequelize = require('sequelize')

// DB
const db = require('./config/database')


// test DB
db.authenticate()
    .then(() => console.log('DB connected! =)'))
    .catch(err => console.log(err))

const app = express()

// Item routes
app.use('/items', require('./routes/items'))


app.get('/', (req, res) => res.send('INDEX'))

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server started on port ${PORT}`))
