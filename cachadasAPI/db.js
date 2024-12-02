const { Sequelize } = require('sequelize');

const usuarioModel = require('./models/usuarios');

const sequelize = new Sequelize('cachada', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 20, // Número máximo de conexiones
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

const Usuario = usuarioModel(sequelize, Sequelize);

sequelize.sync({force : false})
.then(() => {console.log('tablas sincronizadas')});

module.exports = {
    Usuario
}

