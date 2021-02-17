module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/car-dealer.db3'
    },
    useNullasDefault: true,
    migrations: {
      //files that build and tear down the database create a table called this with these columns in it with these constraints
      directory: "./data/migrations"
    },
    seed: {
      //seeds the database (putting it into something else seed 2.0 song. :'P ) okay, take those that existing database/those tables and shove this data into it.
      directory: "./data/seeds"
    }
  },

  staging: {

  },

  production: {

  }
};
