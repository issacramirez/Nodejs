const usuario = require('./Usuario');

exports.Insert = async function (nombre, edad, sexo) {
    await usuario.Usuario.create({ nombre: nombre, edad: edad, sexo: sexo });
    console.log('funcion: Insert at: ' + new Date());
}

exports.Select = async function () {
    var Users = await usuario.Usuario.findAll();
    if (Users.length == 0) {
        console.log("No hay usuarios registrados");
    } else {
        console.log('funcion: Select at: ' + new Date());
        console.log("Usuarios: ", JSON.stringify(Users, null, 2));
    }
    return Users;
}

async function findById(id) {
    try {
        const user = await usuario.Usuario.findOne({
            where: {
                id: id
            }
        });
        if (user != null) {
            console.log('funcion: findById at: ' + new Date());
            console.log('Usuario: ', JSON.stringify(user, null, 2));
            return user.toJSON();
        } else {
            console.log('Usuario no existe');
            return null;
        }
    } catch (e) {
        console.log('Usuario no encontrado ' + e);
    }
}

exports.Update = async function (id, nombre, edad) {
    const updating = await findById(id);
    if (updating == null) {
        console.log('No se puede editar, Usuario no existe');
        return null;
    } else {
        console.log('Usuario a editar: ', updating);
        await usuario.Usuario.update({ nombre: nombre, edad: edad }, {
            where: {
                id: id
            }
        })
        console.log('funcion: Update at: ' + new Date());
        return 1;
    }
}

exports.Delete = async function (id) {
    const deleting = await findById(id);
    if (deleting == null) {
        console.log('No se puede eliminar, Usuario no existe');
        return null;
    } else {
        console.log('Usuario a eliminar: ', deleting);
        await usuario.Usuario.destroy({
            where: {
                id: id
            }
        })
        console.log('funcion: Delete at: ' + new Date());
        return 1;
    }
}

exports.findById = findById;