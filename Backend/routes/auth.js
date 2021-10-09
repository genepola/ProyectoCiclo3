const { Router } = require('express');
const { crearUsuario, getusuarios,actualizarUsuario,eliminarUsuario } = require('../Controllers/auth');
const router = Router();

router.post(
    '/new',
    crearUsuario
);

router.get(
    '/listar', 
    getusuarios
);

router.put(
    '/actualizar/:id', 
    actualizarUsuario
);

router.delete(
    '/eliminar/:id', 
    eliminarUsuario
);

module.exports=router;