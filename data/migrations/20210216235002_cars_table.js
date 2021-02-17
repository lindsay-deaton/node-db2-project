const { table } = require("../dbConfig");

exports.up = function(knex) {
  //building
  return knex.schema.createTable("cars", car => {
    table.increments()
    table.text("vinNumber").unique().notNullable()
    table.text("make", 128).notNullable()
    table.text("model", 128).notNullable()
  })

};

exports.down = function(knex) {
  //destroying
  // return knex.schema.dropTableIfExists("cars")
};
