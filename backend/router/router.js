const express = require('express')
const data = require('../Data/data')

const router = express.Router()


router.get('/data',function(req, res) {
    res.json(data)

})

module.exports = router