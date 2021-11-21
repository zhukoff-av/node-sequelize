const express = require('express')
const router = express.Router()
const db = require('../config/database')
const Item = require('../models/Item')
const sequelize = require('../config/database')

// Get item list
router.get('/items', (req, res) =>
    Item.findAll()
        .then(items => {
            console.log(items)
            res.sendStatus(200)
        })
        .catch(err => console.log(err))
)

// Add an item
router.get('/add', (req, res) => {

// Force sync all models
// It will drop the table first
// and re-create it afterwards
    // sequelize.sync({force: true})

    const data = {
        title: 'Hey!',
        technologies: 'JS',
        budget: '$12000',
        description: '',
        contact_email: 'vfghj@gmail.com'
    }

    let {title, technologies, budget, description, contact_email} = data

    // Insert into table
    Item.create({
        title,
        technologies,
        description,
        budget,
        contact_email
    })
        .then(res.redirect('/items'))
        .catch(err => console.log(err))

})

router.get('/', (req, res) => res.sendStatus(200))

module.exports = router
