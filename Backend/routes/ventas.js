const { Router } = require('express');
const { crearVenta,
     getVenta,
     actualizarVenta,
     eliminarVenta,
     findById } = require('../Controllers/ventas');
const router = Router();

router.post(
    '/new',
    crearVenta
);

router.get(
    '/listar', 
    getVenta
);

router.put(
    '/actualizar/:id', 
    actualizarVenta
);

router.delete(
    '/eliminar/:id', 
    eliminarVenta
);

router.get(
    '/findById/', 
    findById
);


module.exports=router;