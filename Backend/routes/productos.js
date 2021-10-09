const { Router } = require('express');
const { crearProducto, getproductos, actualizarProducto, eliminarProducto } = require('../Controllers/productos');
const router = Router();

router.post(
    '/new',
    crearProducto
);

router.get(
    '/listar', 
    getproductos
);

router.put(
    '/actualizar/:id', 
    actualizarProducto
);

router.delete(
    '/eliminar/:id', 
    eliminarProducto
);

module.exports=router;
