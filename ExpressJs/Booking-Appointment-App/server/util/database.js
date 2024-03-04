const Sequelize = require("sequelize");
const sequelize = new Sequelize("appointmentapp", "root", "Backend@1997", {
  dialect: "mysql",
  host: "localhost",
});


module.exports = sequelize;