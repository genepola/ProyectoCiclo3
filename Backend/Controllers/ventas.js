const { response } = require('express');
const ventas = require('../models/venta');
const  VentasModelo  = require('../models/ventas');


const crearVenta = async (req, res = response) => {
    const { ID, Descripcion } = req.body;
    try {
        let venta = await VentasModelo.findOne({ ID });        

        if(venta) {
            return res.status(400).json({
                ok: false,
                msg: 'ya existe una venta registrada con este ID'
            });
        }
        
        venta = new VentasModelo(req.body);
        await venta.save(); /** para la base de datos */
   
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

module.exports={
    crearVenta,
};
