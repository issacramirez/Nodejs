const { Router } = require('express');
const router = Router();
const crud = require('../CRUD');

router.post('/', async (req, res) => {
    const { id, nombre, edad } = req.body;
    const update = await crud.Update(id, nombre, edad);
    if (update == null) {
        res.send('Usuario no existe');
    } else {
        res.send('Usuario editado');
    }
});

module.exports = router;