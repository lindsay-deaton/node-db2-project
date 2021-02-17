
exports.up = function(knex) {
  return knex.schema.table("cars", table=> {
table.text("transmissionType", 30)
  })
};

exports.down = function(knex) {
  return knex.schema.table("cars", table => {
    table.dropColumn("transmissionType")
  })
};
