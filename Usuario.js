const connection = require('./Connection.js');
const dataType = connection.DataTypes;

const Usuario = connection.sequelize.define('Usuario', {
    id: {
        type: dataType.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: dataType.STRING,
        allowNull: false,
    },
    edad: {
        type: dataType.INTEGER,
        allowNull: false
    },
    sexo: {
        type: dataType.STRING,
        allowNull: false
    }
}, {
    createdAt: false,
    updatedAt: false
});

// si no esta creada la tabla en la base de datos, la crea, si ya esta creada no crea nada
async function CreateTable() {
    await Usuario.sync();
}

exports.CreateTable = CreateTable();
exports.Usuario = Usuario;

