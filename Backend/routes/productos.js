const { Router } = require('express');
const { crearProducto,
     getproductos,
     actualizarProducto,
     eliminarProducto,
     findById } = require('../Controllers/productos');
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

router.get(
    '/findById/', 
    findById
);


module.exports=router;
