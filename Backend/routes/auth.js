const { Router } = require('express');
const { crearUsuario,
     getusuarios,
     actualizarUsuario,
     eliminarUsuario,
     loginUsuario,
     getCategorias,
     findById,
     getEstados,
     validarUsuarioGoogle } = require('../Controllers/auth');

const { validarGoogleAuth } = require('../middleware/validar-google-auth');
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

router.post('/google/login', validarGoogleAuth, validarUsuarioGoogle)
module.exports=router;