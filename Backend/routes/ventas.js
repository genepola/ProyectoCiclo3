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

//** Se debe realizar get por cada variable de búsqueda? */
router.get(
    '/findById/', 
    findById
);

router.get(
    '/findByIdCliente/', 
    findById
);

router.get(
    '/findByCliente/', 
    findById
);


module.exports=router;