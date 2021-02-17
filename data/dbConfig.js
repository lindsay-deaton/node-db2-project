const knex = require("knex")
//we have knex here that pulls in the library

const config = require("../knexfile.js")

const db = knex(process.env.NODE_ENV === "production" ? config.production : config.development)
//when we call knex, are we using production are we using development? what are we doing?  if it is seeing production, do config.production, else to development

module.exports = db