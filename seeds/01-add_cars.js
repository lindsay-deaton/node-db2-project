
exports.seed = function(knex) {
  // Deletes ALL existing entries or truncate(demolishes everything faster)
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, vinNumber: '01234567890abc', make: 'Chevy', model: 'Blazer'},
        {id: 2, vinNumber: '01234567890abd', make: 'Chevy', model: 'Silverado'},
        {id: 3, vinNumber: '01234567890abe', make: 'Chevy', model: 'Impala'},
      ]);
    });
};
