require("dotenv").config();

module.exports = {
  migrationDirectory: "migrations",
  driver: "pg",
  connectionString: process.env.NODE_ENV === process.env.DATABASE_URL,
};
