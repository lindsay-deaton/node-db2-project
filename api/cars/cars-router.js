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

router.get("/:id", (req, res, next) => {
  const { id } = req.params;
  db('cars').where({ id }).first()
    .then(car => {
    res.json(car)
    })
    .catch(error => {
    next(error)
  })
})

router.post("/", (req, res, next) => {
  const data = req.body;
  db("cars").insert(data)
    .then(ids => {
    return db("cars").where({id: ids[0]})
    })
    .then(newEntry => {
    res.status(201).json(newEntry)
    })
    .catch(error => {
    next(error)
  })
})

router.use((error, req, res, next) => {
  res.status(500).json({message: error.message, stack: error.stack})
})

module.exports = router;