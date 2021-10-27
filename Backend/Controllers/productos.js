const { response } = require('express');
const productos = require('../models/productos');
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

const actualizarProducto = async (req, resp = response) => {

    const productoID = req.params.id;
    try {
        const producto = await ProductosModelo.findById(productoID);
        if(!producto){
            resp.status(404).json({
                ok: false,
                msg: 'El id del producto no coincide con ningun elemento en la base de datos',
            });
        }

        const productoActualizado = await ProductosModelo.findByIdAndUpdate(
            productoID, req.body, {
                new: true
            });

        resp.json({
            ok:true,
            msg: 'Prodcuto correctamente actualizado',
            producto: productoActualizado
        });
    } catch (error) {
        console.log(error);
    }
    
}

const eliminarProducto = async (req, resp = response) => {
    const productoId = req.params.id;

    try {
        
        const producto = await ProductosModelo.findById(productoId);

        if(!producto) {
            resp.status(404).json({
                ok: false,
                msg: 'El id del producto no coincide con ningun elemento en la base de datos',
            });
        }

        await ProductosModelo.findByIdAndDelete(productoId);

        resp.json({
            ok: true,
            msg: 'Producto eliminado de manera exitosa'
        });


    } catch (error) {
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'error al eliminar el producto',
        });
    }
}

const findById = async (req, resp = response) => {
    try {
        const id = req.header('x-id');
/*         const productoId = {_id:id}
        console.log(productoId); */
        const prueba = {Descripcion:req.header('x-Descripcion')};
        console.log(prueba)
        let producto="";
        if(id &&id.length===24){
            console.log("Entra al if");
            producto = await ProductosModelo.findById(id)
        }else{
            console.log("Entra else");
            producto = await ProductosModelo.findOne(prueba);
        }
        resp.status(200).json({
            ok: true,
            msg: 'Producto Exitosa',
            producto
        });

    } catch (error) {
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'Producto al encontrar el usuario',
        });
    }

}

module.exports={
    crearProducto,
    getproductos,
    actualizarProducto,
    eliminarProducto,
    findById
};


