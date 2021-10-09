const { response } = require('express');
const  ProductosModelo  = require('../models/productos');
const crearProducto = async (req, res = response) => {
    const { ID, Descripcion } = req.body;
    try {
        let producto = await ProductosModelo.findOne({ ID });        

        if(producto) {
            return res.status(400).json({
                ok: false,
                msg: 'ya existe un producto registrado con este ID'
            });
        }
        
        producto = new ProductosModelo(req.body);
        await producto.save(); /** para la base de datos */
   
    res.status(201).json({
        ok:true,
        msg:'exitoso',
        ID,
        Descripcion
    });
    } catch(error){
        console.log(error);
        res.status(500).json({
            ok: false,
            msg:'error al guardar registro'
        })
    }
}
const getproductos = async (req, resp = response) => {
    const productos = await ProductosModelo.find();
      
    resp.status(200).json({
        ok:true,
        msg: 'Lista de productos',
        productos
    });
}

const actualizarProducto = (req, resp = response) => {
    resp.json({
        ok:true,
        msg: 'actualizar producto'
    });
}

const eliminarProducto = (req, resp = response) => {
    resp.json({
        ok:true,
        msg: 'eliminar producto'
    });
}


module.exports={
    crearProducto,
    getproductos,
    actualizarProducto,
    eliminarProducto
};

/** Actualizar productos */

