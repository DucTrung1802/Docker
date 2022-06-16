// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "postgresql",
    connection: {
      database: "knexjs_tutorial",
      user: "postgres",
      password: "trungboss18",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations", // The most important feature when it comes to this library
    },
  },
};
