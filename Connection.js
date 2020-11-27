const { Sequelize, DataTypes } = require('sequelize');

// uso de sequelize con SQL Server
const sequelize = new Sequelize('nodejsDB', 'sa', '1234', {
    dialect: 'mssql',
    host: '127.0.0.1',
    port: '1433',
});

// prueba de conexion a base de datos
async function test() {
    try {
        await sequelize.authenticate();
        console.log('Conexion Existosa, DB Conectada');
    } catch (e) {
        console.log('Conexion Fallida: ' + e);
    }
}

exports.testDb = test;
exports.DataTypes = DataTypes;
exports.sequelize = sequelize;