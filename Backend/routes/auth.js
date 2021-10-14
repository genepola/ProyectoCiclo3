const { Router } = require('express');
const { crearUsuario,
     getusuarios,
     actualizarUsuario,
     eliminarUsuario,
     loginUsuario,
     getCategorias,
     findById,
     getEstados } = require('../Controllers/auth');
const router = Router();

router.post(
    '/new',
    crearUsuario
);

router.get(
    '/listar', 
    getusuarios
);

router.get(
    '/categoria', 
    getCategorias
);

router.get(
    '/estados', 
    getEstados
);

router.put(
    '/actualizar/:id', 
    actualizarUsuario
);

router.delete(
    '/eliminar/:id', 
    eliminarUsuario
);

router.post(
    '/', 
    loginUsuario
);

router.get(
    '/findById/:id', 
    findById
);
module.exports=router;