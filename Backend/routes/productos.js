const { Router } = require('express');
const { crearProducto } = require('../Controllers/productos');
const router = Router();

router.post(
    '/new',
    crearProducto
);

module.exports=router;
