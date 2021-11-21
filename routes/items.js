const express = require('express')
const router = express.Router
const db = require('../config/database')
const Item = require('../models/Item')

// router.get('/', (req, res) =>
//     Item.findAll()
//         .then(items => {
//             console.log(items)
//             res.sendStatus(200)
//         })
//         .catch(err => console.log(err))
// )

// router.get('/', (req, res) => res.sendStatus('Hey!'))


module.exports = router
