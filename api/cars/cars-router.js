const express = require('express')

const db = require("../../data/dbConfig.js")

const router = express.Router()

router.get('/', (req, res, next) => {
  db('cars')
    .then(cars => {
      res.json(cars)
    })
    .catch(error => {
      next(error)
    });
})


module.exports = router;