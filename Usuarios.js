const { Router } = require('express');
const router = Router();
const usuario = require('../Usuario');
const crud = require('../CRUD');

router.get('/', async (req, res) => {
    const user = await crud.Select();
    res.json(user);
});

router.post('/', async (req, res) => {
    const { nombre, edad, sexo } = req.body;
    const user = usuario.Usuario.build({ nombre, edad, sexo });
    console.log(JSON.stringify(user, null, 2)); //
    await crud.Insert(user.nombre, user.edad, user.sexo);
    res.send('Usuario Guardado'); //
});

router.delete('/:id', async (req, res) => {
    const user = await crud.Delete(req.params.id);
    if (user == null) {
        res.send('Usuario no existe');
    } else {
        res.send('Usuario Eliminado');
    }
});

router.get('/:id', async (req, res) => {
    const user = await crud.findById(req.params.id);
    if (user == null) {
        res.send('Usuario no encontrado');
    } else {
        res.json(user);
    }
});

module.exports = router;