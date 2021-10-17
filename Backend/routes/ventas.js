const { Router } = require('express');
const { crearVenta,
     getVenta,
     actualizarVenta,
     eliminarVenta,
     find } = require('../Controllers/ventas');
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
    '/find/', 
    find
);

/* router.get(
    '/findByIdCliente/', 
    findById
);

router.get(
    '/findByCliente/', 
    findById
); */


module.exports=router;